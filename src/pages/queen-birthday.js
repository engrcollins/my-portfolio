import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.css';
import './queen-birthday.css';
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import { Grid, Divider} from "@material-ui/core";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import SEO from "../components/seo";



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


const rotateCard = (e) =>{
    var card = document.getElementById ('manual')
    console.log(card);
    if(card.classList.contains('hover')){
        card.classList.remove('hover');
    } else {
        card.classList.add('hover');
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
                <br />
                <br />
              </Card.Body>
              <br />
              <br />
              <Card.Footer>...with love from  <span style={{ fontSize:'16px', fontStyle:'italic', fontWeight: 'bold'}}>{list[index]['name']}</span></Card.Footer>
            </Card>
      </ListItem>
    </div>
  );

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Layout>
    <SEO title="Queen's Birthday" description="Celebrating Ajayi Grace Olanike" />
    <div align="center">
      <h3>Hurray!!! It's Queen's Birthday!</h3> 
      <Grid container>
        <Grid item xs={11} md={7} className="appContent">
        {isLoading ? (<p>Data loading, please wait.. 
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        </p>) : (
        <div className="card-container manual-flip" id="manual">
          <div className="card">
          <div className="back">
                <h5 >Fill the form to send her birthday wishes</h5>
              <div className="content">
                <Form users={users} fetchUsers={fetchUsers} rotateCard={rotateCard} />
              </div>
            </div>

            <div className="front">
                 <div className='scont'>
                <Slider {...settings} style={{maxWidth:'420px'}}>
                      {users.map((user, index) => (
                          <div>
                            <Card bg="primary" style={{ textAlign:'center', color:'whitesmoke'}} className={'cardy'}>
                              <Container>
                              <Card.Body>
                                <Card.Title>{user.msgTitle}</Card.Title>
                                <Card.Subtitle style={{ fontSize:'12px', fontStyle:'italic'}} >Date Posted: {user.date.substr(0, 24)}</Card.Subtitle>
                                <br />
                                <span style={{fontWeight: 'bold'}}> &lt;&lt;&lt; Swipe &gt;&gt;&gt; </span>
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
                                <br />
                                </Card.Body>
                                <br />
                                <br />
                              </Container>
                              <Card.Footer>
                                ...with love from  <span style={{ fontSize:'16px', fontStyle:'italic', fontWeight: 'bold'}}>{user.name}</span>
                                <br />
                                <span style={{fontWeight: 'bold'}}> &lt;&lt;&lt; Swipe &gt;&gt;&gt; </span>
                              </Card.Footer>
                              <br />
                            </Card>
                            <br />
                        </div>
                        ))}
                </Slider>
                </div>
                <br />
                <br />
                <button class="btn btn-info" onClick={rotateCard}>
                <i class="fa fa-pencil-square"></i> Click here to send queen your birthday wishes.
              </button>              
          </div>
          <br />  
          </div>
          </div>
        )}
        </Grid>
        <Grid item xs={0} md={1} className="appContent"></Grid>
        <Grid item xs={11} md={3} className="appContent">
        {isLoading ? (<p>Data loading, please wait.. 
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        </p>) : (
          <div className="article-list">
            <br />
            <br />
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