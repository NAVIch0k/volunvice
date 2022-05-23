import React from 'react'
import s from './Forms_controls.module.css'

export const Form_control = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError && s.error)}>
            <Element {...input} {...props} />
            <div>
                {hasError && <span> поле обязательно для заполнения </span>}
            </div>
        </div>
    );
};