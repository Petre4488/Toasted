import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

export default function SponsorCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.sponsorImage} />
      <Card.Body>
        <Card.Title> {props.sponsorName} </Card.Title>
        <Card.Text>
        {props.sponsorMotto}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.sponsorActivity}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{props.sponsorWebsite}</Card.Link>
        <Card.Link href="#">{props.sponsorSocial}</Card.Link>
      </Card.Body>
    </Card>
  );
}

SponsorCard.propTypes = {
  sponsorName: PropTypes.string.isRequired,
  sponsorMotto: PropTypes.string.isRequired,
  sponsorActivity: PropTypes.string.isRequired,
  sponsorWebsite: PropTypes.string.isRequired,
  sponsorSocial: PropTypes.string.isRequired,
  sponsorImage: PropTypes.string.isRequired
};
