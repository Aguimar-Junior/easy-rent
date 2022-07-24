import{Link} from 'react-router-dom';
import logo from '../../img/logo.png';
import './header.css';


function Header() {
  return (
    <div className='container__header'>
        <img src={logo} className='logo__header' alt='logo'/>
        <Link className='link__header' to={'/'}>Home</Link>
        <Link className='link__header' to={'/models'}>Modelos</Link>
    </div>
  );
}

export default Header;