import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from "@wordpress/block-editor";
import { PanelBody, ButtonGroup, Button, __experimentalDivider as Divider, __experimentalBoxControl as BoxControl, SelectControl } from '@wordpress/components';
import RSRangeControl from './component/RSRangeControl/RSRangeControl';

const StyleTab = ({attributes, setAttributes}) => {

    const {sliderAlignment, sliderBGColor, sliderTitleColor, sliderDesColor, navigationArrowColor, paginationDotColor, enableNavigationArrows,  navigationArrowSize, sliderBorder, sliderBorderStyle, sliderBorderColor} = attributes;

    const onChangeSliderBorder = (newValue) => {
        setAttributes({sliderBorder: newValue});
    }
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
        <PanelBody title={__('Slider Settings', 'mrs-log-carousel')} initialOpen={false} className='mrs-logo-carousel-style-tab-panel-slider'>
            <p>{__('Slider Color Settings', 'mrs-logo-carousel')}</p>
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
            <Divider />
            <PanelColorSettings
                title={__('Slider Border Color', 'mrs-logo-carousel')}
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Slider Border Color', 'mrs-logo-carousel'),
                        value: sliderBorderColor,
                        onChange: (value) => {
                            setAttributes({ sliderBorderColor: value });
                        }
                    }
                ]}
            />
            <SelectControl
                label={__('Border Style', 'mrs-logo-carousel')}
                options={[
                    {  label: 'None', value: 'none'},
                    { label: 'Solid', value: 'solid' },
                    { label: 'Dashed', value: 'dashed' },
                    { label: 'Dotted', value: 'dotted' },
                    { label: 'Double', value: 'double' },
                    { label: 'Groove', value: 'groove' },
                    { label: 'Inset', value: 'inset' },
                    { label: 'Outset', value: 'outset' }
                ]}
                value={sliderBorderStyle}
                onChange={(value) => setAttributes({sliderBorderStyle: value})}
            />
            <BoxControl
                label={__('Slider Border Settings', 'mrs-logo-carousel')}
                values={sliderBorder}
                onChange={onChangeSliderBorder}
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
            <p>{__('This color settings will be shown in the front-end', 'mrs-logo-carousel')}</p>
            <Divider />
            {enableNavigationArrows && (
            <>
                <RSRangeControl
                    label={__('Navigation Arrow Size', 'mrs-logo-carousel')}
                    min={5}
                    max={100}
                    attributes={ navigationArrowSize }
                    attributesKey={'navigationArrowSize'}
                    setAttributes={ setAttributes }
                />
                <p>{__('This Navigation arrow size settings will be shown in the front-end', 'mrs-logo-carousel')}</p>
            </>
            )
            }
            
        </PanelBody>
        </>
    );
}

export default StyleTab;