import React from 'react'
import {
    HashRouter,
    Route,
} from 'react-router-dom'
import Home from '../pages/homePage/home';
import Courier from '../pages/courierPage/courier';
import Service from '../pages/servicePage/service';
import ContactForm from '../pages/contactFom/contactForm';
import Header from '../pages/header/header';


const RouterForms = () => (
    <HashRouter>
        <div>
            <Header> </Header>
            <Route path="/home" component={Home} />
            <Route path="/courier" component={Courier} />
            <Route path="/services" component={Service} />
            <Route path="/contact" component={ContactForm} />
            <footer className="footer">
                    <div className="footer-content">Q-Medistore BV 
                    <br/>
                    Postbus 54 3950 AB Maarn</div>
            </footer>
        </div>
    </HashRouter>
)
export default RouterForms