import React from 'react';
import { useState } from "react";
import { Fragment } from "react";
import Work from '../pages/Work';
import About from "./About";
import Navigation from "./Navigation";
import Contact from "./pages/Contact"

export default function Header() {


    const [Page, setPage] = useState('About');

    const renderPage = () => {
        if (Page === 'About') {
            return <About />;
        }
        if (Page === 'Work') {
            return <Work />;
        }
        if (Page === 'Contact') {
            return <Contact />;
        }
    };


    const handlePage = (page) => setPage(page);


    return (
        <Fragment>
            <header className="header" id="inicio">
                <h1 class="page-title">PORTFOLIO</h1>
                <Navigation Pagina={Page} handlePage={handlePage} />
            </header>
            <body className="container">
                <div>{renderPage()}</div>
            </body>
        </Fragment>
    );
}

