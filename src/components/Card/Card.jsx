import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function Cards({ id, imgSrc, title, desc }) {
  return (
    <Card className='CardsDiv' style={{ width: '15rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Text>ID: {id}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
