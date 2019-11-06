import React, { useState } from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { connect } from 'react-redux';
import selectPage from '../../Actions';


const Slider = ({ page }) => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%201.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%202.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%203.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%204.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%205.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%206.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%207.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%208.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%209.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%2010.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%2011.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%2012.png?raw=true"
    },
    {
      src:
        "https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/catalogo/Mesa%20de%20trabajo%2013.png?raw=true"
    },
  ]
  
  
  return (
    <React.Fragment>
      
      <img className="grid" img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAqUlEQVRIS2NkoDFgpLH5DPS1wMTBw+H/f8b5DAwMCmT67AMj4//AMwd2HIDpR/GBsb3nAwYGBnkyDYdp+3D24HZBXBb8B0mcPbgdbrGxvSeGGEgNNnFsYug+GCYWUBgHKEGMNYhobsFoJCOHwMAkU5pHMs0tGE1F+FLRBwYGBn4K4+Dj2YPbBbAW19AKZwMFlnz8z/i/4NyBHQuwWkChy7Fqp2+dTAsfAABbMs0Z6rOWEwAAAABJRU5ErkJggg==" alt=""/>
      <img className="download" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA70lEQVRIS2NkoDFgpLH5DCPMAmN7z/+gID17cDvRPidaIcjgUQsIptgRHkS4vG/s4LmA4T9DPNbwY2RYePbA9gRkOXRz4MkUX/ga23tdYGD4r49qCePFswe3GaBbTJYFBg4BAsz/fz5gYGDghxr48S8ju8KFAxs+UMUCkCGmDl4G//7/Pw9iMzEyGp4+sO0CtmAjywcwg4wcPMDhfe7AjgW40jRFFhDMKFiKE6IimRiDYWrw+QAUYbBIJMVMbGofnj24XQEkAfeBiYOHw///jKCwlafQ9IeMjP8TzhzYcQDFAgoNxamdpPqAHEcMfQsAKb+DGfyVYOgAAAAASUVORK5CYII=" alt=""/>
      <img className="share" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABlklEQVRIS+2UT07CUBDGvwmJuMQbcAMbqlv72FE24gn0CNwAbyBHwBPYFbDz1a1CygmMN9AlxnbMQAttra9VQuLCl3Q38/3mz9ch7PnRnvXxNwG20w0A5pDq7UB7r6Yp/KoD23E5Fg3KILsChGOE7AigBcDHJkglwKnqWmEUnRORAtCMP4RUP6rxuzZBjICW6lwR0yARzC6TFjN/bFmq1zBBCgGW6jRrTHcArFj0BQSPwN4HDoO8c0yQLwAZR8R8D6AB0IIo6j/pqS77IXMQPfMnbcnJANZBy+eVOOE2RL1f5vMEHOdKYRYz/PnDRPaVBdjKHYFxKZXLfMuqLhKX3JAOVFLYpoN47lL9yh0SYCu3RxEcJvQKFu3N/MlFuvK8eKaDE9W9ZuaBjAaAB8ZNsXu2fa1tulyNpUg8A2iduZoIDgC5LY3EPUwY1kD6UY+DRDp9KkziGUB8wOSvlPfGxP25no6K9pACyBozM8/Hb3awTTIniMBPYlMAOcGy4K0DvnPRuttqsZVuUVW7FsX9A0qnt/cRfQKA0ekZk0O/FwAAAABJRU5ErkJggg==" alt=""/>
      <img className="search" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABdElEQVRIS9WVQVLCQBBFfwerXMoR8ASGolwz7ISVnkBvAN4kuQHegJVx5+BWU84NlBvgUktoa0ISJpiZgBqqzG4q6X6/u6d/CDU/VHN+WAG+OGsdLGnIBAHAT4UoYshPj0Ml7163EVcK6Ih+AMbQlYAYwdNDdF0F+QbodAcK4JMkkHDjgYJHeav08VQM/CV4BMZlVlE8jdpOIeZLQ/mbRySyxJsJEhCzBHAEQhjLaGSD5BXonjeYXvSHHlHbljxLlEKe9XlBfGybSQ7I1Vco2qh4nLTLEbMGpL3fRn1JFco2CwPQZx0YT6OddqPTdcftE7C6nj9s0SyeRq2ym7S/Idd+TXV5xqLNPaJexaLdA2huvWhZ/wpWARp7hLBgFYlH8ZXRb7Wgw56Sk7lzBhbLsNsMIQSTSH3LCnHadQM0MpJo2AyEyQIcaGvwxXmzwR/SBdlpqcrKqYL8GqChBQjhIpbRJBPzJ4AcgndhJl/9Ump+/j/gC2Wj7BkTEOL1AAAAAElFTkSuQmCC" alt=""/>
      <input className="rango" min="0" max="13" type="range"/>
      
    <div className="slider">
      <Gallery index={index} onRequestChange={i => {setIndex(i);page(i);}} >
        {images.map(img => (
          <GalleryImage objectFit="contain" key={img.src} src={img.src} />
        ))}
      </Gallery>
    </div>
    </React.Fragment>
  );
}

const matchDispatchToProps = (dispatch) => {  
    return {
        page: (index) => {dispatch(selectPage(index))}
    }
}

export default connect(null, matchDispatchToProps)(Slider);
