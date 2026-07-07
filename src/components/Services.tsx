import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Express Delivery",
    description:
      "When time matters most, our express delivery service ensures your shipments reach their destination quickly, securely, and with complete visibility from pickup to delivery.",
    image: "/images/delivery.jpg",
    alt: "Express Delivery",
  },
  {
    title: "Global Air Freight",
    description:
      "Our international air freight network connects businesses across continents, providing dependable transportation, customs support, and real-time shipment tracking.",
    image: "/images/cargo.jpg",
    alt: "Global Air Freight",
  },
  {
    title: "Warehousing & Distribution",
    description:
      "Modern fulfillment centers equipped with advanced inventory management allow us to process, store, and dispatch shipments efficiently while maintaining the highest standards.",
    image: "/images/warehouse.jpg",
    alt: "Warehouse",
  },
  {
    title: "Supply Chain Solutions",
    description:
      "From procurement to final-mile delivery, we design scalable logistics solutions that help businesses optimize operations and keep goods moving without interruption.",
    image: "/images/pickup.jpg",
    alt: "Supply Chain",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1E3A8A]">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Logistics solutions built for every shipment.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're sending a single parcel or managing enterprise
            logistics, VelnorixGlobal delivers reliable, secure and efficient
            transportation services across the world.
          </p>
        </div>

        {/* Services */}
        <div className="mt-24 space-y-28">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="group overflow-hidden rounded-3xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={900}
                  height={650}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                  Premium Logistics
                </span>

                <h3 className="mt-4 text-4xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {service.description}
                </p>

                <button className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#1E3A8A] px-6 py-3 font-semibold text-[#1E3A8A] transition hover:bg-[#1E3A8A] hover:text-white">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}