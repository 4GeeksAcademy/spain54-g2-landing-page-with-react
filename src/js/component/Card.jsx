import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = ({ valores = [{
    titulo: "Card title",
    imagen: "rigo-baby.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: "Find out more!"
}] }) => {

    return (
        <div className="col d-flex flex-row justify-content-center mt-2">
            {valores.map((item) => (
                <div className="card" style={{ width: '18rem' }}>
                    <img src={item.imagen} className="card-img-top" alt="..." />
                    <div className="card-body border bt-1">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer text-center">
                        <a href="#" className="btn btn-primary">{item.button}</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

