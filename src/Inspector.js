import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import TabControls from './component/tabControls/tabControls';
import GeneralTab from './generalTab';
import StyleTab from './styleTab';
import AdvanceTab from './advanceTab';

const Inspector = ({attributes, setAttributes, addSlide=''}) => {
    return (
        <>
        <InspectorControls>
            <TabControls
                GeneralTab={GeneralTab}
                StyleTab={StyleTab}
                attributes={attributes}
                setAttributes={setAttributes}
                AdvancedTab={AdvanceTab}
                addSlide={addSlide}
            />
        </InspectorControls>
        </>
    );
}

export default Inspector;