import React from 'react';
import axios from 'axios';
import '../style/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(props.user);

    const handleLogout = () => {
        axios.get('/api/users/logout').then((response) => {
            console.log('Successfully logged out');
        });
        navigate('/');
        window.location.reload();
    }


    return (
        <nav className="navbar" style={{ position: 'sticky' }}>
            <div className="brand-title">
                <form className="form-inline" autocomplete="off">
                    <input name="user" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <div className="autocomplete-items">
                        {/* <div>
                            hello
                            <input type='hidden' className="autocomplete-active" value='hello' />
                        </div> */}
                    </div>
                </form>
            </div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul className="nav-area">
                    <li className="navbar-list"><a className="cool-link">Projects</a></li>
                    <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/home')}>Home</a></li>
                    <div className="dropdown ">
                        <li className="navbar-list">
                            <img width="50" height="50" style={{ borderRadius: '50%' }} src='/api/users/profilePicture/' id="Avatar" />
                        </li>
                        <div className="dropdown-content">
                            <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/profile')}>Profile</a></li>
                            <li className="navbar-list"><a className="cool-link" onClick={handleLogout}>Logout</a></li>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;