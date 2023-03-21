import { Hero } from "../sections";
import { Main } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  mainTitle: "Managed agency selection",
  subTitle: "Strengthen your onboarding process",
  cards: [
    {
      id: "1",
      title: "Brief",
      description:
        "Complete <span>brief writing or simple guidance</span> on what to include, we've got you covered.",
      icon: { src: "/img/topcardicon.png" },
      type: "sm",
    },
    {
      id: "2",
      title: "Search",
      description:
        "In-depth agency search covering; <span>criteria matching</span>, door knocking and due-dilligence vetting.",
      icon: { src: "/img/midcardicon.png" },
      type: "md",
    },
    {
      id: "3",
      title: "Pitch",
      description:
        "Comprehensive <span>pitch management</span>, including comms, diary management and pitch hosting.",
      icon: { src: "/img/bottomcardicon.png" },
      type: "lg",
    },
  ],
  background: {
    src: "/img/background.png",
    alt: "background",
    width: 1980,
    height: 1000,
  },
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Main {...mainProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
