import Image from "next/image";
import { ArrowRight } from "lucide-react";

const journey = [
  {
    title: "Shipment Collection",
    description:
      "Every shipment begins with a secure pickup. Our logistics team verifies, labels and prepares every package for seamless transportation.",
    image: "/images/pickup.jpg",
  },
  {
    title: "Warehouse Processing",
    description:
      "Packages are sorted and processed through our intelligent logistics hubs, ensuring accurate routing and faster delivery times.",
    image: "/images/warehouse.jpg",
  },
  {
    title: "Global Air Freight",
    description:
      "Your shipment travels through our trusted international cargo network, connecting major destinations with speed and reliability.",
    image: "/images/cargo.jpg",
  },
  {
    title: "Final Delivery",
    description:
      "Our delivery specialists ensure your shipment arrives safely and on time, backed by real-time tracking until it reaches its destination.",
    image: "/images/delivery.jpg",
  },
];

export default function ShipmentJourney() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1E3A8A]">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Every shipment follows a carefully managed journey.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From collection to delivery, every stage is monitored to ensure
            transparency, security and timely arrival.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-24 space-y-28">
          {journey.map((step, index) => (
            <div
              key={step.title}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={900}
                  height={650}
                  className="h-[400px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-sm font-semibold tracking-[0.3em] text-[#1E3A8A]">
                  STEP {index + 1}
                </span>

                <h3 className="mt-4 text-4xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {step.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-[#1E3A8A] transition hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
