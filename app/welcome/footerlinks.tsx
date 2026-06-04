export default function FooterLinks() {
    const DonateLink = "./";
    const ConnectLink = "./";
    const AboutLink = "./"
  return (
    <footer className="bg-blue-950 px-6 py-12 text-white md:px-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Footer navigation"
          className="grid gap-8 sm:grid-cols-3"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">
              Support
            </p>
            <a
              href={DonateLink}
              className="text-lg font-semibold hover:text-blue-200 hover:underline"
            >
              Donate
            </a>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">
              Connect
            </p>
            <a
              href={ConnectLink}
              className="text-lg font-semibold hover:text-blue-200 hover:underline"
            >
              Contact
            </a>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">
              Discover
            </p>
            <a
              href={AboutLink}
              className="text-lg font-semibold hover:text-blue-200 hover:underline"
            >
              About Us
            </a>
          </div>
        </nav>

        <p className="mt-5 border-white/20 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Soldier Lethality Alumni Association. All rights reserved.
        </p>
      </div>
    </footer>
  );
}