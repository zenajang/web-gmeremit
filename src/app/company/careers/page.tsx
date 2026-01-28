"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const perksData = [
  {
    title: "Education & Training",
    description: "Do you want to learn more and develop your professional skills? If yes, GME is the right place for you! We have special courses organized on a regular basis such as educational lectures by special guests, language courses by native teachers, work-related training sessions and etc. Do you want to enroll online individual courses for your professional development, but you are worried about the cost? No worries, just get approval before enrolling, and all financial burden is on us.",
    image: "/images/company/careers/perks/education-training.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Performance Incentives and Rewards",
    description: "We would like to show our appreciation for your outstanding work performance with different incentives and rewards. We offer full package of opportunities to participate in various incentive and reward-based tasks and contests such as monthly & yearly target achievements, individual & teamwork improvements, new product idea contests etc.",
    image: "/images/company/careers/perks/performance-incentives.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Team Building Activities & Wellness programs",
    description: "Monthly meetings are celebration for us with dinner parties, enjoying healing concerts and movies. You are welcome to join in various types of sport activities such as futsal or soccer and events & clubs such as bicycle club, picnic and team leader workshops.",
    image: "/images/company/careers/perks/team-building.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Health Check-up Benefit",
    description: "All full-time employees receive a 300,000 KRW health check-up benefit as part of our internal welfare program.",
    image: "/images/company/careers/perks/health-checkup.png",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Annual & Bonus leaves",
    description: "Apart from fixed annual leaves, you can get extra bonus leaves, anniversary leaves (wedding/funeral) as well as parental leaves.",
    image: "/images/company/careers/perks/annual-bonus.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const staffTestimonials = [
  {
    name: "Jason Kim",
    position: "Compliance Team Leader",
    quote: "Unlike ordinary Korean Companies, GME is very flexible and fast in terms of decision making. That drive GME staffs to think more creative, energetic and enthusiastic in their tasks. Probably that is the main fuel of GME's great success in South Korean Remittance Market. Now, to step-up as a global company, we will follow the next 3 laws. 1) Equal Opportunity 2) Fair Process 3) Righteous Result.",
    image: "/images/staff/jason.jpg",
  },
  {
    name: "Yukiko Ramadhanti Hadi",
    position: "Marketing Officer of Indonesia",
    quote: "Global Money Express has an environment that employees can access equal rewards, treatment, and opportunities to speak out opinions regardless of gender. 70% of women have leadership roles, especially in the marketing department. GME implements a transparent performance measurement that reflected on the results of the monthly and annual targets.",
    image: "/images/staff/yukiko.jpg",
  },
  {
    name: "Sundariya Munkhbileg",
    position: "Marketing Officer of Mongolia",
    quote: "Balancing career with motherhood is not very easy in Korea. However, if you find the right employer who gets it, it should not be very difficult. I am very happy to be part of GME. Its friendly coworkers and employers offering flexible working schedule made it possible for me to grow not only as a career woman, but as a mother too.",
    image: "/images/staff/sundariya.jpg",
  },
  {
    name: "Suhito Domingo",
    position: "Graphic Artist",
    quote: "Throughout this pandemic, there have been significant changes, and for workers like me, going to the office has been an immense challenge. However, thanks to GME, the impossible became possible, allowing me to be present in the office even while working from my bedroom. I am deeply grateful to GME for their unwavering support, providing me with high-end computers and fast connections, which have truly transformed my work environment into a highly efficient and productive space.",
    image: "/images/staff/suhito.jpg",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 bg-[#fafbfc] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#191c1f] to-[#2d3138] text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">Perks and Benefits</h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Would you like to become a member of the diverse family? If yes, you are welcome to join us. Find out why GME is the best place for personal and professional development.
            </p>
          </div>
        </section>

        {/* Perks & Benefits Section */}
        <section id="perks" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We believe in taking care of our team members with comprehensive benefits and a supportive work environment.
              </p>
            </div>

            {/* Dynamic Alternating Layout */}
            <div className="space-y-24">
              {perksData.map((perk, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#ed1c24]/20 to-transparent -rotate-3' : 'from-[#ed1c24]/20 to-transparent rotate-3'} rounded-3xl transform scale-105 group-hover:scale-110 transition-transform duration-500`}></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src={perk.image}
                        alt={perk.title}
                        width={600}
                        height={400}
                        className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                      {/* Floating Badge */}
                      <div className={`absolute ${index % 2 === 0 ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} w-20 h-20 bg-[#ed1c24] rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        <div className="text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                          {perk.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-5xl lg:text-7xl font-bold text-[#ed1c24]/10">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 -mt-8 lg:-mt-12 pl-2">{perk.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{perk.description}</p>

                    {/* Decorative Line */}
                    <div className="flex items-center gap-2 pt-4">
                      <div className="w-12 h-1 bg-[#ed1c24] rounded-full"></div>
                      <div className="w-3 h-1 bg-[#ed1c24]/50 rounded-full"></div>
                      <div className="w-2 h-1 bg-[#ed1c24]/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Staff Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#ed1c24]/10 text-[#ed1c24] rounded-full text-sm font-semibold mb-4">
                VOICES OF GME
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Staff</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hear from our diverse team members about their experiences working at GME Remit.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="space-y-8">
              {staffTestimonials.map((staff, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:ml-0 lg:mr-24' : 'lg:ml-24 lg:mr-0'}`}
                >
                  <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex`}>
                    {/* Quote Side */}
                    <div className="flex-1 p-8 lg:p-12 relative">
                      {/* Large Quote Mark Background */}
                      <div className="absolute top-4 left-4 text-[180px] font-serif text-[#ed1c24]/5 leading-none select-none">
                        &ldquo;
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-1 h-8 bg-[#ed1c24] rounded-full"></div>
                          <span className="text-sm font-semibold text-[#ed1c24] uppercase tracking-wider">Testimonial</span>
                        </div>

                        <blockquote className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8">
                          {staff.quote}
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#ed1c24] to-[#c41920] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            {staff.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-lg">{staff.name}</p>
                            <p className="text-[#ed1c24] font-medium">{staff.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Side */}
                    <div className={`hidden lg:block w-2 ${index % 2 === 0 ? 'bg-gradient-to-b' : 'bg-gradient-to-t'} from-[#ed1c24] to-[#ff6b6b]`}></div>

                    {/* Visual Element */}
                    <div className="lg:w-80 h-48 lg:h-auto bg-gradient-to-br from-[#191c1f] to-[#2d3138] relative overflow-hidden">
                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                      </div>

                      {/* Number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[120px] lg:text-[150px] font-bold text-white/10">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Floating Icon */}
                      <div className="absolute bottom-6 right-6 w-16 h-16 bg-[#ed1c24] rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Background Shape */}
                  <div className={`absolute -z-10 w-full h-full top-4 ${index % 2 === 0 ? 'left-4' : '-left-4'} bg-[#ed1c24]/5 rounded-3xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#ed1c24] to-[#c41920] rounded-3xl p-8 lg:p-16 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Talent Community</h2>
              <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Ready to make a difference? Explore our open positions and become part of a team that&apos;s transforming the future of financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://gme.career.greetinghr.com/ko/recruit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#ed1c24] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why GME Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why GME Remit?</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join a company that values diversity, innovation, and personal growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  Be part of a company connecting people across borders and making a real difference in lives worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
                <p className="text-gray-600">
                  Work with cutting-edge technology and contribute to innovative solutions in the fintech industry.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse Culture</h3>
                <p className="text-gray-600">
                  Join a multicultural team where every voice is heard and diversity is celebrated.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
