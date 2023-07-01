import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import MOtherBacking from "../assets/backing.svg";
import BlogImage from "../assets/blog.svg";
import getloan from "../assets/getloan.svg";
import giveloan from "../assets/giveloan.svg";
import guloan from "../assets/gurantee.svg";
import HamzatImage from "../assets/hamzat.svg";
import Hammage from "../assets/hamzat1.svg";
import Market from "../assets/mark.png";
import W from "../assets/pexels.jpg";
import SmileImage from "../assets/smile.svg";
import TailorImage from "../assets/tailor.svg";

interface NavigationInterface {
  title: string;
  pathname: string;
  scrollOffset?: number;
}

export const navigationLinks: Array<NavigationInterface> = [
  { title: "What we do", pathname: "what-we-do", scrollOffset: -50 },
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
    pathname: "/",
  },
];

export const partnerLogos = [
  "/src/assets/Ayro.svg",
  "/src/assets/GrayGrids.svg",
  "/src/assets/lineicons.svg",
  "/src/assets/Uideck.svg",
];

interface WhatWeDoBannerData {
  img?: string;
  description?: string;
  name?: string;
  occupation?: string;
}

export const WhatWeDoBannerData: WhatWeDoBannerData[] = [
  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },

  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },

  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },

  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },
];

type FrequntlyAskedQuestion = {
  heading: string;
  description: string;
};

export const FAQuestions: FrequntlyAskedQuestion[] = [
  {
    heading: "Do I quality for a Enable loan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laboriosam facere quod rerum. Eveniet, minus esse repellendus facere  ducimus animi excepturi odit. Numquam dicta dolores ut eaque doloribus eaeveniet",
  },

  {
    heading: "Do I quality for a Enable loan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laboriosam facere quod rerum. Eveniet, minus esse repellendus facere  ducimus animi excepturi odit. Numquam dicta dolores ut eaque doloribus eaeveniet",
  },

  {
    heading: "Do I quality for a Enable loan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laboriosam facere quod rerum. Eveniet, minus esse repellendus facere  ducimus animi excepturi odit. Numquam dicta dolores ut eaque doloribus eaeveniet",
  },
];

type EnableGlobaleData = {
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  columnReversed?: boolean;
};

export const EnableGlobalData: EnableGlobaleData[] = [
  {
    description:
      "Enable is a global non-profit organization that enhances the availability of funding for entrepreneurs in Nigeria. With over N1 billion raised on the platform, Enable has supported more than 2.5 million individuals. To obtain a loan from Enable, there is no need for a credit score, collateral, or business income. Are you ready to seize the opportunity and be the next success story?",
    imageSrc: MOtherBacking,
    buttonText: "Get A Loan",
    columnReversed: false,
  },
];
