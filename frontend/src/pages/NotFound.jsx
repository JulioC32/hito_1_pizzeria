import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/404.jpg";

const NotFound = () => {
  return (
    <main className="container text-center mt-5">
      <img
        src={notFoundImage}
        alt="Página no encontrada"
        className="img-fluid w-50"
      />

      <h4 className="text-muted">
        La dirección que buscas no existe 😔
      </h4>

      <Link to="/" className="btn btn-success text-center mt-3">
        Volver al inicio
      </Link>
    </main>
  );
};

export default NotFound;
