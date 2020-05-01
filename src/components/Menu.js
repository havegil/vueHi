import React from 'react';
import {Link} from 'react-router-dom';


class Menu extends React.Component {

    pageRequest = (e) => {
        e.preventDefault();
        this.props.onStateUpdate(e.target.id);
    }
    
    render = () => {
        return (

            <div className="global-nav-wrapper">
                <div className="global-nav">
                    <div id="main-menu" className="main_menu">
                        <div id="vh-logo" className="vh_logo"><Link id="vueLogo" to="/"><img src="images/logo.png" alt="Vue Health logo"/></Link></div>
                        <ul id="menu-nav">
                            <li><Link id="home" to="/">Home</Link></li>
                            <li><Link id="about_us" to="about-us">About us</Link></li>
                            <li><Link id="what_we_do" to="what-we-do">What we do</Link></li>
                            <li><Link id="meet_us" to="meet-us">Meet us</Link></li>
                            <li><Link id="join_us" to="join-us">Careers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Menu;
			