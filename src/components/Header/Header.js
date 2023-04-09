import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import ButtonComponent from '../Button/ButtonComponent'

function Header({title, subTitle}) {
  return (
  <Row className='header-container'>
    <Col>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Col>
    <Col className='d-flex justify-content-end align-items-center'>
      <ButtonComponent 
        buttonText="Post an Announcement"
        icon={faPlus}
      />
    </Col>
  </Row>
  );
}

export default Header;
