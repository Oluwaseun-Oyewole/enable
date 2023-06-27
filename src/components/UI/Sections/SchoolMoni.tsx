import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../shared";
import logo from "../../../assets/momiselfie.svg";
const ContainerFlexBetween = styled.div`
  ${tw`flex items-center justify-between px-12 py-5`}
`;
const DivImg = styled.img`
  ${tw`block mx-auto mt-12 mb-5`}
`;
export const SchoolMoni = () => {
  return (
    <div>
      <Container className={`bg-[#FCF5FF]`}>
        <ContainerFlexBetween>
          <div>
            <DivImg src={logo} />
          </div>
          <div>
            <h1>SchoolMoni for children of widows and single mothers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Imperdiet a ac urna non in
              vestibulum tellus. Dui elit condimentum euismod et lorem. Lectus
              sit pellentesque sagittis dia
            </p>
          </div>
        </ContainerFlexBetween>
      </Container>
    </div>
  );
};
