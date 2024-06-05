import { __ } from '@wordpress/i18n';
import {
	ToggleControl,
} from '@wordpress/components';

import './toggle.scss';

const Toggle = ({label, attributes, attributesKey, setAttributes}) => {
    return (
        <>
            <div className="mrs-toggle mrs-component-mb">
                <ToggleControl
                    label={label}
                    checked={ attributes }
                    onChange={ () => setAttributes({ [attributesKey]: ! attributes }) }
                />
            </div>
        </>
    )
}

export default Toggle;