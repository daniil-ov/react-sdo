import React, {useState} from 'react'
import classnames from "classnames";
import Select from 'react-select'

const SelectMenu = ({label, options, error, value, name, data_prob, set_data_prob}) => {

    const options_map = new Map();
    options.map((obj) => options_map.set(obj.value, obj.label));

    const [select_state, set_select_state] = useState({
        value: value,
        label: options_map.get(value)
    });

    const onChangeSelect = (selectedOption) => {
        set_select_state(selectedOption);
        data_prob[name] = selectedOption.value;
        set_data_prob(data_prob => ({...data_prob, ...data_prob}));
    };


    return (
        <div className={classnames("form-group", {'has-danger': error})}>
            <label className="form-control-label">{label}</label>
            <Select
                name={name}
                value={select_state}
                onChange={onChangeSelect}
                options={options}/>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

export default SelectMenu;