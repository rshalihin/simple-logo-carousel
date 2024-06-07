import { __ } from '@wordpress/i18n';
import { PanelBody, ButtonGroup, Button, SelectControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import Toggle from './component/toggle/toggle';
import SNDRRangeControl from './component/SNDRRangeControl/SNDRRangeControl';
import SNDRPanel from './component/sndrPanel/SNDRPanel';


const GeneralTab = ({attributes, setAttributes, addSlide=''}) => {

    const { enableTitle, enableDescription, titleTag, descriptionTag, logoPosition, autoPlay, autoPlaySpeed, infiniteLoop, pauseOn, enableNavigationArrows, enablePaginationDots, slidePerView, sliderId, slideSpaceBetween } = attributes;

    const htmlTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
    const desHtmlTags = ['h4', 'h5', 'h6', 'p', 'span', 'div'];

    return(
        <>
        <PanelBody title={ __('Slider', 'sndr-logo-carousel')} initialOpen={true}>
            <SNDRRangeControl
                label={ __( 'Slide per View', 'sndr-logo-carousel' )}
                min={1}
                max={10}
                attributes={ slidePerView }
                attributesKey={'slidePerView'}
                setAttributes={ setAttributes }
            />
            <Toggle
                label={__( 'Autoplay', 'sndr-logo-carousel' )}
                attributes={ autoPlay }
                attributesKey={'autoPlay'}
                setAttributes={ setAttributes }
            />
            <SNDRRangeControl
                label={ __( 'Space between Slide', 'sndr-logo-carousel' )}
                min={0}
                max={200}
                attributes={ slideSpaceBetween }
                attributesKey={'slideSpaceBetween'}
                setAttributes={ setAttributes }
            />
            { autoPlay && <>
            <SNDRRangeControl
                label={ __( 'Autoplay Speed (ms)', 'sndr-logo-carousel' )}
                min={0}
                max={10000}
                attributes={ autoPlaySpeed }
                attributesKey={'autoPlaySpeed'}
                setAttributes={ setAttributes }
            />
            <Toggle
                label={__( 'Infinite Loop', 'sndr-logo-carousel' )}
                attributes={ infiniteLoop }
                attributesKey={'infiniteLoop'}
                setAttributes={ setAttributes }
            />
            <div>Pause On</div>
            <ButtonGroup style={{display: 'flex',  marginTop: '10px'}}>
                <Button className={`sndr-logo-carousel-pause-on ${('Hover' == pauseOn) ? 'active' : ''}`} onClick={()=> setAttributes({pauseOn: 'Hover'})}>Hover</Button>

                <Button className={`sndr-logo-carousel-pause-on ${('Interaction' == pauseOn) ? 'active' : ''}`} onClick={()=> setAttributes({pauseOn: 'Interaction'})}>Interaction</Button>

                <Button className={`sndr-logo-carousel-pause-on ${('None' == pauseOn) ? 'active' : ''}`} onClick={()=> setAttributes({pauseOn: 'None'})}>None</Button>
            </ButtonGroup>
            </>}
        </PanelBody>
        <PanelBody title={ __('Slide', 'sndr-logo-carousel')} initialOpen={false}>
            {sliderId?.map((item, i) => {                
                return(
                    <>
                    <SNDRPanel title={__(`${item.id} Slide`, 'sndr-logo-carousel')} open={false} data={item.id} attributes={attributes} setAttributes={setAttributes}>
                    </SNDRPanel>
                    </>
                )
            })}
            <div className='sndr-logo-carousel-add-single-slide-sidebar-tab'>
                <Button icon='plus' onClick={addSlide}></Button>
            </div>
            
        </PanelBody>
        <PanelBody title={ __('Navigation', 'sndr-logo-carousel')} initialOpen={false}>
            <Toggle
                label={__( 'Show Navigation Arrow', 'sndr-logo-carousel' )}
                attributes={ enableNavigationArrows }
                attributesKey={'enableNavigationArrows'}
                setAttributes={ setAttributes }
            />
            <Toggle
                label={__( 'Show Pagination Dots', 'sndr-logo-carousel' )}
                attributes={ enablePaginationDots }
                attributesKey={'enablePaginationDots'}
                setAttributes={ setAttributes }
            />
        </PanelBody>
        <PanelBody title={ __('Logo Settings', 'sndr-logo-carousel')} initialOpen={false}>
            <SelectControl
                label={ __('Select Logo Position', 'sndr-logo-carousel' )}
                options={[
                    { label: 'Above Title', value: 'above' },
                    { label: 'Below Title', value: 'below' }
                ]}
                value={ logoPosition }
                onChange={(newPosition) => setAttributes({ logoPosition: newPosition })}
            />

        </PanelBody>
        <PanelBody title={ __( 'Title', 'sndr-logo-carousel' ) } initialOpen={ false }>
            <Toggle
                label={__( 'Enable Title', 'sndr-logo-carousel' )}
                attributes={ enableTitle }
                attributesKey={'enableTitle'}
                setAttributes={ setAttributes }
            />
            { enableTitle && <>
            <p>Please Select a Title Tag</p>
            <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                {htmlTags?.map( (tag, i) =>(
                    <Button key={i} className={`sndr-logo-carousel-title-tag ${(tag == titleTag) ? 'active' : ''}`} onClick={()=> setAttributes({titleTag: tag})}>{tag}</Button>
                ))}
            </ButtonGroup> 
            </>}
        </PanelBody>
        <PanelBody title={ __( 'Description', 'sndr-logo-carousel' ) } initialOpen={ false }>
            <Toggle
                label={__( 'Enable Description', 'sndr-logo-carousel' )}
                attributes={ enableDescription }
                attributesKey={'enableDescription'}
                setAttributes={ setAttributes }
            />
             { enableDescription && <>
            <p>Please Select a Description Tag</p>
            <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                {desHtmlTags?.map( (tag, i) =>(
                    <Button key={i} className={`sndr-logo-carousel-title-tag ${(tag == descriptionTag) ? 'active' : ''}`} onClick={()=> setAttributes({descriptionTag: tag})}>{tag}</Button>
                ))}
            </ButtonGroup> 
            </>}
        </PanelBody>        
        </>
    );
}

export default GeneralTab;