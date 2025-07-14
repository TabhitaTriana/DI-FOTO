import React from 'react';
import html2canvas from 'html2canvas';
import '../page/Camera';
import template1 from '../assets/img/photostrip2.png'
import template2 from '../assets/img/photostrip3.png'
import template3 from '../assets/img/photostrip4.png'
import { defaultIconPrefixCls } from "antd/es/config-provider";

const PhotostripTemplate = ({ photos }) => {
  const handleExport = () => {
    const node = document.getElementById("photostrip");
    html2canvas(node).then((canvas) => {
      const link = document.createElement("a");
      link.download = "photostrip.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div>
      <div
        id="photostrip"
        className="relative w-[300px] h-[900px]"
        style={{
          backgroundImage: `url(${template1})`,
          backgroundSize: 'cover',
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="absolute left-[50px]"
            style={{
              top: `${index * 290 + 60}px`, // Sesuaikan
              width: '200px',
              height: '250px',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>

      <button
        onClick={handleExport}
        className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded"
      >
        Download Photostrip
      </button>
    </div>
  );
};

export default PhotostripTemplate;
