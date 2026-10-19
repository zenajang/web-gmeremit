import type {
  AboutJourneyYear,
  AboutMediaLink,
  AboutPartnerLogo,
} from "@/components/company/about-us/types";

export const ABOUT_US_NAMESPACE = "company-about-us";

export const aboutGlanceRows = ["established","registration","ceo","employees","head_office","branches"] as const;

export const aboutServiceKeys = ["remittance","card","b2b","mvno","finance","exchange"] as const;

export const aboutTechKeys = ["recognition","efb","mvno","api"] as const;

export const aboutJourney: AboutJourneyYear[] = [
  {
    "year": "2026",
    "events": [
      {
        "id": "2026_09",
        "month": "09",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2025",
    "events": [
      {
        "id": "2025_12",
        "month": "12",
        "images": [],
        "highlight": false
      },
      {
        "id": "2025_06",
        "month": "06",
        "images": [],
        "highlight": false
      },
      {
        "id": "2025_04",
        "month": "04",
        "images": [
          "/images/company/about/2025-04.png"
        ],
        "highlight": true
      },
      {
        "id": "2025_03",
        "month": "03",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2024",
    "events": [
      {
        "id": "2024_12",
        "month": "12",
        "images": [],
        "highlight": false
      },
      {
        "id": "2024_06",
        "month": "06",
        "images": [],
        "highlight": false
      },
      {
        "id": "2024_03",
        "month": "03",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2023",
    "events": [
      {
        "id": "2023_12",
        "month": "12",
        "images": [],
        "highlight": false
      },
      {
        "id": "2023_10",
        "month": "10",
        "images": [],
        "highlight": false
      },
      {
        "id": "2023_10_2",
        "month": "10",
        "images": [
          "/images/company/about/2023-10.png"
        ],
        "highlight": true
      },
      {
        "id": "2023_02",
        "month": "02",
        "images": [],
        "highlight": false
      },
      {
        "id": "2023_02_2",
        "month": "02",
        "images": [
          "/images/company/about/2023-02.jpg"
        ],
        "highlight": true
      },
      {
        "id": "2023_01",
        "month": "01",
        "images": [
          "/images/company/about/2023-01.png"
        ],
        "highlight": true
      }
    ]
  },
  {
    "year": "2022",
    "events": [
      {
        "id": "2022_12",
        "month": "12",
        "images": [],
        "highlight": false
      },
      {
        "id": "2022_06",
        "month": "06",
        "images": [],
        "highlight": false
      },
      {
        "id": "2022_03",
        "month": "03",
        "images": [
          "/images/company/about/2022-03.png"
        ],
        "highlight": true
      }
    ]
  },
  {
    "year": "2021",
    "events": [
      {
        "id": "2021_12",
        "month": "12",
        "images": [
          "/images/company/about/2021-12.png"
        ],
        "highlight": true
      },
      {
        "id": "2021_10",
        "month": "10",
        "images": [
          "/images/company/about/2021-10.png"
        ],
        "highlight": true
      },
      {
        "id": "2021_07",
        "month": "07",
        "images": [],
        "highlight": false
      },
      {
        "id": "2021_04",
        "month": "04",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2020",
    "events": [
      {
        "id": "2020_12",
        "month": "12",
        "images": [],
        "highlight": false
      },
      {
        "id": "2020_09",
        "month": "09",
        "images": [],
        "highlight": false
      },
      {
        "id": "2020_08",
        "month": "08",
        "images": [
          "/images/company/about/2020-08.png"
        ],
        "highlight": true
      },
      {
        "id": "2020_05",
        "month": "05",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2019",
    "events": [
      {
        "id": "2019_09",
        "month": "09",
        "images": [],
        "highlight": false
      },
      {
        "id": "2019_06",
        "month": "06",
        "images": [],
        "highlight": false
      },
      {
        "id": "2019_03",
        "month": "03",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2018",
    "events": [
      {
        "id": "2018_12",
        "month": "12",
        "images": [],
        "highlight": false
      },
      {
        "id": "2018_09",
        "month": "09",
        "images": [
          "/images/company/about/2018-09.png"
        ],
        "highlight": true
      },
      {
        "id": "2018_na",
        "month": "–",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2017",
    "events": [
      {
        "id": "2017_12",
        "month": "12",
        "images": [],
        "highlight": false
      },
      {
        "id": "2017_08",
        "month": "08",
        "images": [
          "/images/company/about/2017-08_ko.png",
          "/images/company/about/2017-08_eng.png"
        ],
        "highlight": true
      },
      {
        "id": "2017_06",
        "month": "06",
        "images": [],
        "highlight": false
      }
    ]
  },
  {
    "year": "2016",
    "events": [
      {
        "id": "2016_08",
        "month": "08",
        "images": [],
        "highlight": false
      }
    ]
  }
];

export const aboutPartnerLogos: AboutPartnerLogo[] = [
  {
    "alt": "Nepal / Global IME Bank logo",
    "src": "/images/company/about/partner01.gif"
  },
  {
    "alt": "Cambodia / Wing logo",
    "src": "/images/company/about/partner02.png"
  },
  {
    "alt": "Sri Lanka / Commercial Bank of Ceylon logo",
    "src": "/images/company/about/partner03.png"
  },
  {
    "alt": "CIS / KoronaPay logo",
    "src": "/images/company/about/partner04.png"
  },
  {
    "alt": "Indonesia / BNI logo",
    "src": "/images/company/about/partner05.png"
  },
  {
    "alt": "Bangladesh / BRAC Bank logo",
    "src": "/images/company/about/partner06.png"
  },
  {
    "alt": "Vietnam / Zalo logo",
    "src": "/images/company/about/partner07.png"
  },
  {
    "alt": "Western Union logo",
    "src": "/images/company/about/partner08.png"
  },
  {
    "alt": "MoneyGram logo",
    "src": "/images/company/about/partner09.png"
  },
  {
    "alt": "RIA logo",
    "src": "/images/company/about/partner10.png"
  },
  {
    "alt": "Alipay logo",
    "src": "/images/company/about/partner11.jpg"
  },
  {
    "alt": "PingPong logo",
    "src": "/images/company/about/partner12.png"
  }
];

export const aboutMediaLinks: AboutMediaLink[] = [
  {
    "id": "1",
    "href": "https://jmagazine.joins.com/forbes/view/338468"
  },
  {
    "id": "2",
    "href": "https://biz.chosun.com/stock/finance/2024/02/09/4OJ52JPFENDIJHFY4I3KEWSYFE/"
  },
  {
    "id": "3",
    "href": "https://biz.chosun.com/stock/finance/2023/12/13/G5IUUESG35CZJB3VPGFLF33RIE/"
  },
  {
    "id": "4",
    "href": "https://www.hankyung.com/article/202312133895i"
  },
  {
    "id": "5",
    "href": "https://biz.chosun.com/it-science/ict/2024/01/17/5M6NSCT3SZD43EJNINMQ7EZRSM/"
  },
  {
    "id": "6",
    "href": "https://www.koreatimes.co.kr/www/biz/2024/02/602_368627.html"
  },
  {
    "id": "7",
    "href": "https://news.nate.com/view/20220602n24892"
  },
  {
    "id": "8",
    "href": "https://www.mk.co.kr/news/business/10338542"
  },
  {
    "id": "9",
    "href": "https://biz.chosun.com/stock/finance/2022/06/11/DJCCA35OFFFVBC4DC34QVNBOA4/"
  },
  {
    "id": "10",
    "href": "https://www.newskorea.ne.kr/news/articleView.html?idxno=21201"
  },
  {
    "id": "11",
    "href": "https://www.kfm.co.kr/news/2026090168212"
  },
  {
    "id": "12",
    "href": "https://www.newswire.co.kr/newsRead.php?no=1038928"
  },
  {
    "id": "13",
    "href": "https://www.newswire.co.kr/newsRead.php?no=1038018"
  },
  {
    "id": "14",
    "href": "https://www.newswire.co.kr/newsRead.php?no=1041420"
  },
  {
    "id": "15",
    "href": "https://www.newswire.co.kr/newsRead.php?no=1043600&picno=607188"
  }
];
