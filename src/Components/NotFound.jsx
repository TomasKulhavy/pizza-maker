import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link className="btn btn-danger" to="/">
      Go Home!
    </Link>
  </div>
);

export default NotFound;