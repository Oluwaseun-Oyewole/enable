import React from "react";
import { socials } from "../../constants";
import { Container } from "../shared";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../assets/Logo.svg";
import { companyLink, servicedLink } from "../../constants";
import { LuPhoneCall } from "react-icons/lu";
const Links = styled.ul`
  li {
    list-style: none;
    ${tw`py-[7px]`}
    > a {
      ${tw`py-5`}
    }
  }
`;
// const LinkSpace = styled.div`
// ${tw`py-5`}
// `
const HeadLink = styled.h3`
  ${tw`text-2xl md:pt-14 lg:pt-0 py-3 font-medium`}
`;
const CopyRight = styled.div`
  ${tw`text-sm pt-4 pb-10`}
`;
const HeadSocial = styled.div`
  ${tw`flex items-center justify-start gap-5`}
`;
const ContainerLink = styled.div`
  ${tw`pb-6 md:pb-0`}
`;
const FlexContainer = styled.div`
  ${tw`flex-col lg:flex-row flex justify-between items-start`}

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Footer = () => {
  return (
    <div className="bg-purple text-white mt-20 py-20">
      <Container>
        <p className="pb-[5rem]">
          Disclaimer: Enable is not in the business of lending. Enable is a
          social enterprise that gets women loan ready and facilitates access to
          credit given by partner digital lenders and financial institutions
          that care about women and families. We also secure guarantees from
          kind-hearted members of the public to improve lenders' confidence in
          women.
        </p>
        <FlexContainer>
          <div>
            <img src={logo} />
            <p className="py-5">
              Reach out to us on any <br /> of our social media networks
            </p>
            <p>
              {/* <span>{LuPhoneCall}</span> */}
              +234 813 8002 859
            </p>
          </div>

          <ContainerLink className="pt-8 md:pt-0">
            <HeadLink>Company</HeadLink>
            <div>
              {companyLink?.map((link, index) => {
                return (
                  <Links>
                    <li key={index}>
                      <Link to={link.pathname}>{link.title}</Link>
                    </li>
                  </Links>
                );
              })}
            </div>
          </ContainerLink>

          <ContainerLink className="pt-8 md:pt-0">
            <HeadLink>Company</HeadLink>
            <div>
              {servicedLink?.map((link, index) => {
                return (
                  <Links>
                    <li key={index}>
                      <Link to={link.pathname}>{link.title}</Link>
                    </li>
                  </Links>
                );
              })}
            </div>
          </ContainerLink>
          <ContainerLink>
            <HeadLink>Contact</HeadLink>

            <Links>
              {/* <ul> */}
              <li>
                <a href="#">info@destinytrust.org</a>
              </li>
              <li>
                <a href="#">enable@empower women</a>
              </li>
              <li>
                TDT Centre, 6, Brilla F.M Road, <br />
                Off Bola Tinubu Road, Bogije <br />
                Town, Ibeju-Lekki, Lagos
              </li>
              {/* </ul> */}
            </Links>
          </ContainerLink>

          <div>
            <HeadLink>Follow Us on</HeadLink>

            <HeadSocial>
              {socials?.map((social, index) => (
                <a href="#" key={index} className="py-5">
                  <social.icon
                    size={social.size}
                    // color={social.color}
                    key={index}
                  />
                </a>
              ))}
            </HeadSocial>
            <CopyRight>
              <h2>&copy; 2023 Enable </h2>
            </CopyRight>
          </div>
        </FlexContainer>
      </Container>
    </div>
  );
};
