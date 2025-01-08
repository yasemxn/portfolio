import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/public_images/home.png`}
        alt="Cloud Infrastructure"
        style={{
          width: "100%", // Görsel genişliği tam ekran yapar
          height: "auto", // Oranları korur
          maxWidth: "1000px", // Maksimum genişlik sınırı
          display: "block", // Görseli blok olarak gösterir
          margin: "0 auto", // Ortalamak için
        }}
      />
    );
  }
}
