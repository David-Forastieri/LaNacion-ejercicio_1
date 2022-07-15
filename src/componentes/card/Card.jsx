import React, {useEffect, useState} from 'react'
import Titles from '../titles/Titles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BoxCard,
  DataNote,
  ImageBox,
  OrderCard,
  TitleNote
 } from './Card.style'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ( {dataArticles} ) => {
  const lessNotes = dataArticles.slice(0,9)

  const Fecha=(data)=>{
    let dataday = new Date(data);
    return dataday.toLocaleDateString('es-ar', { day: "numeric", month:"long", year:"numeric"})
  } 

  return (
    <OrderCard>
      <Row xs={1} md={3} lg={3} className="g-1">
      { lessNotes.map((e, i) =>{
          return(
            <Col key={i}>
              <BoxCard>
                <ImageBox>
                  <img src={e.promo_items.basic.url} />
                </ImageBox>
                <TitleNote>
                  <Titles titleText={e.headlines.basic} />
                </TitleNote>
                <DataNote>
                  {Fecha(e.display_date)}
                </DataNote>
              </BoxCard>
            </Col>
          )
        })
      }
      </Row>
    </OrderCard>
  )
}

export default Card;

