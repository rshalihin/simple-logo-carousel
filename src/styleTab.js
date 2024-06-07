import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from "@wordpress/block-editor";
import { PanelBody, ButtonGroup, Button, __experimentalDivider as Divider, __experimentalBoxControl as BoxControl, SelectControl } from '@wordpress/components';
import SNDRRangeControl from './component/SNDRRangeControl/SNDRRangeControl';

const StyleTab = ({attributes, setAttributes}) => {

    const {sliderAlignment, sliderBGColor, sliderTitleColor, sliderDesColor, navigationArrowColor, paginationDotColor, enableNavigationArrows,  navigationArrowSize, sliderBorder, sliderBorderStyle, sliderBorderColor, singleSlideBorderColor, singleSlideBorderStyle, singleSlideBorder, singleSlideMargin, singleSlidePadding, contentAlignment } = attributes;

    const onChangeSliderBorder = (newValue) => {
        setAttributes({sliderBorder: newValue});
    }
    const onChangeSingleSlideBorder = (newValue) => {
        setAttributes({singleSlideBorder: newValue});
    }

    const onChangeSingleSlideMargin = (newValue) => {
        setAttributes({singleSlideMargin: newValue});
    }
    const onChangeSingleSlidePadding = (newValue) => {
        setAttributes({singleSlidePadding: newValue});
        console.log(newValue);
    }

    return(
        <>
        <PanelBody title={ __( 'Content', 'sndr-logo-carousel' ) } initialOpen={ false }>
            <p>Text Alignment</p>
            <ButtonGroup className='sndr-logo-carousel-vertical-align-group'>
                <Button className={`sndr-logo-carousel-vertical-align ${('Left' == sliderAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({sliderAlignment: 'Left'})}>Left</Button>

                <Button className={`sndr-logo-carousel-vertical-align ${('Center' == sliderAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({sliderAlignment: 'Center'})}>Center</Button>

                <Button className={`sndr-logo-carousel-vertical-align ${('Right' == sliderAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({sliderAlignment: 'Right'})}>Right</Button>
            </ButtonGroup>
            <Divider />
            <p>Content Alignment</p>
            <ButtonGroup className='sndr-logo-carousel-vertical-align-group'>
                <Button className={`sndr-logo-carousel-vertical-align ${('Top' == contentAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({contentAlignment: 'Top'})}>Top</Button>

                <Button className={`sndr-logo-carousel-vertical-align ${('Center' == contentAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({contentAlignment: 'Center'})}>Center</Button>

                <Button className={`sndr-logo-carousel-vertical-align ${('Bottom' == contentAlignment) ? 'active' : ''}`} onClick={()=> setAttributes({contentAlignment: 'Bottom'})}>Bottom</Button>
            </ButtonGroup>

            <Divider />
            <PanelColorSettings
                title={__('Content Color Settings', 'sndr-logo-carousel')}
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Title Color', 'sndr-log-carousel'),
                        value: sliderTitleColor,
                        onChange: (value) => {
                            setAttributes({sliderTitleColor: value})
                        }
                    },
                    {
                        label: __('Description Color', 'sndr-log-carousel'),
                        value: sliderDesColor,
                        onChange: (value) => {
                            setAttributes({sliderDesColor: value})
                        }
                    },
                    {
                        label: __('Background Color', 'sndr-log-carousel'),
                        value: sliderBGColor,
                        onChange: (value) => {
                            setAttributes({ sliderBGColor: value })
                        }
                    }
                ]}
            />
        </PanelBody>

        <PanelBody title={__('Slider Settings', 'sndr-log-carousel')} initialOpen={false} className='sndr-logo-carousel-style-tab-panel-slider'>
            <PanelColorSettings
                title={__('Slider Border Color', 'sndr-logo-carousel')}
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Slider Border Color', 'sndr-logo-carousel'),
                        value: sliderBorderColor,
                        onChange: (value) => {
                            setAttributes({ sliderBorderColor: value });
                        }
                    }
                ]}
            />
            <SelectControl
                label={__('Border Style', 'sndr-logo-carousel')}
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
                label={__('Slider Border Settings', 'sndr-logo-carousel')}
                values={sliderBorder}
                onChange={onChangeSliderBorder}
            />
            
        </PanelBody>

        <PanelBody title={__('Single Slide Settings', 'sndr-log-carousel')} initialOpen={false} className='sndr-logo-carousel-style-tab-panel-slider'>
            <PanelColorSettings
                title={__('Slider Border Color', 'sndr-logo-carousel')}
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Single Slide Border Color', 'sndr-logo-carousel'),
                        value: singleSlideBorderColor,
                        onChange: (value) => {
                            setAttributes({ singleSlideBorderColor: value });
                        }
                    }
                ]}
            />
            <SelectControl
                label={__('Single Slide Border Style', 'sndr-logo-carousel')}
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
                value={singleSlideBorderStyle}
                onChange={(value) => setAttributes({singleSlideBorderStyle: value})}
            />
            <BoxControl
                label={__('Single Slide Border Settings', 'sndr-logo-carousel')}
                values={singleSlideBorder}
                onChange={onChangeSingleSlideBorder}
            />
            <Divider />
            <BoxControl
                    label={__('Single Slide Margin', 'sndr-logo-carousel')}
                    values={singleSlideMargin}
                    onChange={onChangeSingleSlideMargin}
                />
                <Divider />
                <BoxControl
                    label={__('Single Slide Padding', 'sndr-logo-carousel')}
                    values={singleSlidePadding}
                    onChange={onChangeSingleSlidePadding}
                />        
        </PanelBody>

        <PanelBody title={__('Navigation Settings', 'sndr-log-carousel')} initialOpen={false}>
            <PanelColorSettings
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Navigation Arrow Color', 'sndr-log-carousel'),
                        value: navigationArrowColor,
                        onChange: (value) => {
                            setAttributes({navigationArrowColor: value})
                        }
                    },
                    {
                        label: __('Pagination Dot Color', 'sndr-log-carousel'),
                        value: paginationDotColor,
                        onChange: (value) => {
                            setAttributes({paginationDotColor: value})
                        }
                    }
                ]}
            />
            <p>{__('This color settings will be shown in the front-end', 'sndr-logo-carousel')}</p>
            <Divider />
            {enableNavigationArrows && (
            <>
                <SNDRRangeControl
                    label={__('Navigation Arrow Size', 'sndr-logo-carousel')}
                    min={5}
                    max={100}
                    attributes={ navigationArrowSize }
                    attributesKey={'navigationArrowSize'}
                    setAttributes={ setAttributes }
                />
                <p>{__('This Navigation arrow size settings will be shown in the front-end', 'sndr-logo-carousel')}</p>
            </>
            )
            }
            
        </PanelBody>
        </>
    );
}

export default StyleTab;