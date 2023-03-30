import React from 'react'
import '../Tarif/Tarif.css'
import { Card, Col, Container, Row } from 'react-bootstrap'

import Familly from "../Tarif/Famille.jpg"
import PourDeux from "../Tarif/PourNous.jpg"
import Me from "../Tarif/Moi.jpg"
import Pregnary from "../Tarif/Grosesse.jpg"
import Baby from "../Tarif/Bebe.jpg"
import BestMoment from "../Tarif/MeilleursMoment.jpg"

const Services = () => {
  return (
    <div className='main'>

      <Container>

        <Row className='row'>


          <Col className='col'>
            <Card className="bg-white text">
                    <Card.Img id='Card-image' src={PourDeux} alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>« Pour deux »</Card.Title>
                        <Card.Text>
                        Pour deux personnes, en extérieur ou en studio
                        </Card.Text>
                        <Card.Text>195 euros</Card.Text>
                    </Card.ImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="bg-white text">
            <Card.Img src={Familly} alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>« Famille »</Card.Title>
                        <Card.Text>
                        Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
                        30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)
                        </Card.Text>
                        <Card.Text>220 euros</Card.Text>
                    </Card.ImgOverlay>
            </Card>
          </Col>

          <Col>
          <Card className="bg-white text-white">
            <Card.Img src={Me} alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>« Juste moi »</Card.Title>
                        <Card.Text>
                        Séance pour une personne, en extérieur ou en studio
                        </Card.Text>
                        <Card.Text>130 euros</Card.Text>
                    </Card.ImgOverlay>
            </Card>
          </Col>  

        </Row>



        <Row>  

          <Col>
            <Card className="bg-white text-white">
            <Card.Img src={Pregnary} alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>« Il était une fois »</Card.Title>
                        <Card.Text>
                        Photo de grossesse (À votre domicile, en extérieur ou en studio)
                        </Card.Text>
                        <Card.Text>160 euros</Card.Text>
                    </Card.ImgOverlay>
            </Card>
          </Col>

          <Col>
            <Card className="bg-white text-white">
            <Card.Img src={Baby} alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>« Mon bébé »</Card.Title>
                        <Card.Text>
                        Photo d’enfant jusqu’à 3 ans (photo à domicile)
                        </Card.Text>
                        <Card.Text>100 euros</Card.Text>
                    </Card.ImgOverlay>
            </Card>
          </Col>
        
          <Col>
            <Card className="bg-white text-white">
            <Card.Img src={BestMoment} alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>« J’immortalise l’événement »</Card.Title>
                        <Card.Text>
                        Prestation de mariage ou baptême sur devis
                        </Card.Text>
                        <Card.Text>sur mesure</Card.Text>
                    </Card.ImgOverlay>
            </Card>
          </Col>

          
        </Row>

      </Container>

    </div>
  )
}

export default Services