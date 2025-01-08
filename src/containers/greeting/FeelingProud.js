import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/public_images/trends.png`}
        alt="Feeling Proud"
        style={{
          width: "100%", // Görüntünün genişliğini tam yapmak için
          height: "auto", // Oranları korumak için
          maxWidth: "1200px", // Görüntünün maksimum genişliği
          display: "block", // Ortalamak için
          margin: "0 auto", // Görüntüyü ortaya hizalar
        }}
      />
    );
  }
}

export default FeelingProud;
