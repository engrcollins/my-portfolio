import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.css';
import Form from '../components/form';
import Queen1 from '../images/queen-1.jpg';
import Queen2 from '../images/queen-2.jpg';
import Queen3 from '../images/queen-3.jpg';
import Queen4 from '../images/queen-4.jpg';
import Queen5 from '../images/queen-5.jpg';
import Queen6 from '../images/queen-6.jpg';
import Queen7 from '../images/queen-7.jpg';
import Queen8 from '../images/queen-8.jpg';
import Queen9 from '../images/queen-9.jpg';
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
import { Container, Row, Col} from 'react-bootstrap';
import SEO from "../components/seo";
import $ from 'jquery';


const Birthday = () => {
  const [ users, setUsers ] = useState([]);
  const [genData, setGenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const listHeight = 500;
  const listWidth = 420;
  var pics = [Queen1, Queen2, Queen3, Queen4, Queen5, Queen6, Queen7, Queen8, Queen9]
  
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

const rotateCard = (e) =>{
  var card = document.getElementById ('manual')
  console.log(card);
  if(card.classList.contains('hover')){
      card.classList.remove('hover');
  } else {
      card.classList.add('hover');
  }
}

const shift = () =>{
  var contentstack = $('.contentstack');
  var currentItem = contentstack.filter('.activestack');
  console.log(contentstack)
  console.log(currentItem)
  var steps = $('.cardstack').filter('.steps');
  var inactive1 = $('.inactive-1');
  var inactive2 = $('.inactive-2');

  var nextItem = currentItem.next();
  var lastItem = contentstack.last();
  var contentstackFirst = contentstack.first();

  currentItem.removeClass('activestack');

  if (currentItem.is(lastItem)) {
      currentItem = contentstackFirst.addClass('activestack');
      currentItem.css({'right': '10%', 'opacity': '1'});
      $('.step').animate({width: '33%'});
      inactive1.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
      inactive2.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);

  } else if (currentItem.is(contentstackFirst)) {
      currentItem.animate({opacity: 0}, 1000);
      currentItem = nextItem.addClass('activestack');
      $('.step').animate({width: '66%'});
      inactive2.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

  } else {
      currentItem = nextItem.addClass('activestack');
      $('.step').animate({width: '100%'});
      inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
  } 
}
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
    <SEO title="Queen's Birthday" description="Celebrating Ajayi Grace Olanike" />
    <div align="center">
      <h3>Hurray!!! It's Queen's Birthday!</h3>
        <Grid container>
        <Grid item xs={11} md={6} className="appContent">
        <div className="card-container manual-flip" id="manual">
          <div className="card">
             <div className="front">
               <div class="contstack">
                <div class="inner-contstack">          
                    <div class="cardstack inactive-1"></div>
                    <div class="cardstack inactive-2"></div>
                    <div class="cardstack">
                      {users.map((user, index) => (
                          <div class="contentstack activestack">
                            <Card bg="primary" style={{ textAlign:'center', color:'whitesmoke'}} className={'cardy'}>
                              <Container>
                              <Card.Body>
                                <Card.Title>{user.msgTitle}</Card.Title>
                                <Card.Subtitle style={{ fontSize:'12px', fontStyle:'italic'}} >Date Posted: {user.date.substr(0, 24)}</Card.Subtitle>
                                <br />
                                <Row>
                                  <Col xs={12} md={6}>
                                    <Card.Img src={pics[Math.floor(Math.random() * 9)]} style={{maxWidth:"300px", maxHeight:"350px", minHeight:"220px", margin:'2px', borderRadius:"20px"}} />
                                  </Col>
                                  <Col xs={12} md={6}>    
                                      <Card.Text style={{height:"110px"}}>
                                        {user.msgContent}
                                      </Card.Text>
                                  </Col>
                                </Row>
                                </Card.Body>
                                <button class="btn btn-simple" onClick={rotateCard}>
                               <i class="fa fa-mail-forward"></i> Manual Rotation
                            </button> 
                              </Container>
                              <Card.Footer>
                                with love from {user.name}
                                <br />
                                <div>
                                  <button className="btn btn-default btn-sm" onClick={shift} align="center">Next &rarr;</button>
                                </div>
                              </Card.Footer>
                            </Card>
                            {/*
                            <div class="progress-contstack">
                              <div class="step"></div>
                            </div>*/}
                          </div>
                        ))}                
                    </div>
                </div>
            </div>
             </div>
             <div className="back">
                <h5 >Fill the form to send her birthday wishes</h5>
              <div className="content">
                <Form users={users} fetchUsers={fetchUsers} rotateCard={rotateCard} />
              </div>
            </div>
           </div>
          </div>
        </Grid>
        <Grid item xs={0} md={1} className="appContent"></Grid>
        <Grid item xs={11} md={4} className="appContent">
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