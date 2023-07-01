import React from "react";
import { malcom } from "../../../../constants";
import tw from "twin.macro";
import styled from "styled-components";
import { CgQuote } from "react-icons/cg";

const Quote = styled.div`
   {
    ${tw`flex`}
  }
`;
const Container = styled.div`
   {
    ${tw` max-w-[46%] min-h-[50%] m-auto py-10`}
  }
`;
const Text = styled.div`
   {
    ${tw`text-white font-bodins italic leading-9`}
  }
`;
export const Malcom = () => {
  return (
    <div className="bg-purple">
      <Container>
        {malcom?.map((el, index) => (
          <Text>
            <div key={index}>
              <Quote>
                <span>
                  <CgQuote size="50px" />
                </span>
                <p className="self-end mt-7">{el.quote}</p>
              </Quote>
              <span className="float-right underline">{el.name}</span>
            </div>
          </Text>
        ))}
      </Container>
    </div>
  );
};
