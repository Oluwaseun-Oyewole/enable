import { Blog } from "../components/UI/Blog";
import { Building } from "../components/UI/Building";
import { EmpowerWomen } from "../components/UI/Empower";
import { Hero } from "../components/UI/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <EmpowerWomen />
      <Building />
      <Blog />
    </>
  );
};
