import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../Context/PizzaContext";

const Navbar = () => {
  const { tokenLogin, setTokenLogin } = useContext(PizzaContext);
  const { totalCarro, setTotalCarro } = useContext(PizzaContext);
  const total = 25000;

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark '>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand text-white'>
          Pizzería Mamma Mia!
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/Home' className='nav-link text-white'>
                🍕 Home
              </Link>
            </li>
            { tokenLogin ? botonesTrue() : botonesFalse()}
          </ul>
          <span className='nav-item '>
            <Link to='/Cart' className='nav-link text-white'>
              🛒 Total: ${totalCarro.toLocaleString("es-cl")}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

const botonesTrue = () => {
  return (
    <>
      <li className='nav-item'>
        <Link to='/Profile' className='nav-link text-white'>
          🧰 Profile
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/Logout' className='nav-link text-white'>
          🚪 Logout
        </Link>
      </li>
    </>
  );
};

const botonesFalse = () => {
  return (
    <>
      <li className='nav-item'>
        <Link to='/Login' className='nav-link text-white'>
          🔐 Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/Register' className='nav-link text-white'>
          🔐 Register
        </Link>
      </li>
    </>
  );
};
