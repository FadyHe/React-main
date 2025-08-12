import Vlogo from "./assets/Vlogo.png"

function NavBar() {
  return (
    <>
      <nav>
        <div className="brand">
          <img src={Vlogo} alt="" className="logo" />
          <h1 className="logo-text">Veloura</h1>
        </div>


        <div className="nav-links">
          <button>Home</button>
          <button>Products</button>
          <button>About</button>
          <button className="login-button">Login</button>
        </div>


      </nav>
    </>
  );
}

export default NavBar