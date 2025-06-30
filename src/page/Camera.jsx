import React, { useRef, useState, useEffect } from 'react';
import '../assets/css/Camera.css';
import IconCamera from '../assets/img/IconCamera.png';

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // ✅ Start kamera otomatis saat <video> sudah tersedia
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
        <select id="template-select" disabled>
          <option>Choose a template</option>
        </select>

        <div className="template-scroll">
          {/* Kosong dulu */}
        </div>
      </div>
    </div>
  );
}
    