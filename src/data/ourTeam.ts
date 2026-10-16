// 회사소개 Our Team 화면 데이터. 문구는 messages/company 의 company-our-team.* 키로 간다.

export interface TeamMember {
  id: string;
  src: string;
}

export const teamMembers: TeamMember[] = [
  {
    "id": "jong-hwa-sung",
    "src": "/images/company/team/jong-hwa-sung.png"
  },
  {
    "id": "won-hae-choi",
    "src": "/images/company/team/won-hae-choi.png"
  },
  {
    "id": "eric-sung",
    "src": "/images/company/team/eric-sung.png"
  },
  {
    "id": "subash-chandra-poudel",
    "src": "/images/company/team/subash-chandra-poudel.png"
  }
];
