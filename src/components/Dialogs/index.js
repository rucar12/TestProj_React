import React from 'react';
import "./Dialogs.scss";
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from "classnames";


const Dialogs = ({user, avatar, text, date}) => {
    return (
        <div className={"container"}>
            <div className={classNames('dialog')}>
                <div className='dialog__avatar'>
                    <img src={avatar} width="50px" height="50px"/>
                </div>
                <div className='dialog__content'>
                    <div className='dialog__box'>
                        <div className='dialog__user'>
                            {user}
                        </div>
                        <div className='dialog__text'>
                            {text}
                        </div>
                    </div>

                </div>
                <div className='dialog__date'>
                    {formatDistanceToNow(Date.parse(date), {addSuffix: true})}
                </div>
            </div>
        </div>
    );
}

Dialogs.propTypes = {
    user: PropTypes.object,
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string
};


export default Dialogs;