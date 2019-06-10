import React, { Component } from 'react';
import { Button, Input, Alert, Container, Row, Col, Collapse } from 'reactstrap';
import './quienes-somos.scss';

interface IState {
    showMessage: boolean;
    collapse: boolean;
}

class QuienesSomos extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showMessage: false,
            collapse: false ,
        }
        this.toggle = this.toggle.bind(this);
    }

    renderSentences(sentence: string, index: number) {
        return (<p key={index}>{sentence}</p>);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
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
                            onClick={this.toggle}>
                            Enviar
                        </Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Alert color="success">
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
                            <div className="image">
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/MauricioRivas.jpg`} alt="error" id="mauricio-rivas" />
                            </div><br></br>
                            <div>
                                <label className="names">Mauricio Rivas</label>
                            </div>
                          </Col>
                          <Col>
                            <div className="image">
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Luis Galindo</label>
                            </div>
                          </Col>
                          <Col>
                            <div className="image">
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Sarita Rojas</label>
                            </div>
                          </Col>
                          <Col>
                            <div className="image">
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/OmarTronco.jpeg`} alt="error" id="omar-tronco" />
                            </div><br></br>
                            <div>
                                <label className="names">Omar Troncos</label>
                            </div>
                          </Col>
                          <Col>
                            <div className="image">
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