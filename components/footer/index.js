import React, { useState } from 'react';
import {
    Jumbotron,
    Container,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Footer() {
    return (
        <div >
            <Jumbotron fluid className="footer">
                <Container className="text-center">

                    <h2>Contato</h2>
                </Container>
            </Jumbotron>

        </div>

    );
}
