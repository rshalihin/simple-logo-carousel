import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import Toggle from './component/toggle/toggle';
import {  } from '@wordpress/components';

const AdvanceTab = ({attributes, setAttributes}) => {
    const { desktopHide, tabletHide, mobileHide, sliderMargin, sliderPadding } = attributes;

    const onChangeSliderMargin = (value) => {       
        setAttributes({ sliderMargin: value });
    }

    const onChangeSliderPadding = (value) => {
        setAttributes({ sliderPadding: value });
    }
    
    return(
        <>
            <PanelBody title={ __( 'Spacing', 'sndr-logo-carousel' ) } initialOpen={ true } className='sndr-logo-carousel-advance-tab-panel'>
                <BoxControl
                    label={__('Margin', 'sndr-logo-carousel')}
                    values={sliderMargin}
                    onChange={onChangeSliderMargin}
                />
                <BoxControl
                    label={__('Padding', 'sndr-logo-carousel')}
                    values={sliderPadding}
                    onChange={onChangeSliderPadding}
                />
            </PanelBody>
            <PanelBody title={ __( 'Responsive', 'sndr-logo-carousel' ) } initialOpen={ true }>
                <Toggle
                    label={__( 'Hide on Desktop', 'sndr-logo-carousel' )}
                    attributes={ desktopHide }
                    attributesKey={'desktopHide'}
                    setAttributes={ setAttributes }
                />
                <Toggle 
                    label={ __( 'Hide on Tablet', 'sndr-logo-carousel' )}
                    attributes={ tabletHide }
                    attributesKey={ 'tabletHide' }
                    setAttributes={ setAttributes }
                />
                <Toggle
                    label={ __( 'Hide on Mobile', 'sndr-logo-carousel' )}
                    attributes={ mobileHide }
                    attributesKey={ 'mobileHide' }
                    setAttributes={ setAttributes }
                />
            </PanelBody>
        </>
    );
}

export default AdvanceTab;