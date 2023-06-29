import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { partnerLogos } from "../../../constants";
import { Container } from "../../shared";

const GridCards = styled.img`
  ${tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10`}
`;
export const Partners = () => {
  return (
    <div>
      <Container>
        {partnerLogos?.map((img, index) => {
          return (
            <div key={index}>
              <GridCards>
                <img src={img} alt="" />
              </GridCards>
            </div>
          );
        })}
      </Container>
    </div>
  );
};
