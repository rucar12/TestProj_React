import React from 'react';
import classNames from "classnames";
import "./ShadowBox.scss";

const ShadowBox = ({children, className})=> {
    return (
        <div className={classNames('box', className)}>{children}</div>
    );
}


export default ShadowBox;