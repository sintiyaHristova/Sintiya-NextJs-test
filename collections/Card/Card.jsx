// The Card to be exported goes here
import {
  StyledCardContainer,
  StyledCardIconContainer,
  StyledCardTextContainer,
  StyledCardIcon,
  StyledCardTitle,
  StyledCardDescription,
} from "./elements";

export const Card = ({ icon, title, description, ...props }) => {
  return (
    <StyledCardContainer {...props}>
      <StyledCardIconContainer>
        <StyledCardIcon src={icon} />
      </StyledCardIconContainer>
      <StyledCardTextContainer>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription
          dangerouslySetInnerHTML={{ __html: description }}
        ></StyledCardDescription>
      </StyledCardTextContainer>
    </StyledCardContainer>
  );
};
