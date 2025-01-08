import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/public_images/DataScience.png`}
        alt="Data Science"
        style={{
          width: "100%", // Görselin genişliğini tamamen doldurur
          height: "auto", // Görselin oranlarını korur
          maxWidth: "1000px", // Maksimum genişliği ayarlayın
          display: "block", // Ortalamak için
          margin: "0 auto", // Görseli ortalar
        }}
      />
    );
  }
}
