import React from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {
    return (
        <div className={classnames("form-group", {'has-danger': error})}>
            <label className="form-control-label">{label}</label>
            <input
                   type={type}
                   onBlur={checkUserExists}
                   value={value}
                   onChange={onChange}
                   name={field}
                   className={classnames("form-control", {'is-invalid': error})}/>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;