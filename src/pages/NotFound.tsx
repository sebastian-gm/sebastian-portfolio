import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default function NotFound() {
  return (
    <>
      <Navigation />
      <main
        id="main"
        className="case-main page-width min-h-[75vh]"
        tabIndex={-1}
      >
        <div className="py-16">
          <p className="eyebrow">404 / Page not found</p>
          <h1 className="text-4xl mt-4 mb-6">
            Let’s get you back to the work.
          </h1>
          <p className="muted mb-8">This page has moved or does not exist.</p>
          <Link to="/" className="button button-primary">
            Back to the portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
