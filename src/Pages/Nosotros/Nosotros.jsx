import React from 'react';
import './Nosotros.scss';

const Nosotros = () => {
  return (
    <div>
      <main className="main-container">
        <div className="nosotros-container">
          <div className="d-center">
            <h2>¡Bienvenidos a Toyland!</h2>
            <h3>Donde los sueños se vuelven realidad</h3>
          </div>
          <img src="/assets/Icons/Peluches.colours.png" alt="Banner" className="banner-img" />
          <div className="section-container align-center">
            <p>
              En Toyland, creemos en la magia de la infancia. Nuestro objetivo es crear un mundo lleno de alegría, diversión y aprendizaje para niños y niñas de todas las edades. Cada juguete que ofrecemos está diseñado con amor y cuidado para inspirar la imaginación y fomentar el juego creativo.
            </p>
          </div>
          <div className="section-container align-center">
            <p>
              Nos apasiona brindar experiencias únicas a nuestros clientes. Desde juguetes clásicos hasta las últimas novedades, nuestra colección es una celebración de la diversidad y la innovación en el mundo del juego. Estamos comprometidos a proporcionar la mejor calidad y el mejor servicio, para que cada experiencia con Toyland sea inolvidable.
            </p>
          </div>
          <img src="/assets/Icons/Estantería.png" alt="Estantería" className="estanteria-img" />
          <div className="thanks-message">
            <h4>¡Gracias por visitarnos!</h4>
            <p>Esperamos que tu experiencia en Toyland sea llena de diversión y alegría. ¡Te esperamos pronto!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nosotros;

