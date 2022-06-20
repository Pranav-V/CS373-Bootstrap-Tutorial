
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <p className="navbar-brand">CS373: Bootstrap Tutorial</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <b className="nav-link" to="/">Home</b>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="">Ex1</a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="">Ex2</a>
                </li> 
                <li className="nav-item">
                    <a className="nav-link" to="">Ex3</a>
                </li>   
                </ul>
            </div>  
        </nav>
    )
}

export default NavBar