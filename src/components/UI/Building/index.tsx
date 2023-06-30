import styled from "styled-components";
import { default as tw } from "twin.macro";
import { building } from "../../../constants";
import { Button } from "../../atom/button";

const Title = styled.h1`
  ${tw`pt-5 xl:pt-10 text-2xl xl:text-3xl font-medium`}
`;

const SubTitle = styled.h1`
  ${tw`pt-2 xl:pt-4 text-2xl xl:text-3xl font-medium`}
`;

const FirstParagraph = styled.p`
  ${tw`py-6 text-xs xl:text-sm tracking-wider font-extralight`}
`;

const SecondParagraph = styled.p`
  ${tw`pb-6 text-xs xl:text-sm tracking-wider font-extralight`}
`;

const Image = styled.img`
  ${tw` h-full w-full md:h-[450px]  xl:min-h-[600px] `}
`;

const BuildingContainer = styled.div`
  ${tw`flex flex-col lg:flex-row`}
  >div:first-child {
    flex-basis: 50%;
  }

  > img:last-child {
    flex-basis: 50%;
  }
`;

const BuildingContent = styled.div<{ color?: string }>`
  ${tw`bg-purple text-white pl-10 px-5 md:px-16  xl:pl-32 xl:px-24 xl:pt-2 pb-10 lg:pb-0 xl:pb-10`}
`;

const ButtonContainer = styled.div`
  ${tw`pt-3 flex gap-3 xl:w-[65%] text-sm `}
`;

export const Building = () => {
  return (
    <section>
      <>
        <BuildingContainer>
          <BuildingContent>
            <Title>{building.title}</Title>
            <SubTitle>{building.subtitle}</SubTitle>
            <div>
              <FirstParagraph>{building.paragraph}</FirstParagraph>
              <SecondParagraph>{building.paragraph2}</SecondParagraph>
            </div>
            <ButtonContainer>
              <Button
                children={`${building.buttonText}`}
                type="button"
                className="bg-white text-purple w-full lg:w-[40%] py-3 hover:opacity-90"
              />
              <Button
                children={`${building.buttonText2}`}
                type="button"
                className="bg-purple border-[1px] border-white w-full lg:w-1/2 hover:opacity-90"
              />
            </ButtonContainer>
          </BuildingContent>

          <Image src={building.image} alt={building.image} />
        </BuildingContainer>
      </>
    </section>
  );
};
