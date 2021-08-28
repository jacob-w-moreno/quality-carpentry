import React from "react";

import Intro from "../Intro";
import Services from "../Services/ServicesList/Services";
import GetQuote from "../Contact/GetQuote";
import Reviews from "../Reviews";
import Value from "./Value";
import Gallery from "../Gallery/Gallery";

import Communication from "../../Styles/Assets/Icons/Values/Communication.png";
import Price from "../../Styles/Assets/Icons/Values/Price.png";
import Quality from "../../Styles/Assets/Icons/Values/Quality.png";
import Speed from "../../Styles/Assets/Icons/Values/Speed.png";

import basement from "../../Styles/Assets/Services/Basements/6A.jpg";
import flooring from "../../Styles/Assets/Services/Flooring/5.jpg";
import junk from "../../Styles/Assets/Services/JunkRemoval/1A.jpg";
import roofing from "../../Styles/Assets/Services/Roofing/5.jpg";
import remodels from "../../Styles/Assets/Services/Remodels/AF555/After/Upstairs_Living.JPG";
import tree from "../../Styles/Assets/Services/TreeRemoval/1.jpg";

const Landing = (props) => {
  // ===== ===== DATA BEG ===== =====

  const valuesList = [
    {
      image: Quality,
      value: "Quality",
      description:
        "We do things right because every job is worth doing well. We are proud of the work that we do and will gladly attest to its quality.",
    },
    {
      image: Communication,
      value: "Communication",
      description:
        "We communicate with our customers before, during, and after every project to ensure that our work exceeds all expectations.",
    },
    {
      image: Speed,
      value: "Speed",
      description:
        "We work hard and efficiently to make sure every job is finished quickly — without cutting any corners.",
    },
    {
      image: Price,
      value: "Affordability",
      description:
        "We quote honest and reasonable prices, and work with our customers to help them finish every project within their budget.",
    },
  ];

  let images = [[basement], [flooring], [roofing], [remodels], [tree], [junk]];

  // ===== ===== DATA END ===== =====
  // ===== ===== FUNCTIONS BEG ===== =====

  // ===== ===== FUNCTIONS END ===== =====
  // ===== ===== 'COMPONENTS' BEG ===== =====

  const values = (
    <div className="landing_values-container">
      <h3 className="landing_title">OUR CORE VALUES</h3>
      <div className="landing_values">
        {valuesList.map((element) => (
          <Value
            img={element.image}
            value={element.value}
            description={element.description}
            key={element.value}
          />
        ))}
      </div>
    </div>
  );

  // ===== ===== 'COMPONENTS' END ===== =====

  return (
    <div className="landing">
      <Intro
        primaryText="QUALITY CARPENTRY"
        secondaryText="We'll get the job done"
        cta={true}
        mascot={true}
        gallery={true}
      />
      <Services title="What we do" />
      <Gallery images={images} />
      <Reviews background="#e3e3e3" />
      {values}
      <GetQuote title="" background="#e3e3e3" />
    </div>
  );
};

export default Landing;
