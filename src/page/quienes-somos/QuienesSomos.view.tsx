import React, { Component } from 'react';
import { Button, Input, Alert, Container, Row, Col, Collapse } from 'reactstrap';
import './quienes-somos.scss';

interface IState {
    showMessage: boolean;
}

class QuienesSomos extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showMessage: false,
        }
    }

    renderSentences(sentence: string, index: number) {
        return (<p key={index}>{sentence}</p>);
    }

    render() {
        const { showMessage } = this.state;
        return (
            <div className="quienes-somos-content" id="aboutus">
                <div className="content row-1">
                    <h1 className="main-title">QUIENES SOMOS</h1>
                    <div className="who-we-are m-border">
                        {
                            textQuienesSomos.map(this.renderSentences)
                        }
                    </div>
                </div>
                <div className="content row-2">
                    <h1 className="main-title">¿QUIERES SABER MAS SOBRE NUESTRA APP?</h1>
                    <div className="registration m-border">
                        <Input placeholder="Nombre" id="input-name" />
                        <Input placeholder="Correo electronico" id ="input-email" />
                        <Button id="btn-registration" color="primary" 
                            onClick={() => this.setState(prev => ({ showMessage: !prev.showMessage }))}>
                            Enviar
                        </Button>
                        <Collapse isOpen={false}>
                            <Alert color="success" id="message-box" 
                                className={`${showMessage ? 'show-me' : ''}`}>
                                ¡Gracias por seguirnos!
                            </Alert>
                        </Collapse>
                    </div>
                </div>
                <div className="content row-3">
                    <h1 className="main-title">Integrantes</h1>
                    <Container className="container-images">
                        <Row>
                         <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Mauricio Rivas</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Luis Galindo</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Sarita Rojas</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Omar Troncos</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Kristel Collazos</label>
                            </div>
                          </Col>
                         </Row>
                    </Container>                   
                </div>
            </div>
        );
    }
}

export default QuienesSomos;

const textQuienesSomos = [
    'Nosotros somos una organización que busca ayudar a las clínicas veterinarias y a los dueños de mascotas que están en apuros.',
    '¿Cansado de no poder agendar una cita de manera rápida y sencilla a través de tu celular?',
    'Con nuestra herramienta, las veterinarias podrán gestionar sus agendas de manera eficiente y los dueños de mascotas, agendar una cita con el doctor de su preferencia.',
    '¡Además, te damos consejos de salud animal y guardamos un registro de las citas de tu mascota!',
    'Descarga nuestra aplicación y descubre todo lo que tenemos para ti.',
];