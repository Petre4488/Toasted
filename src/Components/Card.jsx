import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

export default function CardComp(props) {
    return (
        <Container>
            <Card>
                <Card.Img className='.img-fluid' variant="top" src={props.depImage} />
                <Card.Body>
                    <Card.Title> {props.department} </Card.Title>
                    <Card.Text>
                        {props.depDescription}
                    </Card.Text>
                    <Button variant="primary">Vezi detalii</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

CardComp.propTypes = {
    department: PropTypes.string.isRequired,
    depImage: PropTypes.string.isRequired,
    depDescription: PropTypes.string.isRequired
};

