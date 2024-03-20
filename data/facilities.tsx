export type Facility = {
  id: string;
  dorm_id: string;
  title: string;
  image: string[];
  link: string;
  book: boolean;
  text: string;
};

export type Facilities = Facility[];

export const FacilitiesData: Facilities = [
  {
    id: "0",
    dorm_id: "dorm1",
    title: "Laundry",
    link: "https://vasketid.dk/",
    book: false,
    image: [
      "https://i.pinimg.com/564x/00/0a/09/000a092c10a030f2dd9d91db68f12c08.jpg",
      "https://i.pinimg.com/564x/8c/69/f6/8c69f61296d7fcf81a8125c3fec31374.jpg",
    ],
    text: "Laundry facilities available for residents.",
  },
  {
    id: "1",
    dorm_id: "dorm1",
    title: "Lounge",
    link: "",
    book: true,
    image: [
      "https://i.pinimg.com/564x/33/a1/b3/33a1b3f6c69f2b88dc97120d7cadbe63.jpg",
    ],
    text: "Relaxing lounge area for socializing and leisure.",
  },
  {
    id: "2",
    dorm_id: "dorm1",
    title: "Gym",
    link: "",
    book: false,
    image: [
      "https://i.pinimg.com/564x/ad/f7/23/adf723efff7cc03bbb4b6e6b6b232c95.jpg",
    ],
    text: "Fully equipped gym for workouts and exercise.",
  },
  {
    id: "3",
    dorm_id: "dorm1",
    title: "Party Area",
    link: "",
    book: true,
    image: [
      "https://i.pinimg.com/564x/80/6f/a5/806fa5dd1fbd35333ccdb0d953e83a2c.jpg",
    ],
    text: "Designated space for social gatherings and events.",
  },
  {
    id: "4",
    dorm_id: "dorm1",
    link: "",
    book: true,
    title: "Common Kitchen",
    image: [
      "https://i.pinimg.com/564x/13/98/58/1398586b1dae66d7d84fc8e4629eb0b3.jpg",
    ],
    text: "Shared kitchen space for cooking and dining.",
  },
  {
    id: "5",
    dorm_id: "dorm1",
    link: "",
    book: true,
    title: "Study Room",
    image: [
      "https://i.pinimg.com/564x/11/8d/51/118d5158c3442c32ed9d33367d84d21e.jpg",
    ],
    text: "Quiet study area for academic purposes.",
  },
  {
    id: "6",
    dorm_id: "dorm1",
    link: "",
    book: true,
    title: "Music Room",
    image: [
      "https://i.pinimg.com/564x/a0/eb/ca/a0ebcaecdfe5fe3b45d41a3b838b731e.jpg",
    ],
    text: "Room equipped for musical practice and enjoyment.",
  },
  {
    id: "7",
    dorm_id: "dorm1",
    link: "",
    book: false,
    title: "Inspector's Office",
    image: [
      "https://i.pinimg.com/564x/15/12/2c/15122c72f6d5d7d932fe0f624765d959.jpg",
    ],
    text: "Office for addressing dormitory concerns and queries.",
  },
  {
    id: "8",
    dorm_id: "dorm1",
    link: "",
    book: false,
    title: "Sports Area",
    image: [
      "https://i.pinimg.com/564x/1b/2c/d6/1b2cd6a9177de83d9463688cc465f955.jpg",
    ],
    text: "Dedicated space for outdoor sports and activities.",
  },
];
