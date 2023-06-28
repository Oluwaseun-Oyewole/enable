import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../shared";
import { gridData } from "../../constants";
interface Gprops {
  img?: string;
  heading?: string;
  paragraph?: string;
}
export const GridCard = () => {
  return (
    <Container>
      <>
        {gridData?.map((d, index) => {
          <div key={index} className="bg-purple">
            <img src={d.img} alt="" />
            <h3>{d.heading}</h3>
            <p>{d.paragraph}</p>
            <p>Grid card working</p>
          </div>;
        })}
      </>
    </Container>
  );
};
// const ContainerGrid = styled.div`
//   ${tw`grid grid-cols-1 md:gap-5 md:grid-cols-2 xl:grid-cols-3  place-items-center text-white py-12`}
// `;
// const TextWidth = styled.div`
//   ${tw``}
// `;
// const DivImg = styled.img`
//   ${tw``}
// `;
