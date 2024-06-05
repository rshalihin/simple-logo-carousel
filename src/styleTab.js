import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from "@wordpress/block-editor";
import { PanelBody, ButtonGroup, Button } from '@wordpress/components';
import { AlignStartV, } from './component/svgIcon/svgIcon';
import { select } from '@wordpress/data';

const StyleTab = ({attributes, setAttributes}) => {

    const {sliderAlignment, sliderBGColor, sliderTitleColor, sliderDesColor, navigationArrowColor, paginationDotColor} = attributes;


    return(
        <>
        <PanelBody title={ __( 'Content', 'mrs-logo-carousel' ) } initialOpen={ false }>
            <p>Text Alignment</p>
            <ButtonGroup className='mrs-logo-carousel-vertical-align-group'>
                <Button className={`mrs-logo-carousel-vertical-align ${('Left' == sliderAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({sliderAlignment: 'Left'})}>Left</Button>

                <Button className={`mrs-logo-carousel-vertical-align ${('Center' == sliderAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({sliderAlignment: 'Center'})}>Center</Button>

                <Button className={`mrs-logo-carousel-vertical-align ${('Right' == sliderAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({sliderAlignment: 'Right'})}>Right</Button>
            </ButtonGroup>
        </PanelBody>
        <PanelBody title={__('Slider Color Settings', 'mrs-log-carousel')} initialOpen={false}>
            <PanelColorSettings
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Title Color', 'mrs-log-carousel'),
                        value: sliderTitleColor,
                        onChange: (value) => {
                            setAttributes({sliderTitleColor: value})
                        }
                    },
                    {
                        label: __('Description Color', 'mrs-log-carousel'),
                        value: sliderDesColor,
                        onChange: (value) => {
                            setAttributes({sliderDesColor: value})
                        }
                    },
                    {
                        label: __('Background Color', 'mrs-log-carousel'),
                        value: sliderBGColor,
                        onChange: (value) => {
                            setAttributes({ sliderBGColor: value })
                        }
                    }
                ]}
            />
        </PanelBody>
        <PanelBody title={__('Navigation Settings', 'mrs-log-carousel')} initialOpen={false}>
        <PanelColorSettings
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Navigation Arrow Color', 'mrs-log-carousel'),
                        value: navigationArrowColor,
                        onChange: (value) => {
                            setAttributes({navigationArrowColor: value})
                        }
                    },
                    {
                        label: __('Pagination Dot Color', 'mrs-log-carousel'),
                        value: paginationDotColor,
                        onChange: (value) => {
                            setAttributes({paginationDotColor: value})
                        }
                    }
                ]}
            />
        </PanelBody>
        </>
    );
}

export default StyleTab;