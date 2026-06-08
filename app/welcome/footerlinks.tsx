import { Link } from "react-router";

export default function FooterLinks() {
  const DonateLink = "./";
  const ConnectLink = "./";
  const AboutLink = "./";

  return (
    
    <footer className="bg-blue-950 py-12 text-white md:py-16">
      <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
        <nav
          aria-label="Footer navigation"
          className="grid gap-8 sm:grid-cols-3"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">
              Support
            </p>
            <Link
              to={DonateLink}
              className="text-lg font-semibold hover:text-blue-200 hover:underline"
            >
              Donate
            </Link>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">
              Connect
            </p>
            <Link
              to={ConnectLink}
              className="text-lg font-semibold hover:text-blue-200 hover:underline"
            >
              Contact
            </Link>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">
              Discover
            </p>
            <Link
              to={AboutLink}
              className="text-lg font-semibold hover:text-blue-200 hover:underline"
            >
              About Us
            </Link>
          </div>
        </nav>

        <p className="mt-5 border-t border-white/20 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Vets website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}