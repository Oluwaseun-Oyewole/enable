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
// export const footerLinks: Array<FooterInterface> = [
//   { title: "What we do", pathname: "/" },

//   { title: "Our Impact", pathname: "/" },
//   { title: "Sponsor", pathname: "/" },
//   { title: "About us", pathname: "/" },
//   { title: "How it works", pathname: "/" },
// ];
