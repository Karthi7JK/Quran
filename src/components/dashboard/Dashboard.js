import  Card  from '../../components/card/Card.js';
import { dashboardConfig } from '../../data/config.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Dashboard.scss';
import '../../mixins/utils.scss'
import QuickLink from '../quickLink/quickLink.js';
import * as React from 'react';
import styles from '../../utilities/styles.js'
import SearchPanel from '../search-panel/SearchPanel.js';
 
function Dashboard() {

  const [searchMenuValue, setSearchMenuValue] = React.useState(0);

  const handleSearchMenuChange = (event, newValue) => {
    setSearchMenuValue(newValue);
  };

  return (
    <div className="Dashboard">
      <section style={styles.margin('Top','55px')}>
        <Card config={dashboardConfig.preface}></Card>
      </section>

      <section className="Chapters" style={styles.margin('Top','55px')}>
        <div className="Chapters__LeftPanel">
            <div className="Chapters__LeftPanel__Header">
              <h2>{dashboardConfig.chapters.heading}</h2>
              <ArrowForwardIcon sx={{ color: "#308271" }} />
            </div>   
            <div className="Chapters__LeftPanel__Body">
                {
                  dashboardConfig.chapters.quickLinkList.map(chapterLink => {
                    return <QuickLink key={chapterLink} config={chapterLink}></QuickLink>
                  })
                }
            </div>
        </div>
        <div className="Chapters__RightPanel">
          <div className="Chapters__RightPanel__SearchMenu">
              <div className="tabMenu">
                 <SearchPanel fullScreenMode={false} searchMenuValue={searchMenuValue} handleSearchMenuChange={handleSearchMenuChange} 
                              styles={styles} dashboardConfig={dashboardConfig}>
                 </SearchPanel>
              </div>
             
          </div>
        </div>
      </section>

      <section style={styles.margin('Top','55px')}>
        <Card config={dashboardConfig.translation}></Card>
      </section>

      <section className="About" style={styles.margin('Top','55px')}>
          <div className="About__LeftPanel">
            
          </div>
          <div className="About__RightPanel">
            <img src={require('../../images/doctor_avatar.png')}/>
          </div>
      </section>

      <section className="Banner" style={styles.margin('Top','55px')}>
            Unique Value Propositions    
      </section>

    </div>
  );
}

export default Dashboard;
