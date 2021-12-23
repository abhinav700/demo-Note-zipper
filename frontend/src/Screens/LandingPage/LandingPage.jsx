import React from 'react'
import {Button, Container,Row} from "react-bootstrap"
import "./LandingPage.css"
const LandingPage = () => {
    return (
        <>
         <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div className="">
                             <h1 className="title">Welcome to react js</h1>
                             <p className="subtitle">A safe place to store all your notes</p>
                        </div>

                        <div className="buttonContainer">
                            <a href="/login">
                                <Button size="lg" className="landingButton mx-5"  variant="outline-primary" >Login</Button>
                                <Button size="lg" className="landingButton mx-5" variant="outline-primary">SignUp</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
             
        </div>   
        </>
    )
}

export default LandingPage
