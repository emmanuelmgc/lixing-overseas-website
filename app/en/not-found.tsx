import Link from "next/link";

export default function EnglishNotFound() {
  return (
    <main id="main" className="en-shell en-section">
      <p className="en-kicker">404</p>
      <h1 className="inner-page-title">Page not found</h1>
      <p className="inner-intro">Go to the English homepage or get in touch to discuss your expansion plans.</p>
      <Link className="en-button" href="/en">English homepage</Link>
    </main>
  );
}
