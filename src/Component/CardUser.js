import React from 'react'
import { Button, Card }from 'react-bootstrap'
import { Link } from 'react-router-dom'
function CardUser ({el}){
    return (
  <div className='card'>
<Card style={{ width: '20rem' ,backgroundColor:"#FFBB99",display:'flex'}}>
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to={`/Details/${el.id}`}><Button>Details</Button></Link>
  </Card.Body>
</Card>
</div>
    )
}
export default CardUser