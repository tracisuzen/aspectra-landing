import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#F0F0F0] bg-[#FAFAFA]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div className="md:mt-1">
          <div className="text-lg font-bold tracking-tight">
            <span className="text-[#D4A574]">Aspect</span>
            <span className="text-[#7C3AED]">ra</span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-[#999999]">
            Relationship astrology powered by the Swiss Ephemeris.
          </p>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Product</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#features" className="text-sm text-[#666666] hover:text-[#1A1A1A]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-[#666666] hover:text-[#1A1A1A]">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Company</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[#666666] hover:text-[#1A1A1A]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-[#666666] hover:text-[#1A1A1A]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-[#666666] hover:text-[#1A1A1A]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#666666] hover:text-[#1A1A1A]">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#F0F0F0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs text-[#999999]">
          <span>&copy; {new Date().getFullYear()} Aspectra. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
