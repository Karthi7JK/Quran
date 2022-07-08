import './Chapters.scss';
import * as React from 'react';
import { dashboardConfig } from '../../data/config.js';

import '../../mixins/utils.scss';
import styles from '../../utilities/styles.js';
import SearchPanel from '../search-panel/SearchPanel.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CTabs from '../tabmenu/TabMenu.js';
 
function Chapters() {

  const [searchMenuValue, setSearchMenuValue] = React.useState(0);
  const [chapterTabValue, setChapterTabValue] = React.useState(0);

  const handleSearchMenuChange = (event, newValue) => {
    setSearchMenuValue(newValue);
  };

  const handleChapterTabMenuChange = (event, newValue) => {
    setChapterTabValue(newValue);
  }

  return (
    <div className="Chapter" style={styles.margin('Top','40px')}>
        <SearchPanel fullScreenMode={true} searchMenuValue={searchMenuValue} handleSearchMenuChange={handleSearchMenuChange} 
                      styles={styles} dashboardConfig={dashboardConfig}>
        </SearchPanel>
        <section className="Chapter__Content">
              <div className="Chapter__Content__Heading">
                <h2>{dashboardConfig.chapters.heading}</h2>
                <div className="highlight"></div>
              </div>
              <section className="Chapter__Content__Panel">
                <section className="Chapter__Content__Panel__Left">
                  {/* <Box>
                      <Tabs style={{ display: 'flex', height:'40px' }} value={chapterTabValue} onChange={handleChapterTabMenuChange} centered>
                      {
                          dashboardConfig.chapters.quickLinkList.map((label, index) => {
                            return <Tab key={index} style= {styles.tabMenuItem} label={label}/>
                          })
                      }
                      </Tabs>
                  </Box> */}
                  <Box>
                      <CTabs 
                        value={chapterTabValue} onChange={handleChapterTabMenuChange} 
                        centered={true} tabMenuList={dashboardConfig.chapters.quickLinkList} tabStyle={styles.tabMenuItem}>
                      </CTabs>
                  </Box>
                </section>
                <section className="Chapter__Content__Panel__Right">

                </section>
              </section>  
        </section>
    </div>
  );
}

export default Chapters;
