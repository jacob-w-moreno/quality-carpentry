import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import GalleryBox from "./GalleryBox";
import BeforeAndAfter from "../BeforeAndAfter";

const Gallery = (props) => {
  // ===== ===== DATA BEG ===== =====

  let [index, setIndex] = useState(0);

  // ===== ===== DATA END ===== =====
  // ===== ===== FUNCTIONS BEG ===== =====

  useEffect(() => {
    setIndex(0);
  }, [props.location.pathname]);

  // ===== ===== FUNCTIONS END ===== =====
  // ===== ===== 'COMPONENTS' BEG ===== =====

  let mainPicture = (
    <div className="service_main-picture">
      <img
        className="service_main-img"
        src={props.images[index]}
        alt="Gallery"
      />
    </div>
  );

  let galleryPreview = (
    <div className="gallery-preview">
      {props.images.map((element, i) => {
        return (
          <GalleryBox
            img={element[0]}
            alt="gallery"
            clicked={() => setIndex(i)}
            current={i === index}
            key={i + element}
          />
        );
      })}
    </div>
  );

  // ===== ===== 'COMPONENTS' END ===== =====

  return (
    <div className="gallery" style={{ background: "#e3e3e3" }}>
      <h3 className="service_summary-h3">
        {props.introTitle ? props.introTitle.toUpperCase() : null} GALLERY
      </h3>
      {props.images[index] && props.images[index].length === 1 && mainPicture}
      {props.images[index] && props.images[index].length === 2 && <BeforeAndAfter before={props.images[index][1]} after={props.images[index][0]} />}
      {galleryPreview}
    </div>
  );
};
export default withRouter(Gallery);
