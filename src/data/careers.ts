export const benefitKeys = ["education", "incentive", "team_building", "health", "vacation"] as const;

export const benefitImages = [
  "/images/company/careers/perks/education-training.jpg",
  "/images/company/careers/perks/performance-incentives.jpg",
  "/images/company/careers/perks/team-building.jpg",
  "/images/company/careers/perks/health-checkup.png",
  "/images/company/careers/perks/annual.jpg",
];

export interface Testimonial {
  name: string;
  position: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jason Kim",
    position: "Strategic Planning Team",
    quote: "Unlike ordinary Korean Companies, GME is very flexible and fast in terms of decision making. That drive GME staffs to think more creative, energetic and enthusiastic in their tasks. Probably that is the main fuel of GME's great success in South Korean Remittance Market. Now, to step-up as a global company, we will follow the next 3 laws. 1) Equal Opportunity 2) Fair Process 3) Righteous Result.",
    image: "/images/company/careers/staff/jason.jpg",
  },
  {
    name: "Yukiko Ramadhanti Hadi",
    position: "Marketing Officer of Indonesia",
    quote: "Global Money Express has an environment that employees can access equal rewards, treatment, and opportunities to speak out opinions regardless of gender. 70% of women have leadership roles, especially in the marketing department. GME implements a transparent performance measurement that reflected on the results of the monthly and annual targets.",
    image: "/images/company/careers/staff/Yukiko.png",
  },
  {
    name: "Sundariya Munkhbileg",
    position: "Marketing Officer of Mongolia",
    quote: "Balancing career with motherhood is not very easy in Korea. However, if you find the right employer who gets it, it should not be very difficult. I am very happy to be part of GME. Its friendly coworkers and employers offering flexible working schedule made it possible for me to grow not only as a career woman, but as a mother too.",
    image: "/images/company/careers/staff/Sundarya.png",
  },
];

export const whyGmeKeys = ["diversity", "agile", "fairness"] as const;

export const whyGmeIcons = [
  "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.924 17.924 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z",
];
