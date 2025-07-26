import React from "react";
import "../../styles/Parque.css";

function Parque() {
  const imagenes = [
    {
      src: "/img/img1.png",
      texto:
        "Pantalla de selección de modo de juego que registra sesiones y mejora la experiencia con navegación, idioma y tiempo jugado.",
    },
    {
      src: "/img/img2.png",
      texto:
        "Formulario de entrada donde el usuario elige avatar y nombre, con sonidos y fondos dinámicos para una experiencia inmersiva.",
    },
    {
      src: "/img/img3.png",
      texto:
        "Escáner QR con detección de rutas y modo secreto, que traduce dinámicamente la interfaz y lanza confeti al detectar códigos válidos.",
    },
    {
      src: "/img/img4.png",
      texto:
        "Pantalla de mapa que saluda al usuario, muestra su avatar y permite descargar códigos QR para iniciar actividades prehistóricas.",
    },
    {
      src: "/img/img5.png",
      texto:
        "Actividad interactiva que reproduce audio, adapta contenido según idioma y marca como completada tras superar una actividad creada en Genially",
    },
    {
      src: "/img/img6a.png",
      texto:
        "Componente que muestra las medallas conseguidas en forma de tabla interactiva según las actividades completadas almacenadas en el navegador.",
    },
    {
      src: "/img/img6b.png",
      texto: "Internacionalización mediante i18n en inglés y español",
    },
    {
      src: "/img/img7.png",
      texto:
        "Pantalla final donde el usuario elige tipo de diploma, lo descarga personalizado con su nombre y puede reiniciar el juego o ver sus medallas.",
    },
  ];

  return (
    <div className="parque-info">
      <h1>Parque de la Prehistoria de Málaga</h1>
       <a
        href="https://engranajes-ciencia.github.io/04-WebApp-Prehistoria/"
        target="_blank"
        rel="noopener noreferrer"
        className="prehistoria-link"
      >Échale un vistazo aqui</a>
      

      {/* Tabla de tecnologías y dependencias */}
      <table className="resumen-tecnologias">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Paquete</th>
            <th>Función Principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Core</td>
            <td>react, react-dom</td>
            <td>Construcción de interfaz y renderizado</td>
          </tr>
          <tr>
            <td>Routing</td>
            <td>react-router-dom</td>
            <td>Navegación entre páginas</td>
          </tr>
          <tr>
            <td>i18n</td>
            <td>i18next, react-i18next</td>
            <td>Internacionalización multilenguaje</td>
          </tr>
          <tr>
            <td>UI / Estilos</td>
            <td>bootstrap</td>
            <td>Estilos base y diseño responsive</td>
          </tr>
          <tr>
            <td>Animación</td>
            <td>canvas-confetti</td>
            <td>Efecto visual festivo con partículas</td>
          </tr>
          <tr>
            <td>QR Scanner</td>
            <td>html5-qrcode</td>
            <td>Escaneo de códigos QR</td>
          </tr>
          <tr>
            <td>PDF</td>
            <td>jspdf</td>
            <td>Generación de diplomas en PDF</td>
          </tr>
          <tr>
            <td>Calidad</td>
            <td>eslint, plugins</td>
            <td>Control de estilo y errores del código</td>
          </tr>
          <tr>
            <td>Documentación</td>
            <td>esdoc</td>
            <td>Documentación automática del proyecto</td>
          </tr>
          <tr>
            <td>Deploy</td>
            <td>gh-pages</td>
            <td>Publicación del proyecto en GitHub Pages</td>
          </tr>
        </tbody>
      </table>

      <p>Proyecto de prácticas con la empresa Engranajes Ciencia.</p>
      <p>
        Aplicación web interactiva con React y Vite que permite a los visitantes
        explorar zonas del museo, acceder a juegos educativos y descubrir contenido
        sobre especies prehistóricas mediante códigos QR.
      </p>

      <div className="galeria">
        {imagenes.map((img, index) => (
          <div className="item" key={index}>
            <img src={img.src} alt={`img-${index}`} />
            <p>{img.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parque;