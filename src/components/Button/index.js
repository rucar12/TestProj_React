import React from 'react';
import {Button as  BaseButton} from "antd";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./Button.scss";

const Button = props=> {
    return (
        <BaseButton  className={classNames("button", props.className)} {...props}/>
    );
}

Button.propTypes = {
    className: PropTypes.string
};

export default Button;