import { Link } from "react-router-dom"

function NavbarComp() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/'}>router dom</Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {/* <a className="nav-item nav-link active" href="#">
        Home <span className="sr-only">(current)</span> */}
        <Link to={"/"} style={{margin:"20px"}}>Home</Link>
        <Link to={"/contact"} style={{margin:"20px"}}>contact</Link>
      
    </div>
  </div>
</nav>

    )
}

export default NavbarComp
