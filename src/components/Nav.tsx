import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#F0F0F0] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-[#D4A574]">Aspect</span>
          <span className="text-[#7C3AED]">ra</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 sm:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-[#666666] transition-colors hover:text-[#1A1A1A]"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-[#666666] transition-colors hover:text-[#1A1A1A]"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-[#666666] transition-colors hover:text-[#1A1A1A]"
          >
            About
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#E53935] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#C62828]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6 text-[#1A1A1A]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
