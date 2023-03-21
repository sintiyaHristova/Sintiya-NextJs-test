import styled from "styled-components";

export const StyledCardIconContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: inline-block;
`;

export const StyledCardTextContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  text-align: left;
  color: inherit;
  transition: color 0.16s ease, border-color 0.16s ease;
`;
export const StyledCardContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
display: flex;
flex-direction row;
align-items: center;
text-align: left;
color: inherit;
background: #fafafa;
border: 3px solid transparent;
border-radius: 12px;
transition: color 0.15s ease, border-color 0.16s ease;
height: 90px;
`;
