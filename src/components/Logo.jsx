import React from 'react';

function Logo() {
  return (

      <img src="img/portfolio/logo.png" alt="Logo" style={logoStyle} className='App-logo' />

  );
}

export default Logo;

const logoStyle = {
  display: 'flex',
  flexDirection: 'center',
  marginRight: '10px',
  marginLeft: '70px',
  marginTop: '5px',
  padding: '10px',
  width: '500hv', // Ajusta el tamaño según sea necesario
  height: '100hv', // Ajusta el tamaño según sea necesario
  borderRadius: '15%', // Para darle forma ovalada
  boderWidth: '3px',
  overflow: 'hidden', // Para recortar la imagen ovalada
};