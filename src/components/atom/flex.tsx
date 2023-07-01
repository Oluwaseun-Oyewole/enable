import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "./button";
import { Tilt } from "./vanilla";

type FlexComponentProps = {
  buttonClassName?: string;
  data?: Array<{
    description?: string;
    imageSrc?: string;
    buttonText?: string;
    columnReversed?: boolean;
  }>;
};

const FlexContainer = styled.div`
  ${tw`flex flex-col justify-center gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center`}
`;

const FlexHeading = styled.div`
  ${tw``}
`;

const FlexParagraph = styled.p`
  ${tw`lg:text-lg leading-loose lg:pr-16 opacity-70`}
`;

const FlexImage = styled.img`
  ${tw`w-full`}
`;

const FlexContent = styled.div`
  ${tw`w-full lg:basis-[55%] lg:text-left`}
`;
export const FlexComponent = ({
  buttonClassName,
  data,
}: FlexComponentProps) => {
  return (
    <>
      {data?.map((el, index) => {
        return (
          <FlexContainer key={index}>
            <FlexContent>
              <FlexParagraph>{el?.description}</FlexParagraph>
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
