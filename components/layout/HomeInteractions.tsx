"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

export function HomeInteractions({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const homepage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    homepage.current?.querySelector(".nav-toggle")?.setAttribute("aria-expanded", String(menuOpen));
  }, [menuOpen]);

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return;

    if (event.target.closest(".nav-toggle")) {
      setMenuOpen(open => !open);
      return;
    }

    const link = event.target.closest<HTMLAnchorElement>("a[data-dialog]");
    const dialog = link?.dataset.dialog && document.getElementById(link.dataset.dialog);
    if (link && dialog instanceof HTMLDialogElement) {
      event.preventDefault();
      dialog.showModal();
      dialog.addEventListener("close", () => link.focus({ preventScroll: true }), { once: true });
      return;
    }

    if (event.target instanceof HTMLDialogElement && event.target.open) {
      event.target.close();
      return;
    }

    if (event.target.closest(".nav a")) setMenuOpen(false);
  }

  return (
    <div
      className={`lexon-home${menuOpen ? " menu-open" : ""}`}
      id="top"
      ref={homepage}
      onClick={handleClick}
      onKeyDown={event => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          event.currentTarget.querySelector<HTMLButtonElement>(".nav-toggle")?.focus();
        }
      }}
    >
      {children}
    </div>
  );
}
