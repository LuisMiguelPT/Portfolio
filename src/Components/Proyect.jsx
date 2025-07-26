import React from "react";
import '../styles/Project.css';
import { Link } from 'react-router-dom';
import parque from '../assets/parque.jpeg';
import webnotes from '../assets/webnotes.png';

function Project() {
  return (
    <div className="projects" id="project">
      <h1 style={{marginTop:'120px'}}>
        Aquí puedes encontrar todos mis proyectos hasta ahora.
        Además podrás ver un 'Paso a Paso' de como funcionan
      </h1>

      <div
        className="parque"
        style={{
          backgroundImage: `url(${parque})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          padding: '20px',
        }}
      >
        <Link to="/projects/parque">
          <button className="parque-btn">Parque de la Prehistoria</button>
        </Link>
      </div>

      <div className="webnotes"
      style={{
          backgroundImage: `url(${webnotes})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          padding: '20px',
        }}
      >
        <Link to="/Projects/webnotes">
          <button className="webnotes-btn">WebNotes</button>
        </Link>
      </div>
    </div>
  );
}

export default Project;