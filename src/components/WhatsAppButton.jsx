import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Lógica para abrir WhatsApp
    window.open('https://wa.me/5491140717034');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <i className="fab fa-whatsapp"></i> WhatsApp
    </button>
  );
};

export default WhatsAppButton;
