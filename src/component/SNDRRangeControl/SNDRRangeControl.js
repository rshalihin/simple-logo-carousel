import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';

import './SNDRRangeControl.scss';

const SNDRRangeControl = ({label, attributes, attributesKey, setAttributes, min ='', max=''}) => {
    return (
        <>
            <div className="mrs-box-control mrs-component-mb">
                <RangeControl
                    label={label}
                    value={ attributes }
                    min={min}
                    max={max}
                    onChange={ (newValue) => setAttributes({ [attributesKey]: newValue }) }
                />
            </div>
        </>
    )
}

export default SNDRRangeControl;