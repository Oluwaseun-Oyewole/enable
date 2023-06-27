import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../../shared";
// import { ContainerFlexDirection } from "../../../shared";
// import { ContainerGrid } from "../../../shared";
import getloan from "../../../../assets/getloan.svg";
import guloan from "../../../../assets/gurantee.svg";
import giveloan from "../../../../assets/giveloan.svg";
import React from "react";
import "./grid.css";

const ContainerGrid = styled.div`
  ${tw`grid grid-cols-1 md:gap-5 md:grid-cols-2 xl:grid-cols-3 place-items-center place-items-center text-white py-32 px-12`}
`;
const TextWidth = styled.div`
  ${tw`max-w-[95%] mx-auto text-center`}
`;
const DivImg = styled.img`
  ${tw`block mx-auto mt-12 mb-5`}
`;
export const GridCard = () => {
  return (
    <div className="loan">
      <Container>
        <ContainerGrid>
          {/* <ContainerFlexDirection> */}
          <div>
            {/* <divImg> */}
            <DivImg src={getloan} alt="" />
            <TextWidth>
              <h3>Get Loan</h3>
              <p>
                Borrow to start or grow your business. No collateral. No
                interest if you pay back when due.
              </p>
            </TextWidth>
          </div>
          <div>
            <DivImg src={guloan} alt="" />
            <TextWidth>
              <h3>Guarantee a loan</h3>
              <p>
                If you guarantee a woman's loan repayment, you improve their
                chances of getting access to credit. You can assure repayment of
                as little as N20,000.
              </p>
            </TextWidth>
          </div>
          <div>
            <DivImg src={giveloan} alt="" />
            <TextWidth>
              <h3>Give Loan</h3>
              <p>
                Lend to enterprising low-income women to do business and earn
                income to support themselves and children.
              </p>
            </TextWidth>
          </div>
          {/* </ContainerFlexDirection> */}
        </ContainerGrid>
      </Container>
    </div>
  );
};
