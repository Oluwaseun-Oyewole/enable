import HamzatImage from "../assets/hamzat.svg";
import Hammage from "../assets/hamzat1.svg";
import TailorImage from "../assets/tailor.svg";
import getloan from "../assets/getloan.svg";
import guloan from "../assets/gurantee.svg";
import giveloan from "../assets/giveloan.svg";
import Ayro from "../assets/Ayro UI.svg";
import lineicons from "../assets/lineicons.svg";
import Gray from "../assets/GrayGrids.svg";
import uideck from "../assets/Uideck.svg";

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
interface GridCards {
  img?: string;
  heading?: string;
  paragraph?: string;
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

export const gridData: GridCards[] = [
  {
    img: getloan,
    heading: "Get Loan",
    paragraph:
      "Borrow to start or grow your business No collateral. No interest if you pay back when due",
  },
  {
    img: guloan,
    heading: "Guarantee a loan",
    paragraph:
      "If you guarantee a woman's loan repayment, you improve their chances of getting access to credit. You can assure repayment of as little as N20,000.",
  },
  {
    img: giveloan,
    heading: "Give loan",
    paragraph:
      "Lend to enterprising low-income women to do business and earn income to support themselves and children.",
  },
];

export const progress = [{}];

export const logos = [Ayro, lineicons, Gray, uideck];
