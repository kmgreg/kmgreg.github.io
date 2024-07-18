import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GitHubButton from 'react-github-btn';
import 'react-tabs/style/react-tabs.css';
import logo from './logo.svg';
import banner from './globannd.gif';
import liLogo from './LI-In-Bug.png';
import BannerHeader from './components/bannerheader';
import Timeline from './components/timeline';
import './App.css';

function App() {

  const tabStyling = {
    border: "solid",
    'margin-left': "10px"
  }

  const articleContents = <p></p>
  
  return (
    <div className="App">
      <header className="App-header">
        <BannerHeader text={'Kurt\'s Homepage'} image={banner} textColor='black'></BannerHeader>
        <p>
          <Tabs>
            <TabList>
              <Tab style={tabStyling}>Home</Tab>
              <Tab style={tabStyling}>CV</Tab>
              <Tab style={tabStyling}>Contact</Tab>
            </TabList>

            <TabPanel>
              <h2>Muh Home</h2>
            </TabPanel>

            <TabPanel>
              <Timeline articles={[{
                header: 'Fujifilm',
                date: '2021-2024',
                contents: <p>Did work on photo kiosk software (NodeJS/.NET). Worked on both the front end and backend teams.</p>
              }, {
                header: 'Worldpay (As part of FIS)',
                date: '2020',
                contents: <p>Worked on the intern team. Did work on the <a href='https://github.com/Vantiv'>customer facing SDKS</a> and some internal security improvements.</p>
              }]}></Timeline>
            </TabPanel>

            <TabPanel>
              <div className='textblockContainer' style={{width: '600px'}}><h2>Contact Me</h2>
              <ul style={{listStyleType: 'none', display: 'inline-block', textAlign: 'left'}}>
              <li className='contact-link'>
                <a href='mailto:kmgregorek@gmail.com'>For business inquiries contact kmgregorek@gmail.com</a>
              </li>
              <li className='contact-link'>
                <GitHubButton href="https://github.com/kmgreg" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @kmgreg on GitHub">Follow @kmgreg</GitHubButton>
              </li>
              <li className='contact-link'> 
                <a href='https://www.linkedin.com/in/kurtgregorek/'><img src={liLogo} alt='linkedinlink' width='50' height='40'></img></a>
              </li>
              </ul>
              </div>
            </TabPanel>

          </Tabs>
        </p>
        </header>
    </div>
  );
}

export default App;
