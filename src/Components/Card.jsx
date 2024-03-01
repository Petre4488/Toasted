import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function CardComp(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.depImage} />
            <Card.Body>
                <Card.Title> {props.department} </Card.Title>
                <Card.Text>
                    {props.depDescription}
                </Card.Text>
                <Button variant="primary">Vezi detalii</Button>
            </Card.Body>
        </Card>
    );
}

CardComp.propTypes = {
    department: PropTypes.string.isRequired,
    depImage: PropTypes.string.isRequired,
    depDescription: PropTypes.string.isRequired
};

