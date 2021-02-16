import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function NavBarMenu() {
    return <>
        <div className="collapse navbar-collapse" id="navBarMenu">
            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                <li className="nav-item col-4 col-md-auto">
                    <a className="nav-link p-2" href="https://github.com/ulloama" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </li>
                <li className="nav-item col-4 col-md-auto">
                    <a className="nav-link p-2" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=marianoaulloa@gmail.com" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </li>
                <li className="nav-item col-4 col-md-auto">
                    <a className="nav-link p-2" href="https://www.linkedin.com/in/ulloa-mariano/" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                </li>
            </ul>
        </div>
    </>
};

export default NavBarMenu;