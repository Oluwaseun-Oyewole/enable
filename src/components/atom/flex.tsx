import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "./button";
import { Tilt } from "./vanilla";

type FlexComponentProps = {
  buttonClassName?: string;
  columnReversed?: boolean;
  data?: Array<{
    description?: string;
    imageSrc?: string;
    text1?: string;
    text2?: string;
    heading?: string;
    buttonText?: string;
  }>;
};

const FlexContainer = styled.div<{ columnReversed?: boolean }>`
  ${({ columnReversed }) =>
    columnReversed
      ? tw`flex flex-col-reverse justify-center  lg:flex-row-reverse lg:justify-between items-center gap-40 `
      : tw`flex-col-reverse lg:flex-row flex   items-center `}
`;
// `
//   ${tw`flex flex-col-reverse justify-center gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center`}
// `;

const FlexHeading = styled.div`
  ${tw`text-purple text-[1.5rem] pb-3`}
`;
const FlexText = styled.div`
  ${tw`xl:max-w-[80%]`}
`;

// const FlexParagraph = styled.p`
//   ${tw`lg:text-lg leading-loose lg:pr-16 opacity-70`}
// `;
const FlexParagraph = styled.p`
  ${tw`pb-6 text-sm tracking-wider font-extralight
  xl:max-w-[80%]
  `}
`;

const FlexImage = styled.img`
  ${tw`w-full`}
`;

const FlexContent = styled.div`
  ${tw`w-full 
  lg:basis-[55%]
   lg:text-left`}
`;
export const FlexComponent = ({
  buttonClassName,
  columnReversed,
  data,
}: FlexComponentProps) => {
  return (
    <>
      {data?.map((el, index) => {
        return (
          <FlexContainer columnReversed={columnReversed}>
            <FlexContent key={index}>
              <FlexHeading>{el.heading}</FlexHeading>
              <FlexParagraph>{el?.description}</FlexParagraph>
              <FlexText>
                <ul>
                  <li className="pb-4">{el.text1}</li>
                  <li>{el.text2}</li>
                </ul>
              </FlexText>
              <div className="my-5">
                <Button
                  className={buttonClassName}
                  children={`${el?.buttonText}`}
                />
              </div>
            </FlexContent>
            <div className="">
              <Tilt>
                <FlexImage src={`${el?.imageSrc}`} />
              </Tilt>
            </div>
          </FlexContainer>
        );
      })}
    </>
  );
};
