import React, { Component } from 'react';
import logo from "../../images/q-medi-logo.png"
import "./courier.scss";

class Courier extends Component {

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="upperDiv">
                        <img src={logo} className="logo" alt="" />
                    </div>
                    <div className="lowerDivCourier">
                        <h1>Q-Couriers</h1>
                        <p>
                            Even snel een pakje wegbrengen: dat kunnen alle koeriersbedrijven wel.
                                Maar Q-Couriers gaat verder.
                        </p>
                        <p>
                            Of het nu om een zending gaat die met spoed opgehaald of geleverd
                            moet worden of om een zending met een langere aanlevertijd, wij
                            verzorgen deze altijd netjes en snel. Hiervoor hebben wij een keurig
                            (eigen schoon en rookvrij) wagenpark tot onze beschikking. Al onze diensten
                            worden centraal gecoördineerd vanuit Maarsbergen.
                            Wij werken met vaste representatieve chauffeurs die betrouwbaar en loyaal aan de opdrachtgevers zijn!
                        </p>
                        <p>
                            Q-Couriers heeft zich gespecialiseerd in het transporteren van medische
                            instrumenten en implantaten van A naar B, maar ook het reguliere koeriers
                            werk kunnen wij voor u verzorgen.
                        </p>
                        <p>
                            Uw zending wordt door ons op de voet gevolgd. We werken met een modern volgsysteem en we houden voortdurend contact met de chauffeurs.
                            Op die manier kunnen we sneller schakelen en uw opdracht wordt mestal door één persoon afgehandeld.
                            Wij dragen onze zendingen nooit over aan derden.
                        </p>
                    
                        <h1>Zelfde dag levering</h1>
                        <p>
                            Uw zending wordt binnen één werkdag opgehaald en afgeleverd bij u of uw klant.
                            - Bezorging in heel Nederland (België en Duitsland prijs op aanvraag)
                            - Wij berekenen alleen de daadwerkelijke gereden kilometers (enkel)
                            - Afwijkend aflevertijdstip mogelijk
                            - Tarief tot 40 kg, daarna toeslag ≥ 4 = € 2,50 per kist
                            - Grotere afmetingen en gewichten op aanvraag
                            - Toeslag zon- en feestdagen 75%
                        </p>
                        <p>
                            Laden / lossen langer dan 15 min: 1e kwartier € 10,00, daarna € 7,50 per kwartier met een maximum van € 27,50 per uur.
                        </p>
                        <p>
                            Voor prijzen / offerte kunt u contact met ons opnemen.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Courier