import BlogImage from "../assets/blog.svg";
import HamzatImage from "../assets/hamzat.svg";
import Hammage from "../assets/hamzat1.svg";
import Market from "../assets/mark.png";
import W from "../assets/pexels.jpg";
import TailorImage from "../assets/tailor.svg";
import getloan from "../assets/getloan.svg";
import guloan from "../assets/gurantee.svg";
import giveloan from "../assets/giveloan.svg";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { CgQuote } from "react-icons/cg";
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

type GridType = {
  img?: string;
  title?: string;
  paragraph?: string;
};

export const gridData: GridType[] = [
  {
    img: getloan,
    title: "Get Loan",
    paragraph:
      "Borrow to start or grow your business.No collateral. No interest if you pay back when due.",
  },
  {
    img: guloan,
    title: "Guarantee a loan",
    paragraph:
      "If you guarantee a woman's loan repayment, you improve their chances of getting access to credit. You can assure repayment of as little as N20,000.",
  },
  {
    img: giveloan,
    title: "Give Loan",
    paragraph:
      "Lend to enterprising low-income women to do business and earn income to support themselves and children.",
  },
];

export const socials = [
  {
    icon: BsFacebook,
    size: 30,
  },
  {
    icon: BsTwitter,
    size: 30,
  },
  {
    icon: BsYoutube,
    size: 30,
  },
  {
    icon: BsInstagram,
    size: 30,
  },
];

export const companyLink = [
  {
    title: "About Us",
    pathname: "/",
  },
  {
    title: "Our Impact",
    pathname: "/",
  },
  {
    title: "FAQs",
    pathname: "/",
  },
  {
    title: "Contact & Support",
    pathname: "/",
  },
];
export const servicedLink = [
  {
    title: "Apply for loan",
    pathname: "/",
  },
  {
    title: "Sponsor",
    pathname: "/",
  },
  {
    title: "Projects",
    pathname: "/",
  },
  {
    title: "SchoolMoni",
    pathname: "/schoolmoni",
  },
];

export const partnerLogos = [
  "/src/assets/Ayro.svg",
  "/src/assets/GrayGrids.svg",
  "/src/assets/lineicons.svg",
  "/src/assets/Uideck.svg",
];

export const malcom = [
  {
    icon: CgQuote,
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    name: "Malcom X",
  },
];
