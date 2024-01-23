import React, { useState } from 'react';

const Lupa = ({ children }) => {
  const [isLupaActive, setIsLupaActive] = useState(false);
  const [zoom, setZoom] = useState(100);

  const toggleLupa = () => {
    setIsLupaActive(!isLupaActive);
  };

  const aumentarZoom = () => {
    setZoom(zoom + 10);
  };

  const disminuirZoom = () => {
    setZoom(zoom - 10);
  };

  return (
    <div>
      <button onClick={toggleLupa}>Lupa</button>
      {isLupaActive && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(255, 255, 255, 0.8)',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          <button onClick={aumentarZoom}>Aumentar Zoom</button>
          <button onClick={disminuirZoom}>Disminuir Zoom</button>
          <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left', width: '100%', height: '100%' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lupa;
