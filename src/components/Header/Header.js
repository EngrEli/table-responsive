import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

function Header() {
  return (
  <Row>
    <Col>
      <h1>Announcements</h1>
      <p>View, create, or edit announcements for all employees of your company.</p>
    </Col>
    <Col className='d-flex justify-content-end align-items-center'>
      <Button variant="success">
        <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff", fontSize: "16px"}} />
        <strong>Post an Announcement</strong>
      </Button>
    </Col>
  </Row>
  );
}

export default Header;
