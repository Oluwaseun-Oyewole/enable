import { BsPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import tw from "twin.macro";
import HeroImg from "../../../assets/hero.svg";
import { Button } from "../../atom/button";
import { Container } from "../../shared";

const HeroHeading = styled.h1`
  ${tw`font-extrabold text-[30px] md:text-[47px] lg:text-[55px] xl:text-[48px] `}
`;

const HeadingSpan = styled.span`
  ${tw`text-purple`}
`;
const HeroContent = styled.p`
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

export const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroHero>
          <div>
            <HeroContent>
              <HeroHeading>
                Empowering Our <HeadingSpan>Women</HeadingSpan> and families to
                prosper
              </HeroHeading>
              <HeroParagraph>
                Lorem ipsum dolor sit amet consectetur. Sed scelerisque commodo
                nisldd amet dolor nulla eu fusce. Ridiculus viverra justo nisl
                vitae. Iaculis blandit urna ut pretium neque morbi sit tortor
                id. Lobortis cras amet lectus nulla dignissim ultricies ipsum
                enim
              </HeroParagraph>
              <HeroButtonContainer>
                <Button
                  children="Apply Now"
                  className="bg-purple text-white md:w-1/2 py-4 xl:py-3 hover:opacity-70"
                />
                <Button
                  className="md:w-1/2 border-black  py-4 xl:py-3  border-2 hover:opacity-70"
                  //   icon={<PlayImage src={Play} />}
                  icon={<BsPlayCircleFill size={50} />}
                  btnFlex={true}
                >
                  How it Works
                </Button>
              </HeroButtonContainer>
            </HeroContent>
          </div>
          <>
            <HeroImage src={HeroImg} />
          </>
        </HeroHero>
      </Container>
    </HeroContainer>
  );
};
