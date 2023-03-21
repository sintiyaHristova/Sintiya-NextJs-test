import { Card } from "../../collections/Card/Card";
import {
  StyledOuterContainer,
  StyledInnerContainer,
  StyledMainCardContainer,
  StyledTitle,
  StyledSubTitle,
  StyledImageContainer,
  StyledBackgroundImageContainer,
} from "./elements";

import Image from "next/image";
import videoImage from "../../public/img/video.png";

export const Main = ({ mainTitle, subTitle, cards, background }) => {
  return (
    <StyledOuterContainer>
      <StyledTitle>{mainTitle}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
      <StyledInnerContainer>
        <StyledImageContainer>
          <Image
            layout="fixed"
            src={videoImage}
            alt="video picture"
            width={350}
            height={600}
          />
        </StyledImageContainer>
        <StyledMainCardContainer>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon.src}
              type={card.type}
            />
          ))}
        </StyledMainCardContainer>
        <StyledBackgroundImageContainer>
          <Image
            layout="responsive"
            src={background.src}
            alt={background.alt}
            width={background.width}
            height={background.height}
          />
        </StyledBackgroundImageContainer>
      </StyledInnerContainer>
    </StyledOuterContainer>
  );
};
