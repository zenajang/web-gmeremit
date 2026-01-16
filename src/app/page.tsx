import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#191c1f] to-[#2d3138] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ed1c24] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#825cff] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block bg-[#ed1c24]/20 text-[#ed1c24] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  No.1 Money Transfer in Korea
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Fast & Secure
                  <br />
                  <span className="text-[#ed1c24]">Money Transfer</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                  Send money to over 200 countries with GME Remit.
                  Best exchange rates, lowest fees, and maximum security.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="#app"
                    className="bg-[#ed1c24] hover:bg-[#c41920] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 text-center cursor-pointer"
                  >
                    Download Free App
                  </Link>
                  <Link
                    href="#features"
                    className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 text-center cursor-pointer"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* QR Code Section - Hidden on mobile */}
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center mb-4">
                    <p className="text-[#191c1f] font-semibold text-lg">Download App</p>
                    <p className="text-gray-500 text-sm">Scan QR Code</p>
                  </div>
                  {/* QR Code */}
                  <div className="w-48 h-48">
                    <Image
                      src="/images/home/QR.png"
                      alt="Download GME Remit App QR Code"
                      width={192}
                      height={192}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exchange Calculator Section */}
        <HeroSection />

        {/* Stats Section */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#ed1c24] mb-2">200+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#ed1c24] mb-2">5M+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#ed1c24] mb-2">$15B+</div>
                <div className="text-gray-600">Money Transferred</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#ed1c24] mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-[#fafbfc] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-block bg-[#ed1c24]/10 text-[#ed1c24] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#191c1f] mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From international money transfers to prepaid cards and loans,
                experience all your financial needs with GME.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="w-14 h-14 bg-[#ed1c24]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ed1c24] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#ed1c24] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#191c1f] mb-3">Money Transfer</h3>
                <p className="text-gray-600 mb-4">
                  Send money to over 200 countries quickly and securely.
                  Lowest fees with real-time exchange rates.
                </p>
                <span className="text-[#ed1c24] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="w-14 h-14 bg-[#825cff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#825cff] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#825cff] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#191c1f] mb-3">GME Card</h3>
                <p className="text-gray-600 mb-4">
                  Pay conveniently with GME prepaid card.
                  Use anywhere for online and offline purchases.
                </p>
                <span className="text-[#825cff] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="w-14 h-14 bg-[#2AC4EA]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2AC4EA] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#2AC4EA] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#191c1f] mb-3">Online Loans</h3>
                <p className="text-gray-600 mb-4">
                  Quick loan approval with easy application.
                  Tailored loan products for foreign workers.
                </p>
                <span className="text-[#2AC4EA] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-block bg-[#ed1c24]/10 text-[#ed1c24] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Why GME?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#191c1f] mb-4">
                What Makes Us Different
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With over 20 years of experience and cutting-edge technology,
                we deliver the best money transfer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ed1c24] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#191c1f] mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">
                    Send money anywhere in the world within minutes with real-time transfers.
                    Available 24/7, regardless of banking hours.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#825cff] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#191c1f] mb-2">Low Fees</h3>
                  <p className="text-gray-600">
                    Industry-leading low fees so more money reaches your loved ones.
                    Transparent pricing with no hidden charges.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2AC4EA] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#191c1f] mb-2">Bank-Level Security</h3>
                  <p className="text-gray-600">
                    Your money is protected with state-of-the-art encryption technology.
                    Fully licensed and regulated financial institution.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f6653c] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#191c1f] mb-2">Easy to Use</h3>
                  <p className="text-gray-600">
                    Intuitive app design makes sending money simple for everyone.
                    Multi-language support for seamless experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="app" className="bg-gradient-to-br from-[#ed1c24] to-[#c41920] py-16 lg:py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Download GME Remit App Now
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                  Send money faster and easier with our mobile app.
                  Free transfer fee on your first transaction!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#fafbfc] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-block bg-[#ed1c24]/10 text-[#ed1c24] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#191c1f] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See what our satisfied customers have to say about their experience with GME Remit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &ldquo;I send money to my family every month, and GME is the fastest and cheapest option. The app is easy to use and customer service is excellent!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ed1c24]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#ed1c24] font-semibold">N</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#191c1f]">Nguyen T.</div>
                    <div className="text-sm text-gray-500">Vietnam Transfer</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &ldquo;Better exchange rates and lower fees than other services. I always use GME for my transfers. Highly recommended!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#825cff]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#825cff] font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#191c1f]">Maria S.</div>
                    <div className="text-sm text-gray-500">Philippines Transfer</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &ldquo;The transfer is so fast! I get a confirmation text as soon as the money arrives. Safe and reliable service.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2AC4EA]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#2AC4EA] font-semibold">R</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#191c1f]">Rahman K.</div>
                    <div className="text-sm text-gray-500">Bangladesh Transfer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#191c1f] py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start Sending Money Today
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Sign up in just 5 minutes and send your first transfer.
              Experience fast, secure, and affordable money transfers with GME Remit.
            </p>
            <Link
              href="#app"
              className="inline-flex items-center justify-center bg-[#ed1c24] hover:bg-[#c41920] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 cursor-pointer"
            >
              Get Started Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
