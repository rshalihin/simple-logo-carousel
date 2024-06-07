import {
    TabPanel,
} from '@wordpress/components';

import { GeneralIcon, StyleIcon, AdvancedIcon } from '../svgIcon/svgIcon';
import './editor.scss';


const TabControls = ({attributes, setAttributes, GeneralTab = '', StyleTab = '', AdvancedTab = '', addSlide=''}) => {

    const Tabs = [];

    if(GeneralTab) {
        Tabs.push({
            name: 'general',
            title: <span className='sndr-tab-panel-title'>{GeneralIcon()} General</span>,
            className: 'sndr-general-tab',
        })
    }
    if(StyleTab) {
        Tabs.push({
            name: 'style',
            title: <span className='sndr-tab-panel-title'> {StyleIcon()} Style</span>,
            className: 'sndr-style-tab',
        })
    }
    if(AdvancedTab) {
        Tabs.push({
            name: 'advanced',
            title: <span className='sndr-tab-panel-title'>
            {AdvancedIcon()} Advanced</span>,
            className: 'sndr-advanced-tab',
        })
    }

    return (
        <TabPanel
            className="sndr-tab-panel"
            activeClass="active-tab"
            tabs={ Tabs }
        >
            { ( tab ) => {
            return (
                <>
                    {
                    (tab.name === 'general') && GeneralTab && 
                        <GeneralTab 
                            attributes={attributes}
                            setAttributes={setAttributes}
                            addSlide={addSlide}
                        />
                    }
                    {(tab.name === 'style') && StyleTab && 
                        <StyleTab 
                            attributes={attributes}
                            setAttributes={setAttributes}
                        />
                    }
                    {(tab.name === 'advanced') && AdvancedTab && 
                        <AdvancedTab 
                            attributes={attributes}
                            setAttributes={setAttributes}
                        />
                    }
                </>
            )
            } }  
        </TabPanel>
    )
}

export default TabControls;