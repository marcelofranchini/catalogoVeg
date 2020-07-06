import React, { useState } from 'react';
import {
  Jumbotron,
  Button,
  Container,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function JumbotronPage() {
  return (
    <div>
      <Jumbotron fluid className="descr-top">
        <Container className="text-center">

          <h1 className="display-3 mb-4 ">Seu Catálogo de Alimentos Veganos, Vegetarianos e Sem Glúten</h1>
          <p className="lead mb-4">Verifique se o alimento é Vegano, Vegetariano e se possúi Glúten</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead mb-4">
            <Button color="success" size="lg">Acesse
            </Button>
          </p>
        </Container>
      </Jumbotron>


      <Jumbotron fluid className="descr-top2">
        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
            <p className="lead pb-4">Nossos Serviços </p>

          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="code" size="lg" />
              </div>
              <h2>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><a className="btn btn-success" href="#" role="button">View details »</a></p>
            </div>
            <div className="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="laptop-code" size="lg" />
              </div>
              <h2>Heading</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              <p><a className="btn btn-success" href="#" role="button">View details »</a></p>
            </div>
            <div className="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="mobile-alt" size="lg" />
              </div>              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-success" href="#" role="button">View details »</a></p>
            </div>
          </div>


        </Container>
      </Jumbotron>

      <Jumbotron fluid className="descr-top3">
        <Container className="text-center">
          <div>
            <h2 className="display-4">Classificação dos Produtos</h2>
            <p className="lead md-4"> Produtos Classificados, Comentários e Notas</p>
          </div>

          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card">
                <img src="veg.png" className="card-img-top logo" alt="veg" width="304" height="236"/>
                <div className="card-body">
                  <h5 className="card-title">Produto Vegano</h5>
                  <p className="card-text">Quando o Produto for Vegano constará esta etiqueta</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="vegetariano.jpg" className="card-img-top log" alt="vegetariano" width="304" height="236"/>
                <div className="card-body">
                  <h5 className="card-title">Produto Vegetariano</h5>
                  <p className="card-text">Quando o Produto for Vegetariano constará  esta etiqueta</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="gluten.jpg" className="card-img-top log" alt="gluten" width="304" height="236"/>
                <div className="card-body">
                  <h5 className="card-title">Produto sem Glúten</h5>
                  <p className="card-text">Caso o Produto não contenha Glúten constará  esta etiqueta</p>
                </div>
              </div>
            </div>
           
          </div>



        </Container>
      </Jumbotron>


    </div>
  );
}
