export interface HistoryEvent {
  month: string;
  textKey: string;
  images?: string[];
}

export interface HistoryYear {
  year: string;
  events: HistoryEvent[];
}

export const historyData: HistoryYear[] = [
  {
    year: "2025",
    events: [
      { month: "03", textKey: "2025_03" },
      { month: "06", textKey: "2025_06" },
      { month: "12", textKey: "2025_12" },
    ],
  },
  {
    year: "2024",
    events: [
      { month: "03", textKey: "2024_03" },
      { month: "06", textKey: "2024_06" },
      { month: "12", textKey: "2024_12" },
    ],
  },
  {
    year: "2023",
    events: [
      { month: "02", textKey: "2023_02" },
      { month: "05", textKey: "2023_05" },
      { month: "09", textKey: "2023_09" },
      { month: "10", textKey: "2023_10" },
      { month: "?", textKey: "2023_nice" },
      { month: "?", textKey: "2023_kibo" },
    ],
  },
  {
    year: "2022",
    events: [
      { month: "03", textKey: "2022_03", images: ["/images/company/history/2022-03.jpg"] },
      { month: "06", textKey: "2022_06" },
      { month: "11", textKey: "2022_11" },
    ],
  },
  {
    year: "2021",
    events: [
      { month: "04", textKey: "2021_04" },
      { month: "07", textKey: "2021_07" },
      { month: "10", textKey: "2021_10", images: ["/images/company/history/2021-10.jpg"] },
      { month: "12", textKey: "2021_12", images: ["/images/company/history/2021-12.png"] },
    ],
  },
  {
    year: "2020",
    events: [
      { month: "02", textKey: "2020_02" },
      { month: "05", textKey: "2020_05" },
      { month: "08", textKey: "2020_08", images: ["/images/company/history/2020-08.jpg"] },
    ],
  },
  {
    year: "2019",
    events: [
      { month: "03", textKey: "2019_03" },
      { month: "06", textKey: "2019_06" },
      { month: "09", textKey: "2019_09" },
    ],
  },
  {
    year: "2018",
    events: [
      { month: "04", textKey: "2018_04" },
      { month: "09", textKey: "2018_09", images: ["/images/company/history/2018-09.png"] },
      { month: "?", textKey: "2018_loan" },
    ],
  },
  {
    year: "2017",
    events: [
      { month: "03", textKey: "2017_03" },
      { month: "06", textKey: "2017_06" },
      { month: "08", textKey: "2017_08", images: ["/images/company/history/2017-08_eng.jpg", "/images/company/history/2017-08_ko.jpg"] },
    ],
  },
  {
    year: "2016",
    events: [
      { month: "08", textKey: "2016_08" },
    ],
  },
];
