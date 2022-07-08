import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import CTextField from '../text-field/TextField.js';
import './SearchPanel.scss';
import CTabs from '../tabmenu/TabMenu.js';

function SearchPanel(config) {
  return <>
    {  config.fullScreenMode && 
        (<section className={config.fullScreenMode ? "SearchPanel fullScreen" :'SearchPanel'} style={{ display: config.fullScreenMode ? "flex" : 'block' }}>
            {/* <Box sx={config.styles.box}>
                <Tabs style={{ display: 'flex', height:'40px' }} value={config.searchMenuValue} onChange={config.handleSearchMenuChange} centered>
                {
                    config.dashboardConfig.chapters.tabLabel.map((label, index) => {
                    return <Tab key={index} style= {config.styles.tabMenuItem} label={label}/>
                    })
                }
                </Tabs>
            </Box> */}
            <Box sx={config.styles.box}>
                <CTabs style={{ display: 'flex', height:'40px' }} value={config.searchMenuValue} 
                       onChange={config.handleSearchMenuChange} centered={true} 
                       tabMenuList={config.dashboardConfig.chapters.tabLabel} tabStyle={config.styles.tabMenuItemm}>
                </CTabs>
            </Box>
            { config.searchMenuValue === 0 
                ?
                <>
                    <CTextField id="chapter" label="Chapters" variant="outlined" />
                    <CTextField id="verse" label="Verse" variant="outlined" />
                    <CTextField fullWidth={true} id="word" label="Seach for a word" variant="outlined" />
                </>  
                :
                <div>
                    <CTextField fullWidth={true} id="keyword" label="Outlined" variant="outlined" />
                </div>
            }       
            <Button style={{...config.styles.btn.primary}} variant="contained">Search</Button>
        </section>)
      }  
      {  !config.fullScreenMode && 
        (<section className="SearchPanel">
            {/* <Box sx={config.styles.box}>
                <Tabs style={{ display: 'flex', height:'40px' }} value={config.searchMenuValue} onChange={config.handleSearchMenuChange} centered>
                {
                    config.dashboardConfig.chapters.tabLabel.map((label, index) => {
                    return <Tab key={index} style= {config.styles.tabMenuItem} label={label}/>
                    })
                }
                </Tabs>
            </Box> */}
             <Box sx={config.styles.box}>
                <CTabs style={{ display: 'flex', height:'40px' }} value={config.searchMenuValue} 
                       onChange={config.handleSearchMenuChange} centered={true} 
                       tabMenuList={config.dashboardConfig.chapters.tabLabel} tabStyle={config.styles.tabMenuItemm}>
                </CTabs>
            </Box>
            <section className="SearchContainer">
                { config.searchMenuValue === 0 
                    ?
                    <>
                        <div className="SearchElements">
                            <CTextField id="chapter" label="Chapters" variant="outlined" />
                            <CTextField id="verse" label="Verse" variant="outlined" />
                        </div>
                    
                            <CTextField style={config.styles.margin('Top','25px')} fullWidth={true} id="word" label="Seach for a word" variant="outlined" />
                    </>  
                    :
                    <div>
                        <CTextField fullWidth={true} id="keyword" label="Outlined" variant="outlined" />
                    </div>
                }       
                <Button style={{...config.styles.btn.primary,...config.styles.margin('Top','25px')}} variant="contained">Search</Button>
            </section>
        </section>)
      }
    </>
}

export default SearchPanel;
