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
            <PanelBody title={ __( 'Spacing', 'mrs-logo-carousel' ) } initialOpen={ true } className='mrs-logo-carousel-advance-tab-panel'>
                <BoxControl
                    label={__('Margin', 'mrs-logo-carousel')}
                    values={sliderMargin}
                    onChange={onChangeSliderMargin}
                />
                <BoxControl
                    label={__('Padding', 'mrs-logo-carousel')}
                    values={sliderPadding}
                    onChange={onChangeSliderPadding}
                />
            </PanelBody>
            <PanelBody title={ __( 'Responsive', 'mrs-logo-carousel' ) } initialOpen={ true }>
                <Toggle
                    label={__( 'Hide on Desktop', 'mrs-logo-carousel' )}
                    attributes={ desktopHide }
                    attributesKey={'desktopHide'}
                    setAttributes={ setAttributes }
                />
                <Toggle 
                    label={ __( 'Hide on Tablet', 'mrs-logo-carousel' )}
                    attributes={ tabletHide }
                    attributesKey={ 'tabletHide' }
                    setAttributes={ setAttributes }
                />
                <Toggle
                    label={ __( 'Hide on Mobile', 'mrs-logo-carousel' )}
                    attributes={ mobileHide }
                    attributesKey={ 'mobileHide' }
                    setAttributes={ setAttributes }
                />
            </PanelBody>
        </>
    );
}

export default AdvanceTab;