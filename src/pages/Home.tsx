import { Blog } from "../components/UI/Blog";
import { Building } from "../components/UI/Building";
import { EmpowerWomen } from "../components/UI/Empower";
import { GridCard } from "../components/UI/GridCard/GridCard";
import { Hero } from "../components/UI/Hero";
import { SchoolMoni } from "../components/UI/SchoolMoni/SchoolMoni";
export const Home = () => {
  return (
    <>
      <Hero />
      <GridCard />
      <EmpowerWomen />
      <SchoolMoni />
      <Building />
      <Blog />
    </>
  );
};
