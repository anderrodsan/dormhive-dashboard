export type Info = {
  id: string;
  dorm_id: string;
  title: string;
  image: string[];
  link: string;
  text: string;
};

export type Infos = Info[];

export const infoData: Infos = [
  {
    id: "0",
    dorm_id: "dorm1",
    title: "How do I report a maintenance issue in my room?",
    image: [],
    link: "",
    text: "To report any maintenance issues in your room, please contact the dormitory front desk or submit a maintenance request through the online portal.",
  },
  {
    id: "1",
    dorm_id: "dorm1",
    title: "Can I have guests over to stay in my room?",
    image: [],
    link: "",
    text: "Guest policies vary by dormitory. Refer to the dormitory guidelines or contact the administration for information regarding guest stays and regulations.",
  },
  {
    id: "2",
    dorm_id: "dorm1",
    title: "What are the laundry facilities and their operating hours?",
    image: [],
    link: "",
    text: "Laundry facilities are located on the ground floor and operate from 8 AM to 10 PM daily. Remember to bring your own detergent and follow posted guidelines.",
  },
  {
    id: "3",
    dorm_id: "dorm1",
    title: "How can I apply for a dormitory parking permit?",
    image: [],
    link: "",
    text: "Parking permits can be obtained through the dormitory administration office. Submit an application form along with vehicle registration details for approval.",
  },
  {
    id: "4",
    dorm_id: "dorm1",
    title: "What amenities are available in the common areas?",
    image: [],
    link: "",
    text: "Common areas include a lounge, study rooms, and a gym. These spaces are equipped with furniture, study materials, and exercise equipment for residents’ use.",
  },
];
