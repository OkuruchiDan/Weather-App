import React, {useState} from 'react';
import './Search.css';

export function Search(props) {
    const [inputValue , setInputValue] = useState(''); // control input
    const { actions: { getApi } } = props; // action for fetching
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const search = e => {
        if (e.key === "Enter") {
            getApi(inputValue);// using action for fetch data with input value as payload
            setInputValue('');// clean input
        }
    };
    return (
        <div className={'d-flex justify-content-center '}>
            <input className={"search "} type="text" placeholder={"Search"} value={inputValue} onChange={onInputChange}
                   onKeyDown={search}/>
        </div>
    );
}
