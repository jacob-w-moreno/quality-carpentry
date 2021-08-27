import React from "react";
import Intro from "../Intro";
import Services from "./ServicesList/Services";
import GetQuote from "../Contact/GetQuote";
import Reviews from "../Reviews";
import Gallery from "../Gallery/Gallery";

import basement1A from "../../Styles/Assets/Services/Basements/1A.jpg";
import basement1B from "../../Styles/Assets/Services/Basements/1B.jpg";
import basement2A from "../../Styles/Assets/Services/Basements/2A.jpg";
import basement2B from "../../Styles/Assets/Services/Basements/2B.jpg";
import basement3A from "../../Styles/Assets/Services/Basements/3A.jpg";
import basement3B from "../../Styles/Assets/Services/Basements/3B.jpg";
import basement4A from "../../Styles/Assets/Services/Basements/4A.jpg";
import basement4B from "../../Styles/Assets/Services/Basements/4B.jpg";
import basement5A from "../../Styles/Assets/Services/Basements/5A.jpg";
import basement5B from "../../Styles/Assets/Services/Basements/5B.jpg";
import basement6A from "../../Styles/Assets/Services/Basements/6A.jpg";
import basement6B from "../../Styles/Assets/Services/Basements/6B.jpg";
import basement7A from "../../Styles/Assets/Services/Basements/7A.jpg";
import basement7B from "../../Styles/Assets/Services/Basements/7B.jpg";
import basement8A from "../../Styles/Assets/Services/Basements/8A.jpg";
import basement8B from "../../Styles/Assets/Services/Basements/8B.jpg";
import basement9A from "../../Styles/Assets/Services/Basements/9A.jpg";
import basement10A from "../../Styles/Assets/Services/Basements/10A.jpg";
import basement10B from "../../Styles/Assets/Services/Basements/10B.jpg";

import finish1 from "../../Styles/Assets/Services/FinishCarpentry/1.jpg";
import finish2 from "../../Styles/Assets/Services/FinishCarpentry/2.jpg";
import finish3 from "../../Styles/Assets/Services/FinishCarpentry/3.jpg";

import flooring1 from "../../Styles/Assets/Services/Flooring/1.jpg";
import flooring2 from "../../Styles/Assets/Services/Flooring/2.jpg";
import flooring3 from "../../Styles/Assets/Services/Flooring/3.jpg";
import flooring4 from "../../Styles/Assets/Services/Flooring/4.jpg";
import flooring5 from "../../Styles/Assets/Services/Flooring/5.jpg";
import flooring6 from "../../Styles/Assets/Services/Flooring/6.jpg";
import flooring7 from "../../Styles/Assets/Services/Flooring/7.jpg";
import flooring8 from "../../Styles/Assets/Services/Flooring/8.jpg";
import flooring9 from "../../Styles/Assets/Services/Flooring/9.jpg";
import flooring10 from "../../Styles/Assets/Services/Flooring/10.jpg";
import flooring11 from "../../Styles/Assets/Services/Flooring/11.jpg";
import flooring12 from "../../Styles/Assets/Services/Flooring/12.jpg";
import flooring13 from "../../Styles/Assets/Services/Flooring/13.jpg";
import flooring14 from "../../Styles/Assets/Services/Flooring/14.jpg";
import flooring15 from "../../Styles/Assets/Services/Flooring/15.jpg";

import junk1A from "../../Styles/Assets/Services/JunkRemoval/1A.jpg";
import junk1B from "../../Styles/Assets/Services/JunkRemoval/1B.jpg";
import junk2A from "../../Styles/Assets/Services/JunkRemoval/2A.jpg";
import junk2B from "../../Styles/Assets/Services/JunkRemoval/2B.jpg";
import junk3A from "../../Styles/Assets/Services/JunkRemoval/3A.jpg";
import junk3B from "../../Styles/Assets/Services/JunkRemoval/3B.jpg";
import junk4A from "../../Styles/Assets/Services/JunkRemoval/4A.jpg";
import junk4B from "../../Styles/Assets/Services/JunkRemoval/4B.jpg";
import junk5A from "../../Styles/Assets/Services/JunkRemoval/5A.jpg";
import junk5B from "../../Styles/Assets/Services/JunkRemoval/5B.jpg";

import roofing1 from "../../Styles/Assets/Services/Roofing/1.jpg";
import roofing2 from "../../Styles/Assets/Services/Roofing/2.jpg";
import roofing4 from "../../Styles/Assets/Services/Roofing/4.jpg";
import roofing5 from "../../Styles/Assets/Services/Roofing/5.jpg";
import roofing6 from "../../Styles/Assets/Services/Roofing/6.jpg";

import remodels1A from "../../Styles/Assets/Services/Remodels/1A.jpg";
import remodels2A from "../../Styles/Assets/Services/Remodels/2A.jpg";

