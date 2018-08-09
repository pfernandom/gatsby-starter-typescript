import React from 'react';

const Button = (props: any) => (
    <button onClick={props.onClick} {...props}>
        {props.children}
    </button>
);

export default Button;
