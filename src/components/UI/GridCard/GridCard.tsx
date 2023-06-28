import styled from "styled-components";
import tw from "twin.macro";
import { gridData } from "../../../constants";
import { Container } from "../../shared";

const GridCards = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10`}
`;
const GridContentContainer = styled.div`
  ${tw`py-5 pr-14 pl-2`}
`;
const GridCardTitle = styled.h2`
  ${tw` text-[20px] font-medium text-white `}
`;

const GridCardParagraph = styled.p`
  ${tw`pt-2 text-white text-sm`}
`;

const GridImage = styled.img`
  ${tw`md:w-[40%] w-[30%]`}
`;

const GridContainer = styled.section`
  ${tw`py-12`}
`;

export const GridCard = () => {
  return (
    <GridContainer className="bg-purple">
      <Container>
        <GridCards>
          {gridData?.map((blog, index) => {
            return (
              <div key={index}>
                <GridImage src={blog?.img} />
                <GridContentContainer>
                  <GridCardTitle>{blog?.title}</GridCardTitle>
                  <GridCardParagraph>{blog?.paragraph}</GridCardParagraph>
                </GridContentContainer>
              </div>
            );
          })}
        </GridCards>
      </Container>
    </GridContainer>
  );
};
