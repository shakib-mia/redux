import React from 'react';

const Button = ({text, onclick, className}) => {
    return (
        <button className={className} onClick={onclick}>{text}</button>
    );
};

export default Button;