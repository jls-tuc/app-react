import React from 'react'
import { Link } from 'react-router-dom';


const MainMenu = () => {

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to='/phones'>Consumos</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Configuración
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to='/phones/companies'>Empresas</Link></li>
                  <li><Link className="dropdown-item" to='/phones/company-create'>Cargar empresa</Link></li>
                 {/*  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to='#'>Something else here</Link></li> */}
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
};

export default MainMenu;