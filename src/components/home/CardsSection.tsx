import CardsShowcase from "@/components/CardsShowcase";

export default function CardsSection() {
  return (
    <section id="gme-cards" className="relative overflow-hidden snap-section lg:min-h-screen py-14 sm:py-16 lg:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cards/[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gray/[0.04] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cards/[0.02] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen flex items-center">
        <div className="w-full">
          <CardsShowcase />
        </div>
      </div>
    </section>
  );
}
