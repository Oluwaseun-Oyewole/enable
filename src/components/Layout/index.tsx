import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../Footer";
import { Navigation } from "../Nav";

const LayoutContainer = styled.div`
  ${tw``}
`;

const Container = styled.main`
  ${tw`px-10 lg:px-0 max-w-7xl mx-auto`}
`;
export const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <LayoutContainer>
      <nav>
        <Navigation />
      </nav>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Container>
        <Outlet />
      </Container>
      <footer>
        <Footer />
      </footer>
    </LayoutContainer>
  );
};
