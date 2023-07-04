import React from "react";
import { FlexComponent } from "../../../atom/flex";
import { SchoolMoniData } from "../../../../constants";
import { ChildData } from "../../../../constants";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../../../shared";

const BackgroundStyle = styled.div`
  ${tw`bg-gradient-to-r from-white to-[#FCF5FF]`}
`;
const Background = styled.div`
  ${tw`bg-hero_bg bg-cover`}
`;
const PaddingContainer = styled.div`
  ${tw`py-[5rem]`}
`;
export const Studies = () => {
  return (
    <BackgroundStyle>
      <Background>
        <div>
          <Container>
            <PaddingContainer>
              <div className="pb-10">
                <FlexComponent
                  data={ChildData}
                  buttonClassName=""
                  columnReversed={true}
                />
              </div>
              <div>
                <FlexComponent
                  buttonClassName=" border-purple text-white rounded-md bg-purple px-3 py-4  border-[2px] hover:opacity-70 font-medium text-sm"
                  data={SchoolMoniData}
                />
              </div>
            </PaddingContainer>
          </Container>
        </div>
      </Background>
    </BackgroundStyle>
  );
};
