import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './form-input.styles';

const FormInput = ({ handlechange, label, ...otherProps }) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handlechange} {...otherProps} />
            {
                label ? (
                    <FormInputLabel className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </FormInputLabel>
                )
                    : null
            }
        </GroupContainer>
    )
}

export default FormInput;