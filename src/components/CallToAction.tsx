import { ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#1E3A8A] py-32">
      {/* Background Decoration */}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
            READY TO SHIP?
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Deliver with confidence.
            <br />
            Track with certainty.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-blue-100">
            Whether you're sending a single parcel or managing global logistics,
            VelnorixGlobal keeps every shipment moving with speed, security and
            complete visibility.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="group flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#1E3A8A] transition duration-300 hover:scale-105">
              Track Shipment
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="group flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#1E3A8A]">
              <Phone size={20} />
              Contact Support
            </button>
          </div>

          {/* Bottom Trust Bar */}

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/20 pt-10 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-white">220+</h3>

              <p className="mt-2 text-blue-200">Countries</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">12M+</h3>

              <p className="mt-2 text-blue-200">Deliveries</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">99.8%</h3>

              <p className="mt-2 text-blue-200">Success Rate</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>

              <p className="mt-2 text-blue-200">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
