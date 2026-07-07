import { PackageSearch, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Tracking Card */}
        <div className="pt-10">
          <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-2xl lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              {/* Left Side */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Track Your Shipment
                </h2>

                <p className="mt-2 text-slate-500">
                  Enter your tracking number to receive real-time delivery
                  updates.
                </p>

                <div className="mt-6 flex flex-col gap-4 md:flex-row">
                  <div className="relative flex-1">
                    <PackageSearch
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="e.g. VGX938472938US"
                      className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-[#1E3A8A] focus:outline-none"
                    />
                  </div>

                  <button className="h-14 rounded-xl bg-[#1E3A8A] px-8 font-semibold text-white transition hover:bg-[#163172]">
                    Track Now
                  </button>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <ShieldCheck size={18} className="text-[#1E3A8A]" />
                  <span>Your data is safe and secure.</span>
                </div>
              </div>

              {/* Right Side */}
              <div className="border-t pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <h3 className="text-lg font-semibold text-slate-900">
                  Need help tracking?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Our support team is available 24/7 to help you locate your
                  shipment and answer any delivery questions.
                </p>

                <button className="mt-6 font-semibold text-[#1E3A8A] transition hover:underline">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="pt-20 pb-16 lg:pt-16 ml-14">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-7xl">
              Delivering
              <br />
              Possibilities,
              <br />
              Everywhere.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-200">
              Fast, secure, and reliable logistics solutions connecting people
              and businesses across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
