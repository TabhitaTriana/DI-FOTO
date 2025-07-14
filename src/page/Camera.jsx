import React, { useRef, useState, useEffect } from 'react';
import '../assets/css/Camera.css';
import '../page/PhotostripTemp';
import IconCamera from '../assets/img/IconCamera.png';
import template1 from '../assets/img/photostrip2.png'
import template2 from '../assets/img/photostrip3.png'
import template3 from '../assets/img/photostrip4.png'

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

 
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    startCamera();
  }, []);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!canvas || !video) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);

    const imageData = canvas.toDataURL('image/png');
    setCapturedImage(imageData);
  };

  const [selectedTemplate, setSelectedTemplate] = useState("template1");


const templates = import.meta.glob('../assets/img/*.png', {
  eager: true,
  import: 'default',
});

const selectedTemplateSrc = templates[`../assets/img/${selectedTemplate}.png`];

console.log("Selected:", selectedTemplate);
console.log("Template src:", selectedTemplateSrc);

  return (
    <div className="cam-wrapper">
      {/* Kiri: Kamera dan Tombol */}
      <div className="cam-left">
        <div className="cam-preview-box">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="video-feed"
          />
        </div>

        <button onClick={capturePhoto} className="camera-btn">
          Capture Photo
        </button>

        <canvas ref={canvasRef} style={{ display: 'none' }} />

        {capturedImage && (
          <div className="captured-img-preview">
            <h3>Captured Image</h3>
            <img src={capturedImage} alt="Captured" />
          </div>
        )}
      </div>

      {/* Kanan: Placeholder Template */}
      <div className="cam-right">
        <h2>Your Photostrips</h2>
        <label htmlFor="template-select">Template Layout</label>

        <select id="template-select" value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
          <option value="template1">Strip 1</option>
          <option value="template2">Strip 2</option>
          <option value="template3">Strip 3</option>
        </select>


        <div className="template-scroll">
            {selectedTemplateSrc ? (
                <img src={selectedTemplateSrc} alt="Template Terpilih" style={{ width: '100%' }} />
              ) : (
                <p>No template selected</p>
              )}
        </div>
      </div>
    </div>
  );
}
    