import remodels3A from "../../Styles/Assets/Services/Remodels/3A.JPG";
import remodels4A from "../../Styles/Assets/Services/Remodels/4A.JPG";
import remodels5A from "../../Styles/Assets/Services/Remodels/5A.JPG";
import remodels6A from "../../Styles/Assets/Services/Remodels/6A.JPG";
import remodels7A from "../../Styles/Assets/Services/Remodels/7A.JPG";
import remodels8A from "../../Styles/Assets/Services/Remodels/8A.JPG";
import remodels9A from "../../Styles/Assets/Services/Remodels/9A.JPG";
import remodels10A from "../../Styles/Assets/Services/Remodels/10A.JPG";
import remodels11A from "../../Styles/Assets/Services/Remodels/11A.JPG";
import remodels12A from "../../Styles/Assets/Services/Remodels/12A.JPG";
import remodels13A from "../../Styles/Assets/Services/Remodels/13A.JPG";

import tree1 from "../../Styles/Assets/Services/TreeRemoval/1.jpg";
import tree2 from "../../Styles/Assets/Services/TreeRemoval/2.jpg";
import tree3 from "../../Styles/Assets/Services/TreeRemoval/3.jpg";

const Service = (props) => {
  // ===== ===== DATA BEG ===== =====

  let images, introTitle, secondaryText;
  let description = (
    <p className="service_summary-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );

  switch (props.location.pathname) {
    case "/services/roofing":
      introTitle = "Roofing";
      description =
        "Our roofing experts have experience protecting Utah's homes by installing and repairing high-quality roofs. We understand that the roof is one of the most important features of any home — both structurally and aesthetically — which is why we use premium materials, never cut corners, and do every job the right way.";
      images = [[roofing4], [roofing6], [roofing5], [roofing1], [roofing2]];
      break;

    case "/services/flooring":
      introTitle = "Flooring";
      description =
        "All of the floors we install are beautiful and long-lasting, so you'll be able to enjoy them for years to come. We also offer custom vinyl flooring. Like everything else we do, we stand by the quality of every flooring job we take on.";
      images = [
        [flooring2],
        [flooring5],
        [flooring4],
        [flooring6],
        [flooring3],
        [flooring1],
        [flooring7],
        [flooring8],
        [flooring9],
        [flooring10],
        [flooring11],
        [flooring12],
        [flooring13],
        [flooring14],
        [flooring15],
      ];
      break;

    case "/services/remodels":
      introTitle = "Remodels";
      description =
        "If you're looking to remodel your house or business, we have you covered. We'll work with you to determine your goals, then we'll take it from there and bring them to life. With our help, your home or business will match your vision before you know it!";
      images = [
        [remodels1A],
        [remodels2A],
        [remodels3A],
        [remodels4A],
        [remodels5A],
        [remodels6A],
        [remodels7A],
        [remodels8A],
        [remodels9A],
        [remodels10A],
        [remodels11A],
        [remodels12A],
        [remodels13A],
      ];
      break;

    case "/services/basements":
      introTitle = "Basements";
      description =
        "With our help, finally finishing your basement is a realistic goal. At Quality Carpentry, we're known for our beautiful and high-quality basements that increase the value of houses. Whether you're building a basement apartment or creating more space for your growing family, we can get the job done.";
      images = [
        [basement1A, basement1B],
        [basement2A, basement2B],
        [basement3A, basement3B],
        [basement4A, basement4B],
        [basement5A, basement5B],
        [basement6A, basement6B],
        [basement7A, basement7B],
        [basement8A, basement8B],
        [basement9A],
        [basement10A, basement10B],
      ];
      break;

    case "/services/finish-carpentry":
      introTitle = "Finish Carpentry";
      description =
        "Our team has over 30 years of experience in contract work, flipping houses, finish carpentry, construction, and general woodworking. If you're working on a project that isn't listed here, please let us know! We'll be happy to help however we can.";
      images = [[finish1], [finish2], [finish3]];
      break;

    case "/services/junk-removal":
      introTitle = "Junk Removal";
      description =
        "We can get rid of everything—inside and out—that's detracting from the value and beauty of your home. Be it trees, trash, debris, furniture or anything else you no longer want or need, we make it easy to get rid of your junk. Let's make your house feel like home again.";
      images = [
        [junk1B, junk1A],
        [junk2B, junk2A],
        [junk3B, junk3A],
        [junk4B, junk4A],
        [junk5B, junk5A],
      ];
      break;

    case "/services/tree-removal":
      introTitle = "Tree Removal";
      description =
        "Trees are the perfect addition to any home—when they're in the right condition and the right spot. If you have a tree that's posing a threat to your house (or a tree that you don't like), we'd be happy to trim it or remove it. We'll be sure to do it quicky and in the right way so your home stays safe and beautiful.";
      images = [[tree1], [tree2], [tree3]];
      break;

    default:
      images = null;
  }

  // ===== ===== DATA END ===== =====

  // ===== ===== 'COMPONENTS' BEG ===== =====

  const serviceIntro = (
    <div className="service_summary">
      <h3 className="service_summary-h3">
        {" "}
        {"MORE ABOUT " + introTitle.toUpperCase()}{" "}
      </h3>
      <p className="service_summary-p">{description}</p>
    </div>
  );

  // ===== ===== 'COMPONENTS' END ===== =====

  return (
    <div>
      <Intro
        primaryText={"Quality " + introTitle}
        secondaryText={secondaryText}
      />
      {serviceIntro}
      <Gallery images={images} />
      <GetQuote title="GET A QUOTE" />
      <Reviews background="#e3e3e3" />
      <Services title="Our other services" />
    </div>
  );
};

export default Service;
