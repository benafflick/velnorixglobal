import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-20 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="VGX Logistics Logo"
            width={44}
            height={44}
            className="rounded-md object-contain"
            priority
          />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              VelnorixGlobal
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Logistics & Express
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A]"
          >
            Track
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A]"
          >
            Shipping
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A]"
          >
            Services
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A]"
          >
            Support
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A]"
          >
            About
          </a>
        </nav>

        <button className="rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163172]">
          Ship Now
        </button>
      </div>
    </header>
  );
}
