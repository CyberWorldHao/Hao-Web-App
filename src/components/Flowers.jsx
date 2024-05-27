import "./flowersStyle.css";
import React from "react";

function Flowers({ flowerPositionRight, flowerPositionTop, flowerType }) {
  return (
    <div
      className="flowers"
      style={{ right: flowerPositionRight, top: flowerPositionTop }}
    >
      <i className={flowerType}>
        <i className={flowerType}>
          <i className={flowerType}>
            <i className={flowerType}>
              <i className={flowerType}>
                <i className={flowerType}></i>
              </i>
            </i>
          </i>
        </i>
      </i>
    </div>
  );
}

export default Flowers;
