import Ayro from "../assets/Ayro UI.svg";
import HamzatImage from "../assets/hamzat.svg";
import Hammage from "../assets/hamzat1.svg";
import TailorImage from "../assets/tailor.svg";

interface NavigationInterface {
  title: string;
  pathname: string;
  scrollOffset?: number;
}

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

export const progress = [];
