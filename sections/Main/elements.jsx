import styled from "styled-components";

import {
  SectionBackgroundImageContainer,
  SectionMainCardContainer,
  SectionImageContainer,
  SectionInnerContainer,
  SectionOuterContainer,
  SectionTitle,
  SectionSubtitle,
} from "~/components";

export const StyledImageContainer = styled((props) => (
  <SectionImageContainer {...props} />
))``;
export const StyledInnerContainer = styled((props) => (
  <SectionInnerContainer {...props} />
))`
  padding: 4rem 0;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledMainCardContainer = styled((props) => (
  <SectionMainCardContainer {...props} />
))`
  width: auto;
  margin-left: 5%;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const StyledBackgroundImageContainer = styled((props) => (
  <SectionBackgroundImageContainer {...props} />
))`
z-index: -1;
margin-top: 300px;
margin-right: 0;
left: -28%;
}
@media (max-width: 1024px) {
    width: 88%;
    position: absolute;
    margin-bottom: 0;
    left: 7%;
  }
`;

export const StyledTitle = styled((props) => <SectionTitle {...props} />)`
  margin: 0 0 1rem 0;
  @media (max-width: 1024px) {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;
export const StyledSubTitle = styled((props) => <SectionSubtitle {...props} />)`
  margin: 0 0 1rem 0;
  @media (max-width: 1024px) {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;
export const StyledOuterContainer = styled((props) => (
  <SectionOuterContainer {...props} />
))`
  margin: 4rem 0;
  padding: 10;
`;
