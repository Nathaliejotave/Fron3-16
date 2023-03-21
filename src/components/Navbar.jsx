import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { routes } from '../routes'

const Navbar = () => {

  const navigate= useNavigate()
  
  return (
    <div className = "navbar">
        <button onClick={() => navigate(-1)}>🔙</button>
          <Link to={routes.home}><h3>Home</h3></Link>
          <Link to={routes.contact}><h3>Contacto</h3></Link>
          <Link to={routes.beer}><h3>Beer</h3></Link>
    </div>
  
  );
}

export default Navbar