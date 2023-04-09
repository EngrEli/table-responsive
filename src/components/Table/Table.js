import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import tableIcons from '../../assets/images/sent-through-icons.svg'
import "./Table.css"
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from "axios"

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

  const dateFormatter = (cellData) => {
    const newDateFormat = new Date(cellData).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
    const splitDate = newDateFormat.split(',');
    const mapped = splitDate.map((item, index) => {
      return (
        <div className={"date" + index} key={item}>{item}</div>
      )
    })
    return mapped
  }

  const columns = [
    {
      dataField: "title",
      text: "TITLE",
      classes: 'title-td',
      headerClasses: 'title-th',
    },
    {
      dataField: "message",
      text: "MESSAGE",
    },
    {
      dataField: "sent_by",
      text: "SENT BY",
      classes: 'sentby-td',
      formatter: (cell) => {
        // Arrange the full name into surname first format 
        const fullName = cell.split(' ');
        [fullName[0], fullName[1]] = [fullName[1], fullName[0]]
        const joined = fullName.join(', ')
        return (
          <p>{joined}</p>
        );
      }
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
    },
    {
      dataField: "start_date",
      text: "START DATE",
      formatter: dateFormatter
    },
    {
      dataField: "end_date",
      text: "END DATE",
      formatter: dateFormatter
    },
  ]

  const optionsHeader = {
    headerClasses: 'header-class',
  };

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } - { to } of { size }
    </span>
  );

  const paginateOptions = {
    paginationSize: 3,
    pageStartIndex: 0,
    alwaysShowAllBtns: true,
    hidePageListOnlyOnePage: true,
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
      text: '30', value: 30
    }, {
      text: 'All', value: data.length
    }]
  };

  return (
    <>
      <Row>
        <Col className='d-flex align-items-center '>
          <div className='table-count all'>
            <span className='count-number'>10</span>
            All
          </div>
          <div className='table-count drafts'>
            <span className='count-number'>10</span>
            Drafts
          </div>
        </Col>
        <Dropdown className="d-inline table-filter-dropdown">
          <Dropdown.Toggle variant='' id="dropdown-autoclose-true">
            Filter by
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Title</Dropdown.Item>
            <Dropdown.Item href="#">Message</Dropdown.Item>
            <Dropdown.Item href="#">Sent By</Dropdown.Item>
            <Dropdown.Item href="#">Sent Through</Dropdown.Item>
            <Dropdown.Item href="#">Date Created</Dropdown.Item>
            <Dropdown.Item href="#">Start Date</Dropdown.Item>
            <Dropdown.Item href="#">End Date</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <InputGroup className="mb-3 table-filter-search">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search..."
          />
          <InputGroup.Text id="inputGroup-sizing-default">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#70787E", fontSize: "16px", cursor: "pointer" }} />
          </InputGroup.Text>
        </InputGroup>
      </Row>
      <BootstrapTable
        hover
        responsive
        wrapperClasses="table-responsive"
        keyField='title'
        data={data}
        columns={columns}
        headerClasses={ optionsHeader.headerClasses }
        pagination={paginationFactory(paginateOptions)}
      />
    </>
  );
}

export default TableComponent;
