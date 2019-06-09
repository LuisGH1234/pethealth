import React from 'react';
import { Col, Row, Fade, Container } from 'reactstrap';
import { Gallery } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';

import './overlay.scss';

export default function OverLay() {
    return (
        <Container className="content-overlay">
        <Row>
            <Col md="5" style={{alignSelf:'center'}}>
                <div className="header-text">
                    <div className="header-heading">
                        <h1>PetHealth</h1>
                        <h4>The mobile platform app that helps you to share journal with teams safely.</h4>
                    </div>
                    <div className="header-btns">
                        <p>Descargalo en</p>
                        <a href="https://developer.android.com/studio" target="_blank">
                            <FontAwesomeIcon icon={faAndroid} className="fa-icon" />
                        </a>
                        <a href="https://github.com/LuisGH1234/peth-health" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                        </a>
                    </div>
                </div>
            </Col>
            <Col md="7" style={{alignSelf:'center'}}>
                <div className="header-images">
                    <Fade in tag="div" timeout={200}>
                        <Gallery>
                            <img src={`${process.env.PUBLIC_URL}/images/image2.jpeg`} />
                            <img src={`${process.env.PUBLIC_URL}/images/image3.jpeg`} />
                        </Gallery>
                    </Fade>
                </div>
            </Col>
        </Row>
        </Container>
    );
}