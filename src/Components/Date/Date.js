import React from 'react';
import './Date.css';

export function DateComponent(props) {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];// month array
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];// days array

        //building date structure
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    };
    return (
        <div className={"date pl-3"}>
            {dateBuilder(new Date())}
        </div>
    );
}



