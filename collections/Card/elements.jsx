// Styled elements for the Card go here
import styled, { css } from "styled-components";

import {
  SectionCardTitle,
  SectionCardIcon,
  SectionCardDescription,
  SectionCardContainer,
  SectionCardIconContainer,
  SectionCardTextContainer,
} from "~/components";

export const StyledCardIconContainer = styled((props) => (
  <SectionCardIconContainer {...props} />
))`
margin: 11px
`;

export const StyledCardIcon = styled((props) => <SectionCardIcon {...props} />)`
  height: 6rem;
`;

export const StyledCardDescription = styled((props) => (
  <SectionCardDescription {...props} />
))`
  margin: 0;
  & > span {
    font-weight: bold;
    padding-right: 0rem;
  }
`;
const typeOfCard = {
  sm: css` max-width: 25rem;}`,
  md: css` max-width: 27rem; }`,
  lg: css` width: 29rem; }`,
};

export const StyledCardContainer = styled((props) => (
  <SectionCardContainer {...props} />
))`
  display: flex;
  margin: 2rem 0;
  padding: 1.5rem;
  cursor: pointer;
  &:hover,
  &:active,
  {
    border: 2px solid transparent;
    border-color: #1e7efb;
    background: rgba(244, 244, 244, 255);
  }
  @media (max-width: 1024px) {
    gap: 0;
    justify-content: space-evenly;
  }
  ${({ type }) => typeOfCard[type]}
`;

export const StyledCardTextContainer = styled((props) => (
  <SectionCardTextContainer {...props} />
))`
&:hover,
&:focus,
&:active {
    border-color: #0070f3;
  }
`;

export const StyledCardTitle = styled((props) => (
  <SectionCardTitle {...props} />
))`
margin: 0 0 1rem 0;
&:hover,
&:focus,
&:active {
    color: #0070f3;
    text-decoration: underline;
  }
`;
