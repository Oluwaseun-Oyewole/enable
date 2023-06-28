import BlogImage from "../assets/blog.svg";
import HamzatImage from "../assets/hamzat.svg";
import Hammage from "../assets/hamzat1.svg";
import Market from "../assets/mark.png";
import W from "../assets/pexels.jpg";
import TailorImage from "../assets/tailor.svg";

interface NavigationInterface {
  title: string;
  pathname: string;
  scrollOffset?: number;
}
// interface FooterInterface {
//   title: string;
//   pathname: string;
// }

export const navigationLinks: Array<NavigationInterface> = [
  { title: "What we do", pathname: "/", scrollOffset: -50 },
  { title: "Our Impact", pathname: "/", scrollOffset: -100 },
  { title: "Sponsor", pathname: "/", scrollOffset: -70 },
  { title: "About us", pathname: "/", scrollOffset: -70 },
  { title: "How it works", pathname: "/", scrollOffset: -40 },
];

interface EmpowerWomen {
  img?: string;
  description?: string;
  amount?: string;
  guarantee?: string;
  progressWidth?: string;
}

export const empowerData: EmpowerWomen[] = [
  {
    img: HamzatImage,
    description:
      "N100,000 helps Hafzat to buy yam flour from the rural markets to resell in Lagos. ",
    amount: "N50,000",
    guarantee: "guaranteed of N100,00 goal",
    progressWidth: "50%",
  },

  {
    img: Hammage,
    description:
      "Victoria needs N150,000 for her child to resume to UI to study Medicine.",
    amount: "N120,000",
    guarantee: "guaranteed of N150,00 goal",
    progressWidth: "70%",
  },

  {
    img: TailorImage,
    description:
      "Helen is a bag maker. She needs N200,000 to buy an industrial machine for her business.",
    amount: "N90,000",
    guarantee: " guaranteed of N200,00 goal",
    progressWidth: "45%",
  },

  {
    img: HamzatImage,
    description:
      "N100,000 helps Hafzat to buy yam flour from the rural markets to resell in Lagos. ",
    amount: "N50,000",
    guarantee: "guaranteed of N100,00 goal",
    progressWidth: "50%",
  },

  {
    img: Hammage,
    description:
      "Victoria needs N150,000 for her child to resume to UI to study Medicine.",
    amount: "N120,000",
    guarantee: "guaranteed of N150,00 goal",
    progressWidth: "70%",
  },

  {
    img: TailorImage,
    description:
      "Helen is a bag maker. She needs N200,000 to buy an industrial machine for her business.",
    amount: "N90,000",
    guarantee: " guaranteed of N200,00 goal",
    progressWidth: "45%",
  },

  {
    img: HamzatImage,
    description:
      "N100,000 helps Hafzat to buy yam flour from the rural markets to resell in Lagos. ",
    amount: "N50,000",
    guarantee: "guaranteed of N100,00 goal",
    progressWidth: "50%",
  },

  {
    img: Hammage,
    description:
      "Victoria needs N150,000 for her child to resume to UI to study Medicine.",
    amount: "N120,000",
    guarantee: "guaranteed of N150,00 goal",
    progressWidth: "70%",
  },

  {
    img: TailorImage,
    description:
      "Helen is a bag maker. She needs N200,000 to buy an industrial machine for her business.",
    amount: "N90,000",
    guarantee: " guaranteed of N200,00 goal",
    progressWidth: "45%",
  },
];

type BuildingType = {
  title?: string;
  paragraph?: string;
  paragraph2?: string;
  buttonText?: string;
  buttonText2?: string;
  subtitle?: string;
  image?: string;
  color?: string;
};

export const building: BuildingType = {
  title: "Empowering Women,",
  subtitle: "Building Stronger Households",
  buttonText: "About Us",
  buttonText2: "Sponsor a woman",
  paragraph:
    "Enable is empowering women for themselves and their children. Our work is built on experience from over a decade of direct intervention by our flagship organization, The Destiny Trust, to rescue children within vulnerable groups. Over 90% of disadvantaged children we work with are under the care of low-income single mothers, widows and displaced women.",
  paragraph2:
    "Women are vital to building stronger households that can support the development of children. For the same reason, they are the pivot for a sustainable education and care plan for children. This is why empowering women for themselves and the support of children is central to our agenda for children and goal of rebuilding stronger households and communities.",
  image: Market,
};

type BlogType = {
  title?: string;
  paragraph?: string;
  image?: string;
  activeBtn?: boolean;
};

export const blogData: BlogType[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat ut leo.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: BlogImage,
    activeBtn: true,
  },

  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat ut leo.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: BlogImage,
    activeBtn: false,
  },

  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat ut leo.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: BlogImage,
    activeBtn: false,
  },
];
