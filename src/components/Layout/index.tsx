import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../Footer";
import { Navigation } from "../Nav";
import { useClickContextProvider } from "../hooks/use-click";

const LayoutContainer = styled.div`
  ${tw``}
`;

const Container = styled.main<{ click?: boolean }>`
  ${tw`px-10 lg:px-0 max-w-7xl mx-auto font-poppins`};
  ${({ click }) =>
    click
      ? tw`bg-gray-500 transition-all ease-in-out duration-700 blur-[1px] lg:bg-transparent`
      : tw`bg-white`}
`;
export const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { click } = useClickContextProvider();

  return (
    <LayoutContainer>
      <Navigation />
      <motion.div className="progress-bar mt-0" style={{ scaleX }} />
      <Container click={click}>
        <Outlet />
      </Container>
      <footer>
        <Footer />
      </footer>
    </LayoutContainer>
  );
};
