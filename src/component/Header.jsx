import { Link } from 'react-router-dom';
import '../assets/css/Header.css'
import logo from '../assets/img/LogoDifoto.png';

export default function Header(){
return(
    <>

    <header className='header'>
        <div className='logo'>
            <img src={logo} alt="Logo DIFOTO" />
        </div>
        <nav className='nav-links'>
              <Link to="/Home">home</Link>
              <Link to="/About">about</Link>
              <Link to="/">contact</Link>
        </nav>
    </header>
    </>
);
}