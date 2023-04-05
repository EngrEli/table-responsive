
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'
import tableIcons from '../../assets/images/sent-through-icons.svg'
import "./Table.css"
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

import axios from "axios"
import { useState, useEffect } from 'react';

function TableComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
    .get("/db/table.json")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  }

  const columns = [
    {
      dataField: "title",
      text: "TITLE",
      sort: true
    },
    {
      dataField: "message",
      text: "MESSAGE",
      sort: true
    },
    {
      dataField: "sent_by",
      text: "SENT BY",
      sort: true
    },
    {
      dataField: 'sent_through',
      isDummyField: true,
      text: 'SENT THROUGH',
      formatter: () => {
        return <img src={tableIcons}/>
      }
    },
    {
      dataField: "data_created",
      text: "DATE CREATED",
      sort: true
    },
    {
      dataField: "start_date",
      text: "START DATE",
      sort: true
    },
    {
      dataField: "end_date",
      text: "END DATE",
      sort: true
    },
  ]

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } - { to } of { size }
    </span>
  );

  const paginateOptions = {
    paginationSize: 3,
    pageStartIndex: 0,
    alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '10', value: 10
    }, {
      text: '20', value: 20
    }, {
      text: 'All', value: data.length
    }] // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <>
      <Row>
        <Col className='d-flex align-items-center '>
          <div className='table-count all'>
            <strong className='count-number'>10</strong>
            All
          </div>
          <div className='table-count drafts'>
            <strong className='count-number'>10</strong>
            Drafts
          </div>
        </Col>
        <Col>
          <Row>
            <Col>
              <Dropdown className="d-inline table-filter-dropdown">
                <Dropdown.Toggle variant='' id="dropdown-autoclose-true">
                  Filter by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <InputGroup className="mb-3 table-filter-search">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Search..."
                />
                <InputGroup.Text id="inputGroup-sizing-default">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='navbar-sprout-icons' style={{ color: "#70787E", fontSize: "16px" }} />
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <BootstrapTable
        hover
        keyField='title'
        data={data}
        columns={columns}
        pagination={paginationFactory(paginateOptions)}
      />
    </>
  );
}

export default TableComponent;
