import Spinner from 'react-bootstrap/Spinner';
import React from "react";

function Loader(size) {
  return (
    <Spinner animation="border" role="status" size={size}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;