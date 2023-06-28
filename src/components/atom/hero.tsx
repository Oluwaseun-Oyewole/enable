import { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../shared";
import { Button } from "./button";

type HeroPropsType = {
  heading?: string;
  subheading?: string;
  descriptions?: string;
  buttonText?: string;
  buttonText2?: string;
  image?: string;
  buttonClassName?: string;
  buttonClassName2?: string;
  spanText?: string;
  buttonIcon?: ReactElement | undefined;
};
const HeroHeading = styled.h1`
  ${tw`font-extrabold text-[30px] md:text-[47px] lg:text-[55px] xl:text-[48px] `}
`;

const HeadingSpan = styled.span`
  ${tw`text-purple`}
`;
const HeroContent = styled.div`
  ${tw`xl:-mt-32`}
`;

const HeroParagraph = styled.p`
  ${tw` py-5 lg:py-5 lg:w-[85%] xl:w-[89%] text-sm lg:text-sm text-gray-700 text-left md:text-left`}
`;

const HeroButtonContainer = styled.div`
  ${tw`mt-5 w-full xl:w-[70%] flex md:flex-row md:gap-10 flex-col gap-3`}
`;
const HeroContainer = styled.section`
  ${tw`bg-no-repeat bg-cover w-full bg-hero_bg`}
`;

const HeroImage = styled.img`
  ${tw`pt-10 md:pt-24 xl:pt-0`}
`;
const HeroHero = styled.div`
  ${tw`lg:flex items-center flex-col xl:flex-row xl:justify-between pt-10 xl:pt-24`}

  >div {
    width: 50%;
    ${tw`xl:w-[50%] w-full`}
  }
  > img {
    ${tw`xl:w-[50%] w-full`}
  }
`;

export const HeroComponent = ({
  heading,
  subheading,
  descriptions,
  buttonClassName,
  buttonClassName2,
  buttonText2,
  buttonText,
  image,
  buttonIcon,
  spanText,
}: HeroPropsType) => {
  return (
    <HeroContainer>
      <Container>
        <HeroHero>
          <div>
            <HeroContent>
              <HeroHeading>
                {heading} <HeadingSpan>{spanText}</HeadingSpan> {subheading}
              </HeroHeading>
              <HeroParagraph>{descriptions}</HeroParagraph>
              <HeroButtonContainer>
                <Button
                  children={`${buttonText}`}
                  className={buttonClassName}
                />
                <Button
                  className={buttonClassName2}
                  icon={buttonIcon}
                  btnFlex={true}
                  children={`${buttonText2}`}
                />
              </HeroButtonContainer>
            </HeroContent>
          </div>
          <>
            <HeroImage src={image} />
          </>
        </HeroHero>
      </Container>
    </HeroContainer>
  );
};
