import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../shared";
import logo from "../../../assets/momiselfie.svg";
import { Button } from "../../atom/button";
const HeroHeading = styled.h1`
  ${tw`font-bold pt-5 md:pt-5 xl:pt-0 text-[20px] md:text-[25px] lg:text-[27px] xl:text-[33px] xl:text-left`}
`;

const HeadingSpan = styled.span`
  ${tw`text-purple`}
`;
// const HeroContent = styled.p`
//   ${tw`xl:-mt-32 `}
// `;

const HeroParagraph = styled.p`
  ${tw` py-5 lg:py-5 lg:w-[85%] xl:w-[89%] text-sm lg:text-sm text-gray-700 text-left md:text-left`}
`;
const HeroButtonContainer = styled.div`
  ${tw`mt-5 w-full xl:w-[100%]  flex md:flex-row md:gap-10 flex-col`}
`;
const HeroHero = styled.div`
  ${tw`lg:flex items-center flex-col md:flex-row xl:justify-between md:px-10 py-24 md:gap-4`}

  > div {
    width: 50%;
    ${tw`xl:w-[50%] w-full
    md:w-[90%]
    `}
  }
  > img {
    ${tw`xl:w-[40%] w-full`}
  }
`;
// [#FCF5FF];

export const SchoolMoni = () => {
  return (
    <div className="my-[5rem]">
      {/* <HeroContainer> */}
      <Container className="bg-[#FCF5FF]">
        <HeroHero>
          <>
            <img src={logo} />
          </>
          <div>
            <HeroHeading>
              <HeadingSpan>SchoolMoni</HeadingSpan> for children of widows and
              single mothers
            </HeroHeading>
            <HeroParagraph>
              Lorem ipsum dolor sit amet consectetur. Imperdiet a ac urna non in
              vestibulum tellus. Dui elit condimentum euismod et lorem. Lectus
              sit pellentesque sagittis dia
            </HeroParagraph>
            <HeroButtonContainer>
              <Button
                children="Guarantee A Loan"
                className="mt-5 bg-purple font-bold px-8 hover:opacity-80 py-4 text-white text-sm mb-2"
              />
              <Button
                children="Guarantee SchoolMoni"
                className="mt-5 border-purple border-4 bg-white text-purple px-8 hover:opacity-80 py-3 md:font-bold text-sm mb-2 "
              />
            </HeroButtonContainer>
          </div>
        </HeroHero>
      </Container>
    </div>
  );
};
