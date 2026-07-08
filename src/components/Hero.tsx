"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PackageSearch, ShieldCheck, Loader2 } from "lucide-react";

export default function Hero() {
  const router = useRouter();

  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = () => {
    const number = trackingNumber.trim().toUpperCase();

    if (!number) {
      setError("Please enter your tracking number.");
      return;
    }

    setError("");
    setLoading(true);

    router.push(`/tracking/${number}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };

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
                  {/* Input */}
                  <div className="flex-1">
                    <div className="relative">
                      <PackageSearch
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        value={trackingNumber}
                        onChange={(e) => {
                          setTrackingNumber(e.target.value);
                          if (error) setError("");
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. VGX938472938US"
                        className={`h-14 w-full rounded-xl border bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 ${
                          error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-300 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]/10"
                        }`}
                      />
                    </div>

                    {error && (
                      <p className="mt-2 text-sm font-medium text-red-600">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    onClick={handleTrack}
                    disabled={loading}
                    className="flex h-14 min-w-[170px] cursor-pointer items-center justify-center rounded-xl bg-[#1E3A8A] px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#163172] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      "Track Now"
                    )}
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

                <button className="mt-6 cursor-pointer font-semibold text-[#1E3A8A] transition hover:underline">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="ml-14 pb-16 pt-20 lg:pt-16">
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
