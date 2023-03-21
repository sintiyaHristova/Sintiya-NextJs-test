import styled from "styled-components";

export const StyledImageContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledBackgroundImageContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledOuterContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledInnerContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StyledMainCardContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
