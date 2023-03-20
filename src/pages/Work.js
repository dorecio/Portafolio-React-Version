import React from 'react';

export default function Work() {
  
    return (
        <section id="work">
            <h3>Work</h3>
            <div class="row justify-center">
                <figure class="column">
                {
                    projects.map((project) => (
                        <div className="col">
                            <div className="card h-100">
                                <div class="card-header bg-transparent border-info">
                                    <a className="card-title" href={project.link} target="_blank" rel="noreferrer">
                                        {project.nombre}
                                    </a>
                                </div>


                                <img src={project.imagen} className="card-img-top h-100" alt={project.nombre} />
                                <div class="card-footer bg-transparent border-info">
                                    <a className="card-text" href={project.git} target="_blank" rel="noreferrer">
                                        <i className="bi bi-github" style={{ fontSize: "2rem", color: "white" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    </figure>
            </div>
        </section>
    );

}
