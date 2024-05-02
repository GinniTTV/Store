// Nosotros.jsx
import React from 'react';
import './Nosotros.scss';

const Nosotros = () => {
  return (
    <div className="nosotros">
      <div className="nosotros-header">
        <h1 className="title">Quiénes Somos</h1>
        <p className="subtitle">¡Bienvenidos a Juguetería Cósmica!</p>
      </div>
      <div className="nosotros-content">
        <p className="text">
          Somos una tienda especializada en juguetes mágicos y divertidos para niños de todas las edades. En Juguetería Cósmica, creemos en la importancia del juego para el desarrollo y la diversión de los pequeños exploradores del universo.
        </p>
        <p className="text">
          Nuestro objetivo es ofrecer una amplia variedad de juguetes creativos, educativos y emocionantes que estimulen la imaginación y fomenten el aprendizaje mientras los niños se divierten explorando el cosmos de la diversión.
        </p>
        <p className="text">
          ¡Únete a nosotros en esta aventura intergaláctica llena de risas, descubrimientos y juegos emocionantes para todos!
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
