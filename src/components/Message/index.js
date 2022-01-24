import React from 'react';
import "./Message.scss";
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from "classnames";


const Message = ({user, avatar, text, date, itsMe}) => {
    return (
        <div className={classNames('message', {'message__itsMe' : itsMe})}>
            <div className='message__avatar'>
                <img src={avatar} width="50px" height="50px"/>
            </div>
            <div className='message__content'>
                <div className='message__box'>
                    <div className='message__text'>
                        {text}
                    </div>
                </div>
                <div className='message__date'>
                    {formatDistanceToNow(Date.parse(date), {addSuffix: true})}
                </div>
            </div>
        </div>
    );
}

Message.propTypes = {
    user: PropTypes.object,
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string
};


export default Message;