import React, { Component } from 'react';
import './css/App.css';
import { Layout, Header, Navigation,Drawer,Content,Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton ,Footer,FooterSection,FooterDropDownSection,FooterLinkList} from 'react-mdl';

import images from './images/avatar.jpg';




import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (

        
        <div className="demo-big-content">
   
    <Layout fixedHeader>


    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Thailime</Link>} scroll>
  
            <Navigation>
                <Link to="./Special">SPECIAL</Link>
                <Link to="/Reservation">RESERVATION</Link>
                <Link to="./Help">HELP</Link>
                <Link to="./Contact">CONTACT</Link>
               

            </Navigation>
        </Header>


    
    
    

     <Drawer className="sub-header" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Thailime</Link>} scroll>
    
  
            <Navigation>
                <Link to="./Special">SPECIAL</Link>
                <Link to="/Reservation">RESERVATION</Link>
                <Link to="/Help">HELP</Link>
                <Link to="/Contact">CONTACT</Link>
               

            </Navigation>
       


    
    
     </Drawer>
        <Content>
            <div className="content" />

           <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
           
                   <img src={images} 
                    alt=""
              className="avatar-img"
              />

            <div className="banner-text">
            
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>

 <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
            
        </Content>

    </Layout>

    

</div>



    );
  }
}

export default App;
