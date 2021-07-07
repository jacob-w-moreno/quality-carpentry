import React, { useState, useRef } from "react";

const BeforeAndAfter = (props) => {
  // ===== ===== DATA BEG ===== =====
  const [imageReveal, setImageReveal] = useState(50);
  const imageContainer = useRef(undefined);
  // ===== ===== DATA END ===== =====
  // ===== ===== FUNCTIONS BEG ===== =====
  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    setImageReveal(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 100;
      } else {
        return (
          ((xPosition - containerBoundingRect.left) /
            containerBoundingRect.width) *
          100
        );
      }
    });
  };

  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event) => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };
  // ===== ===== FUNCTIONS END ===== =====
  // ===== ===== 'COMPONENTS' BEG ===== =====

  // ===== ===== 'COMPONENTS' END ===== =====

  return (
    <div className="ba">
      <div ref={imageContainer} className="ba_image_container">
        <img
          draggable={false}
          src={props.before}
          alt="alt"
          className="ba_image"
        />
        <img
          draggable={false}
          style={{
            clipPath: `polygon(0 0, ${imageReveal}% 0, ${imageReveal}% 100%, 0 100%)`,
          }}
          src={props.after}
          alt="alt"
          className="ba_image"
        />
        <div className="ba_slider" style={{ left: `${imageReveal}%` }}>
          <div className="ba_slider_inner">
            <div className="ba_slider_line"></div>
            <div
              style={{ touchAction: "none" }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="ba_slider_circle"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;
