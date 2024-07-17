import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './logo.svg';
import banner from './globannd.gif';
import BannerHeader from './components/bannerheader';
import Timeline from './components/timeline';
import './App.css';

function App() {

  const tabStyling = {
    border: "solid",
    'margin-left': "10px"
  }
  
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
                header: 'My Job',
                date: 'Now',
                contents: 'This is my job lol. Heres a wall of text'
              }, {
                header: 'My Job 2',
                date: 'Now',
                contents: 'This is also my job lol. Heres a wall of text'
              }]}></Timeline>
            </TabPanel>

            <TabPanel>
              <p className='textblockContainer'>Contact Me</p>
            </TabPanel>

          </Tabs>
        </p>
      </header>
    </div>
  );
}

export default App;
