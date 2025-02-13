export interface TimelineEvent {
  date: string;
  img: string;
  desc: string;
  sideHeading?: string;
}

export const TIMELINE_DATA: TimelineEvent[] = [
  {
      date: "Moments",
      img: "timeline-images/1.jpg",
      desc: "Although we don't have a lot of pictures to cherish our memories. I'll hold on to every single one of my memories with you. Keep scrolling :)",
      sideHeading: "My Love",
  },
  {
      date: "2024-12-22",
      img: "timeline-images/2.jpg",
      desc: "So blurry but so cute.",
      sideHeading: "Pretty",
  },
  {
      date: "2024-12-19",
      img: "timeline-images/3.jpg",
      desc: "Looks so edible.",
      sideHeading: "Goofy",
  },
  {
      date: "2024-12-08",
      img: "timeline-images/4.jpg",
      desc: "Being with you makes me happy.",
      sideHeading: "Love",
  },
  {
      date: "2024-08-17",
      img: "timeline-images/5.jpg",
      desc: "Those filters used to be so funny, maybe we should start snapchatting again.",
      sideHeading: "Cute",
  },
  {
    date: "2024-10-15",
    img: "timeline-images/6.jpg",
    desc: "Looks so tiny but eats so much.",
    sideHeading: "Fatty :)",
  },
  {
    date: "2024-10-05",
    img: "timeline-images/7.jpg",
    desc: "Probably loves bagels more than me.",
    sideHeading: "Cuddles",
  },
  {
      date: "2024-08-12",
      img: "timeline-images/8.jpg",
      desc: "I'm out of pictures. I think we really should start taking more pictures so we can relive those moments. Anyways, love you. Hope you had fun!",
      sideHeading: "Picture Perfect",
  }
];
