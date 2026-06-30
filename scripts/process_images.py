#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
励行出海官网 - 图片批量处理脚本
1. 11 张新 jpg → webp（按方案规格）
2. 压缩 uz-destinations-hero.webp
3. 清理所有 jpg/png 冗余文件
"""
import os
import sys
from pathlib import Path
from PIL import Image

IMG_DIR = Path(r"C:\Users\Emmanuelmgc\WorkBuddy\2026-06-28-14-03-13\analysis\extracted\public\images\lixing")

# 13 个新图位的处理规格：(jpg 输入名, webp 输出名, 最大宽, 质量, 最大字节)
# 最大宽按图位规格：Hero/KeyMarkets=1920/1600，案例=1200，子页=1920
SPECS = [
    # P0 高权重首屏
    ("market-uzbekistan-park.jpg",   "market-uzbekistan-park.webp",   1600, 82, 220),
    ("market-francophone-paris.jpg", "market-francophone-paris.webp", 1600, 82, 220),
    # P0 ServicePath
    ("service-business-visit.jpg",   "service-business-visit.webp",   1200, 80, 160),
    ("service-project-landing.jpg",  "service-project-landing.webp",  1200, 80, 160),
    ("service-overseas-marketing.jpg","service-overseas-marketing.webp", 1200, 80, 160),
    # P1 案例
    ("case-uz-park.jpg",             "case-uz-park.webp",              1200, 80, 180),
    ("case-fr-brand.jpg",            "case-fr-brand.webp",             1200, 80, 180),
    ("case-eu-hk.jpg",               "case-eu-hk.webp",                1200, 80, 180),
    ("case-jp-eldercare.jpg",        "case-jp-eldercare.webp",         1200, 80, 180),
    # P1 目的地
    ("dest-uz-main.jpg",             "dest-uz-main.webp",              1920, 82, 240),
    ("dest-fr-main.jpg",             "dest-fr-main.webp",              1920, 82, 240),
]

# 待删除的冗余 jpg/png（用户没提供新图的 + 全部 ppt- 旧图 + 对应 webp 已存在的 jpg/png）
TO_DELETE = [
    # 旧 ppt- 素材（5 张，全部被新图替代）
    "ppt-business-briefing.webp",
    "ppt-boardroom-dialogue.webp",
    "ppt-france-workshop.webp",
    "ppt-francophone-city.webp",
    "ppt-delegation-formal.webp",
    "ppt-site-visit.webp",  # 被 dest-uz-main 替代
    # 冗余 jpg（原代码包带的，对应 webp 已存在但代码引用的是 webp）
    "brand-event.jpg", "business-visit.jpg", "case-dialogue.jpg",
    "consultant-note.jpg", "education-visit.jpg", "exhibition-field.jpg",
    "francophone-market.jpg", "hero-meeting.jpg", "resource-connection.jpg",
    # 重复图位（用户在 case-uz-water/solar 没给新图，但 cases.ts 仍然引用原 webp，对应 jpg 可删）
    "uz-case-park.jpg", "uz-case-water.jpg", "uz-case-solar.jpg",
    "uz-case-dialogue.jpg", "uz-destinations-hero.jpg", "uz-tashkent-mosque.jpg",
    # Hero 用的 AI 生成 png 大文件（webp 76KB 还在用，png 1.59MB 不要）
    "hero-consulting-generated.png",
    # 用户没提供新图、但旧 jpg 也没用过的
    # 全部 uz-*.jpg 都已列入
]


def convert_jpg_to_webp(jpg_name, webp_name, max_w, quality, max_kb):
    """jpg → webp，按规格缩放并尽量压到目标字节"""
    src = IMG_DIR / jpg_name
    dst = IMG_DIR / webp_name
    if not src.exists():
        print(f"  [SKIP] {jpg_name} not found")
        return None

    img = Image.open(src)
    # 转 RGB（去掉 alpha）
    if img.mode in ("RGBA", "P", "LA"):
        img = img.convert("RGB")

    # 等比缩放（只压 width）
    if img.width > max_w:
        ratio = max_w / img.width
        new_h = int(img.height * ratio)
        img = img.resize((max_w, new_h), Image.LANCZOS)

    # 写 webp（先用目标质量试一次）
    img.save(str(dst), "WEBP", quality=quality, method=6)
    size_kb = dst.stat().st_size / 1024

    # 如果超过目标，最大宽再压一档
    if size_kb > max_kb:
        # 降质量到 75 重试
        img.save(str(dst), "WEBP", quality=75, method=6)
        size_kb = dst.stat().st_size / 1024

    return {
        "src": jpg_name,
        "dst": webp_name,
        "from_kb": src.stat().st_size / 1024,
        "to_kb": size_kb,
        "width": img.width,
        "height": img.height,
    }


def compress_existing_webp(name, max_kb, max_w=1920, quality=80):
    """重新压缩已存在的 webp 文件"""
    src = IMG_DIR / name
    if not src.exists():
        print(f"  [SKIP] {name} not found")
        return None
    img = Image.open(src)
    if img.mode in ("RGBA", "P", "LA"):
        img = img.convert("RGB")
    if img.width > max_w:
        ratio = max_w / img.width
        new_h = int(img.height * ratio)
        img = img.resize((max_w, new_h), Image.LANCZOS)
    from_kb = src.stat().st_size / 1024
    img.save(str(src), "WEBP", quality=quality, method=6)
    to_kb = src.stat().st_size / 1024
    return {"name": name, "from_kb": from_kb, "to_kb": to_kb, "w": img.width, "h": img.height}


def main():
    print("=" * 70)
    print("阶段 1：jpg → webp 转换（按方案规格）")
    print("=" * 70)
    results = []
    for jpg, webp, w, q, kb in SPECS:
        r = convert_jpg_to_webp(jpg, webp, w, q, kb)
        if r:
            results.append(r)
            print(f"  ✅ {r['src']:42s} -> {r['dst']:38s}  {r['from_kb']:7.1f}KB -> {r['to_kb']:6.1f}KB  {r['width']}x{r['height']}")

    print()
    print("=" * 70)
    print("阶段 2：压缩 uz-destinations-hero.webp（已存在的）")
    print("=" * 70)
    r = compress_existing_webp("uz-destinations-hero.webp", max_kb=220, max_w=1920, quality=82)
    if r:
        print(f"  ✅ {r['name']}  {r['from_kb']:7.1f}KB -> {r['to_kb']:6.1f}KB  {r['w']}x{r['h']}")

    print()
    print("=" * 70)
    print("阶段 3：清理冗余文件")
    print("=" * 70)
    deleted = 0
    saved_kb = 0
    for name in TO_DELETE:
        p = IMG_DIR / name
        if p.exists():
            sz = p.stat().st_size / 1024
            p.unlink()
            deleted += 1
            saved_kb += sz
            print(f"  🗑️  {name}  ({sz:.0f}KB)")
    print(f"\n  删除 {deleted} 个文件，节省 {saved_kb/1024:.2f}MB")

    # 总览
    print()
    print("=" * 70)
    print("总览：public/images/lixing/ 当前状态")
    print("=" * 70)
    total_kb = 0
    files = sorted(IMG_DIR.iterdir(), key=lambda x: x.name)
    for f in files:
        if f.is_file():
            sz = f.stat().st_size / 1024
            total_kb += sz
            print(f"  {f.name:45s}  {sz:8.1f}KB")
    print(f"\n  当前目录总大小: {total_kb/1024:.2f}MB")


if __name__ == "__main__":
    main()
