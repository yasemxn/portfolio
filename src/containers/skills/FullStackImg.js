import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/public_images/softwaredeveloper.png`}
        alt="Custom Illustration"
        style={{
          width: "80%", // Genişliği artırmak için
          height: "auto", // Oranları korur
          maxWidth: "1200px", // Daha büyük maksimum genişlik
          display: "block", // Ortalamak için
          margin: "0 auto", // Görseli ortalar
        }}
      />
    );
  }
}
