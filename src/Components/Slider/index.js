import React, { useState } from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";
const Slider = () => {
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
      <input className="rango" min="0" max="13" type="range"/>
    <div className="slider">
      <Gallery index={index} onRequestChange={i => {setIndex(i); }} >
        {images.map(img => (
          <GalleryImage objectFit="contain" key={img.src} src={img.src} />
        ))}
      </Gallery>
    </div>
    </React.Fragment>
  );
}
export default Slider;