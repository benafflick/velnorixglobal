import {
  Headset,
  Phone,
  Mail,
  MessageCircleMore,
  ArrowRight,
} from "lucide-react";

export default function SupportCard() {
  return (
    <section className="mt-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1E3A8A] via-[#2447A8] to-[#17306F] p-10 text-white shadow-2xl">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
        {/* Left */}

        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 backdrop-blur-md">
            <Headset size={20} />

            <span className="font-medium">24/7 Customer Support</span>
          </div>

          <h2 className="mt-6 text-4xl font-bold">
            Need Assistance With Your Shipment?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Our logistics specialists are available around the clock to assist
            with shipment tracking, customs enquiries, delivery scheduling and
            any questions regarding your package.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-white px-7 py-4 font-semibold text-[#1E3A8A] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              Contact Support
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition duration-300 hover:bg-white/20">
              Live Chat
            </button>
          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
          <h3 className="text-xl font-bold">Support Channels</h3>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm text-blue-100">Phone</p>

                <p className="font-semibold">+1 (800) 555-0188</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm text-blue-100">Email</p>

                <p className="font-semibold">support@velnorixglobal.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <MessageCircleMore size={22} />
              </div>

              <div>
                <p className="text-sm text-blue-100">Live Chat</p>

                <p className="font-semibold">Available 24/7</p>
              </div>
            </div>
          </div>

          <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-[#1E3A8A] transition duration-300 hover:-translate-y-1">
            Start Conversation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
