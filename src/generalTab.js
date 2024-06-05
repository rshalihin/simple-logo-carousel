import { __ } from '@wordpress/i18n';
import { PanelBody, ButtonGroup, Button, SelectControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import Toggle from './component/toggle/toggle';
import RSRangeControl from './component/RSRangeControl/RSRangeControl';
import MRSPanel from './component/mrsPanel/MRSPanel';


const GeneralTab = ({attributes, setAttributes, addSlide=''}) => {

    const { enableTitle, enableDescription, titleTag, descriptionTag, logoPosition, autoPlay, autoPlaySpeed, infiniteLoop, pauseOn, enableNavigationArrows, enablePaginationDots, slidePerView, sliderId, slideSpaceBetween } = attributes;

    const htmlTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
    const desHtmlTags = ['h4', 'h5', 'h6', 'p', 'span', 'div'];

    return(
        <>
        <PanelBody title={ __('Slider', 'mrs-logo-carousel')} initialOpen={true}>
            <RSRangeControl
                label={ __( 'Slide per View', 'mrs-logo-carousel' )}
                min={1}
                max={10}
                attributes={ slidePerView }
                attributesKey={'slidePerView'}
                setAttributes={ setAttributes }
            />
            <Toggle
                label={__( 'Autoplay', 'mrs-logo-carousel' )}
                attributes={ autoPlay }
                attributesKey={'autoPlay'}
                setAttributes={ setAttributes }
            />
            <RSRangeControl
                label={ __( 'Space between Slide', 'mrs-logo-carousel' )}
                min={0}
                max={200}
                attributes={ slideSpaceBetween }
                attributesKey={'slideSpaceBetween'}
                setAttributes={ setAttributes }
            />
            { autoPlay && <>
            <RSRangeControl
                label={ __( 'Autoplay Speed (ms)', 'mrs-logo-carousel' )}
                min={0}
                max={10000}
                attributes={ autoPlaySpeed }
                attributesKey={'autoPlaySpeed'}
                setAttributes={ setAttributes }
            />
            <Toggle
                label={__( 'Infinite Loop', 'mrs-logo-carousel' )}
                attributes={ infiniteLoop }
                attributesKey={'infiniteLoop'}
                setAttributes={ setAttributes }
            />
            <div>Pause On</div>
            <ButtonGroup style={{display: 'flex',  marginTop: '10px'}}>
                <Button className={`mrs-logo-carousel-pause-on ${('Hover' == pauseOn) ? 'active' : ''}`} onClick={()=> setAttributes({pauseOn: 'Hover'})}>Hover</Button>

                <Button className={`mrs-logo-carousel-pause-on ${('Interaction' == pauseOn) ? 'active' : ''}`} onClick={()=> setAttributes({pauseOn: 'Interaction'})}>Interaction</Button>

                <Button className={`mrs-logo-carousel-pause-on ${('None' == pauseOn) ? 'active' : ''}`} onClick={()=> setAttributes({pauseOn: 'None'})}>None</Button>
            </ButtonGroup>
            </>}
        </PanelBody>
        <PanelBody title={ __('Slide', 'mrs-logo-carousel')} initialOpen={false}>
            {sliderId?.map((item, i) => {                
                return(
                    <>
                    <MRSPanel title={__(`${item.id} Slide`, 'mrs-logo-carousel')} open={false} data={item.id} attributes={attributes} setAttributes={setAttributes}>
                    </MRSPanel>
                    </>
                )
            })}
            <div className='mrs-logo-carousel-add-single-slide-sidebar-tab'>
                <Button icon='plus' onClick={addSlide}></Button>
            </div>
            
        </PanelBody>
        <PanelBody title={ __('Navigation', 'mrs-logo-carousel')} initialOpen={false}>
            <Toggle
                label={__( 'Show Navigation Arrow', 'mrs-logo-carousel' )}
                attributes={ enableNavigationArrows }
                attributesKey={'enableNavigationArrows'}
                setAttributes={ setAttributes }
            />
            <Toggle
                label={__( 'Show Pagination Dots', 'mrs-logo-carousel' )}
                attributes={ enablePaginationDots }
                attributesKey={'enablePaginationDots'}
                setAttributes={ setAttributes }
            />
        </PanelBody>
        <PanelBody title={ __('Logo Settings', 'mrs-logo-carousel')} initialOpen={false}>
            <SelectControl
                label={ __('Select Logo Position', 'mrs-logo-carousel' )}
                options={[
                    { label: 'Above Title', value: 'above' },
                    { label: 'Below Title', value: 'below' }
                ]}
                value={ logoPosition }
                onChange={(newPosition) => setAttributes({ logoPosition: newPosition })}
            />

        </PanelBody>
        <PanelBody title={ __( 'Title', 'mrs-logo-carousel' ) } initialOpen={ false }>
            <Toggle
                label={__( 'Enable Title', 'mrs-logo-carousel' )}
                attributes={ enableTitle }
                attributesKey={'enableTitle'}
                setAttributes={ setAttributes }
            />
            { enableTitle && <>
            <p>Please Select a Title Tag</p>
            <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                {htmlTags?.map( (tag, i) =>(
                    <Button key={i} className={`mrs-logo-carousel-title-tag ${(tag == titleTag) ? 'active' : ''}`} onClick={()=> setAttributes({titleTag: tag})}>{tag}</Button>
                ))}
            </ButtonGroup> 
            </>}
        </PanelBody>
        <PanelBody title={ __( 'Description', 'mrs-logo-carousel' ) } initialOpen={ false }>
            <Toggle
                label={__( 'Enable Description', 'mrs-logo-carousel' )}
                attributes={ enableDescription }
                attributesKey={'enableDescription'}
                setAttributes={ setAttributes }
            />
             { enableDescription && <>
            <p>Please Select a Description Tag</p>
            <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                {desHtmlTags?.map( (tag, i) =>(
                    <Button key={i} className={`mrs-logo-carousel-title-tag ${(tag == descriptionTag) ? 'active' : ''}`} onClick={()=> setAttributes({descriptionTag: tag})}>{tag}</Button>
                ))}
            </ButtonGroup> 
            </>}
        </PanelBody>        
        </>
    );
}

export default GeneralTab;