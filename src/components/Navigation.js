import React from 'react';
import '../styles/Navbar.css';

export default function Navigation({ Page, handlePage }) {
    return (
        <div >
            <ul class="list-type">
                <li><a className={Page === "About" ? "nav-link active" : "nav-link"} href="/About" onClick={() => handlePage('About')}>About</a></li>
                <li><a className={Page === "Work" ? "nav-link active" : "nav-link"} href="/Work" onClick={() => handlePage('Work')}>Work</a></li>
                <li><a className={Page === "Contact" ? "nav-link active" : "nav-link"} href="/Contact" onClick={() => handlePage('Contact')}>Contact</a></li>
            </ul>
        </div>
     
    );
}


