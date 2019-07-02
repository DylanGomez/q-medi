import React, { Component } from 'react';
import logo from "../../images/q-medi-logo.png"
import { Form, Button, Spinner } from 'react-bootstrap';
import IntlTelInput from 'react-intl-tel-input';
import './contactForm.scss';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {

    constructor() {
        super();
        this.state = {
            buttonPressed: false,
            companyName: "",
            initials: "",
            lastName: "",
            address: "",
            postcode: "",
            place: "",
            country: "",
            email: "",
            phoneNumber: "",

        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    onChange(value) {
        this.setState({
            phoneNumber: value
        });
    }

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="upperDiv">
                        <img src={logo} className="logo" alt="" />
                    </div>
                    <div className="lowerDiv">
                        <div className="formArea">
                            <div className="formAreaRight">
                                <span className="whoText">Contact formulier</span>
                                <br />

                                <Form.Control className="formField" name="companyName" size="lg" type="text" placeholder="Bedrijf/Naam" onChange={this.changeHandler} required/>

                                <Form.Control className="formField" name="initials" size="lg" type="text" placeholder="Voorletters" onChange={this.changeHandler} required/>

                                <Form.Control className="formField" name="lastName" size="lg" type="text" placeholder="Achternaam" onChange={this.changeHandler} required/>

                                <Form.Control className="formField" name="address" size="lg" type="text" placeholder="Adres" onChange={this.changeHandler} required/>

                                <Form.Control className="formField" name="postcode" size="lg" type="text" placeholder="Postcode" onChange={this.changeHandler} required/>

                                <Form.Control className="formField" name="place" size="lg" type="text" placeholder="Woonplaats" onChange={this.changeHandler} required/>

                                <Form.Control className="formField" name="country" size="lg" type="text" placeholder="Land" onChange={this.changeHandler} required/>

                                <Form.Control className="formField" name="email" size="lg" type="text" placeholder="E-mail" onChange={this.changeHandler} required/>

                                <IntlTelInput
                                    className="telephoneInput"
                                    name="phoneNumber"
                                    onPhoneNumberChange={(status, value, countryData, number, id) => {
                                        this.onChange(number);
                                    }}
                                    preferredCountries={['nl']}
                                    onlyCountries={['nl', 'be']}
                                />

                                <Form.Control className="area" as="textarea" name="comments" placeholder="Vragen of opmerkingen" rows="3" />

                                {!this.state.buttonPressed &&
                                    <Button variant="success" size="lg" onClick={this.mailService}>Verstuur</Button>
                                }
                                {this.state.buttonPressed &&
                                    <Button variant="success" size="lg" disabled>
                                        <Spinner animation="border" />
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm