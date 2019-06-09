import React from 'react';
import { Col, Row, Fade, Container } from 'reactstrap';
import { Gallery } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';

import './overlay.scss';

export default function OverLay() {

    function renderBenefits(benefit: string, index: number) {
        return (
            <div className="item" key={index}>
                <FontAwesomeIcon icon={faCircle} style={{marginRight: '6px'}} />
                <div>
                    <label>{benefit}</label>
                </div>
            </div>
        )
    }

    return (
        <Container className="content-overlay">
        <Row style={{margin: 0}}>
            <Col md="5" style={{alignSelf:'center'}}>
                <div className="header-text">
                    <div className="header-heading">
                        <h1>PetHealth</h1>
                        <div className="text-content">
                            <h3 className="title">Beneficios</h3>
                            <div className="list">
                                {
                                    benefits.map(renderBenefits)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="header-btns">
                        <p>Descargalo en</p>
                        <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faAndroid} className="fa-icon" />
                        </a>
                        <a href="https://github.com/LuisGH1234/pethealth" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                        </a>
                    </div>
                </div>
            </Col>
            <Col md="7" style={{alignSelf:'center'}}>
                <div className="header-images">
                    <Fade in tag="div" timeout={200}>
                        <Gallery>
                            <img src={`${process.env.PUBLIC_URL}/images/image2.png`} alt="error" />
                            <img src={`${process.env.PUBLIC_URL}/images/image3.png`} alt="error" />
                            <img src={`${process.env.PUBLIC_URL}/images/image4.png`} alt="error" />
                            <img src={`${process.env.PUBLIC_URL}/images/image5.png`} alt="error" />
                            <img src={`${process.env.PUBLIC_URL}/images/image6.png`} alt="error" />
                            <img src={`${process.env.PUBLIC_URL}/images/image7.png`} alt="error" />
                        </Gallery>
                    </Fade>
                </div>
            </Col>
        </Row>
        </Container>
    );
}

const benefits = [
    "Recordatorios de las citas de tus mascotas",
    "Comunicación con tu veterinario",
    "Control clinico de tu mascota",
    "Localización de veterinarias cercanas a ti",
    "Noticias para los amantes de animales",
    "Apoyo a los dueños de animales perdidos"
];