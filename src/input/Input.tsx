import React, {ChangeEvent} from 'react';
import './Input.css'

type InputPropsType = {
    callback: (s: string) => void
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }

    return (
        <div>
            <input className='Input' type={"text"} onChange={onChangeHandler}></input>
        </div>
    );
};

export default Input;