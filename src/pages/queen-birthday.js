import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.css';
import Form from '../components/form';
import Queen1 from '../images/queen-1.jpg';
import Queen2 from '../images/queen-2.jpg';
import Queen3 from '../images/queen-3.jpg';
import Queen4 from '../images/queen-4.jpg';
import Queen5 from '../images/queen-5.jpg';
import Card from "react-bootstrap/Card";
import { Grid, Divider} from "@material-ui/core";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axios from 'axios';
import './queen-birthday.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col} from 'react-bootstrap';
import SEO from "../components/seo";


const Birthday = () => {
  const [ users, setUsers ] = useState([]);
  const [genData, setGenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const listHeight = 500;
  const listWidth = 450;
  var pics = [Queen1, Queen2, Queen3, Queen4]
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setIsLoading(true);
    axios.get('https://colmig-app.herokuapp.com/birthday-wishes')
    //axios.get('http://localhost:8080/birthday-wishes')
    .then((response) => {
      let data = response.data;
      setUsers(response.data)
      setGenData(response.data)
      console.log(users);
      setIsLoading(false);
    })
    .catch(() => alert('Error fetching new users'));
};

const deleteMessage = async (messageId) =>{
  await confirmAlert({
    title: 'Confirm to delete message',
    message: 'Are you sure to do this?!',
    buttons: [
      {
        label: 'Yes',
        onClick: () =>{
         axios({
            url: 'https://colmig-app.herokuapp.com/birthday-wishes/delete',
            //url: 'http://localhost:8080/birthday-wishes/delete',
            method: 'POST',
            data: {
              messageId
            },
          })
          .then((response) => {
            alert(response.data.message)
          })
          .then(() =>{
            fetchUsers();
          }
          )
          .catch(() => alert('Failed deleting data'));
        }
      },
      {
        label: 'No',
        onClick: () => alert('Message not deleted')
      }
    ]
  });
}


const { isEmpty } = require('lodash');

const flip2Back = (e) =>{
  setIsFlipped(true)
  var element = document.getElementById('flipper');
  if (element.classList.contains('flipped')){
    return
    }
    else {
      element.classList.add('flipped')
    }
};
const flip2Front = (e) =>{
  var element = document.getElementById('flipper');
  if (element.classList.contains('flipped')){
      element.classList.remove('flipped')
  }
  setIsFlipped(false)
};


const searchList= (e) =>{ 
  let searchInput = e.target.value;
  searchInput = searchInput.toLowerCase();
  let newData = genData.filter(function (item) {
      return item.name.toLowerCase().includes(searchInput);
  });
  setUsers(newData);
}
let list =[]
list= users.map(customer => {
    return customer
})

const listRow = ({ index, style }) => (
  <div style={style} key={index} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
    <ListItem className="list-group-item" id="listing">
          <Card border="info" style={{ width:'62rem', textAlign:'center'}} className={'cardy'}>
            <Card.Body>
              <Card.Title>{list[index]['msgTitle']}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Date: {list[index]['date']}</Card.Subtitle>
              <Card.Text>
                {list[index]['msgContent']}
              </Card.Text>
            </Card.Body>
            <Card.Footer>...with love from {list[index]['name']}</Card.Footer>
          </Card>
          <br />
          <br />
    </ListItem>
  </div>
);

var settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
};

  return (
    <Layout>
    <SEO title="Resume" description="View Collins Akinbami's resume here" />
    <div align="center">
      <h3>Hurray!!! It's Queen's Birthday!</h3>
        <Grid container>
        <Grid item xs={10} sm={7} className="appContent">
        <div align="center" className="flip-box" id="flipper">
          <div class="flip-box-inner">
            <div class="flip-box-front">
            <Form users={users} fetchUsers={fetchUsers} flip2Back={flip2Back} />
            </div>
            <div class="flip-box-back" >
              <div className="slideshow">
                {isFlipped ? (
                  <Slider {...settings}>
                    {users.map((user, index) => (
                    <div>
                      <Card bg="primary" style={{ height:'100%', width:'100%', textAlign:'center'}} className={'cardy'}>
                        <Container>
                          <Card.Body>
                            <Card.Title>{user.msgTitle}</Card.Title>
                            <Card.Subtitle style={{ fontSize:'11px', fontStyle:'italic'}} >Date Posted: {user.date.substr(0, 24)}</Card.Subtitle>
                            <Row>
                              <Col xs={12} md={6}>
                                <Card.Img variant="center" src={pics[Math.floor(Math.random() * 4)]} style={{width:"300px", maxHeight:"400px", margin:'5px', borderRadius:"20px"}} />
                              </Col>
                              <Col xs={12} md={6}>    
                                  <Card.Text style={{paddingTop:"20%"}}>
                                    {user.msgContent}
                                  </Card.Text>
                              </Col>
                            </Row>
                            </Card.Body>
                          </Container>
                          <Card.Footer>with love from {user.name}</Card.Footer>
                        </Card>
                    </div>
                    ))}
                  </Slider>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
        </Grid>
        <Grid item xs={10} sm={5} className="appContent">
        {isLoading ? (<p>Data loading, please wait.. 
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        </p>) : (
          <div className="article-list">
            <h3><strong>ALL BIRTHDAY WISHES</strong></h3>
            <div className="article-search" id="list-search">
              <input
                  type="text"
                  id="article-searcher"
                  className="searchbox"
                  placeholder="Search list with names"
                  onKeyUp={searchList}
              />
            </div>
              <div align="center">
                <FixedSizeList
                  className="List"
                  height={800}
                  width={listWidth}
                  itemSize={300}
                  itemCount={users.length}
                  >
                  {listRow}
                </FixedSizeList>
              </div>
          </div>
        )}
        </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Birthday