import React, { Component } from "react";

export default class ProjectsImg extends Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/public_images/projects.png`}
        alt="Experience"
        style={{
          width: "100%", // Görselin tam genişliğini ayarlar
          height: "auto", // Oranları korur
          maxWidth: "1000px", // Maksimum genişlik sınırı
          display: "block", // Görseli blok olarak gösterir
          margin: "0 auto", // Görseli ortalamak için
        }}
      />
    );
  }
}
