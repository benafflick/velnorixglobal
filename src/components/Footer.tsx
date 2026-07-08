import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="VelnorixGlobal Logo"
                width={60}
                height={60}
                priority
                className="object-contain"
              />

              <div>
                <h2 className="text-3xl font-bold text-white">
                  VelnorixGlobal
                </h2>

                <p className="text-sm text-slate-400">
                  Global Logistics & Freight Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-8 text-slate-400">
              Since 2000, VelnorixGlobal has delivered trusted logistics
              solutions across the globe. From express delivery and air freight
              to ocean cargo, warehousing, customs clearance, and supply chain
              management, we remain committed to providing secure, efficient,
              and reliable transportation services for businesses and
              individuals worldwide.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/tracking" className="transition hover:text-white">
                  Track Shipment
                </Link>
              </li>

              <li>
                <Link href="/faq" className="transition hover:text-white">
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="transition hover:text-white">Express Delivery</li>

              <li className="transition hover:text-white">Cargo Shipping</li>

              <li className="transition hover:text-white">Air Freight</li>

              <li className="transition hover:text-white">Ocean Freight</li>

              <li className="transition hover:text-white">
                Warehousing & Distribution
              </li>

              <li className="transition hover:text-white">Customs Clearance</li>

              <li className="transition hover:text-white">
                Supply Chain Solutions
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">
          <p>© 2000–2026 VelnorixGlobal. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>

            <Link
              href="/shipping-information"
              className="transition hover:text-white"
            >
              Shipping Information
            </Link>

            <Link href="/support" className="transition hover:text-white">
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
