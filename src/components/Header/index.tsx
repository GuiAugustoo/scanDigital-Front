import { Navbar } from "./styles";
import logo from '../../assets/aoop-squad-digital.svg';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Navbar>
            <div className="topnav" id="myTopnav">
                <Link to="/">
                    <img src={logo} className="img" alt="Squad Digital">
                    </img>
                </Link>
                <div className="dropdown">
                    <button className="dropbtn">Regras
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/regras">Regras</Link>
                        <Link to="/preferencias">Preferências e instância</Link>
                    </div>
                </div>
                <Link to="/scan">Scan</Link>
                <Link to="/empresa">Empresa</Link>
                <Link to="/categorias">Categorias</Link>
            </div>
        </Navbar>
    )
}