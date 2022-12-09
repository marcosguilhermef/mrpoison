import React from "react";
import Header from '../Header'
import { Container } from "react-bootstrap";

const Index = (props) => {

    const { children } = props

    return(
        <>
            <Header />
            <Container className="my-3">
                {
                    children
                }
            </Container>
        </>
    );
}

export default Index;