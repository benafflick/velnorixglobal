export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#1E3A8A] text-lg font-bold text-white">
            V
          </div>

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
