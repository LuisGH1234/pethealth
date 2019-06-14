import React, { Component } from 'react';
import { Button, Input, Alert, Container, Row, Col, Collapse } from 'reactstrap';
import moment from 'moment';
import { toast } from 'react-toastify';
import './quienes-somos.scss';

interface IState {
    showMessage: boolean;
    collapse: boolean;

    name: string;
    email: string;
}

class QuienesSomos extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showMessage: false,
            collapse: false,
            name: '',
            email: '',
        }
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRegistration = this.onRegistration.bind(this);
    }

    renderSentences(sentence: string, index: number) {
        return (<p key={index}>{sentence}</p>);
    }

    toggle(message?: string) {
        // this.setState(state => ({ collapse: !state.collapse }));
        if (message) toast.error("Debe ingresar un email");
        else toast.success("¡Gracias por seguirnos!");
        this.setState({ name: '', email: '' });
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        } as Pick<IState, keyof unknown>);
    }

    async onRegistration() {
        // if (this.state.collapse === true) return this.toggle();
        try {
            const { name, email } = this.state;
            if (email === '' || !email) {
                this.toggle("Debe ingresar un email");
                return;
            }
            const res = await fetch(url, { 
                method: "POST", 
                body: JSON.stringify({ 
                    name: name.trim(), 
                    email: email.trim(),
                    date: moment().format("YYYY-MM-DD HH:mm:ss"),
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            // console.log(res, this.state.collapse);
            if (res.status === 404 || res.status === 500) {
                console.warn(`Bad status: ${res.status}`, res);
            }
            console.assert(res.status === 200, "Good registration");
            this.toggle();
        } catch (error) {
            console.error("Error trying to resgistrate")
        }
    }

    render() {
        const { showMessage, name, email } = this.state;

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
                        <Input name="name" placeholder="Nombre" id="input-name" value={name} onChange={this.onChange}/>
                        <Input name="email" placeholder="Correo electronico" id ="input-email" value={email} onChange={this.onChange} />
                        <Button id="btn-registration" color="primary" 
                            onClick={() => this.onRegistration()}>
                            Enviar
                        </Button>
                        <div className="box-collapse">
                        <Collapse isOpen={this.state.collapse}>
                            <Alert color="success">
                                ¡Gracias por seguirnos!
                            </Alert>
                        </Collapse>
                        </div>
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
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/LuisGalindo.jpg`} alt="error" id="luis-galindo" />
                            </div><br></br>
                            <div>
                                <label className="names">Luis Galindo</label>
                            </div>
                          </Col>
                          <Col>
                            <div className="image">
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/SaritaRojas.jpg`} alt="error" id="sarita-rojas" />
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
                                <img className="content image" src={`${process.env.PUBLIC_URL}/images/KristellCollazos.jpg`} alt="error" id="kristell-collazos" />
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

// const url = "http://localhost:3001/api/register";
const url = "https://pethealh-backend.herokuapp.com/api/register";