import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { GridCard } from "./Sections/GridCard/GridCard";
import { SchoolMoni } from "./Sections/SchoolMoni";
export const UI = () => {
  return (
    <>
      <GridCard />
      <SchoolMoni />
    </>
  );
};
