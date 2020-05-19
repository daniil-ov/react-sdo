import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import React from "react";

export default function validateInput(data) {
    let errors = {};

    Object.keys(data).map((key) => {
        if (Validator.isEmpty(data[key])) {
            errors[key] = 'Заполните поле';
        }
    });

    return {
        errors,
        isValid: isEmpty(errors)
    }
}