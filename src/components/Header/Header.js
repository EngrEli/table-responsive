import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

function Header({title, subTitle, buttonText}) {
  return (
  <Row className='header-container'>
    <Col>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Col>
    <Col className='d-flex justify-content-end align-items-center'>
      <Button variant="success">
        <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff", fontSize: "16px"}} />
        <span>{buttonText}</span>
      </Button>
    </Col>
  </Row>
  );
}

export default Header;
