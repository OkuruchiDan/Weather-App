import React, {Component} from 'react';
import './ChangeTheme.css';

export class ChangeTheme extends Component {
    render() {
        const { theme , actions: { changeTheme } } = this.props;
        return (
            // <div className={'py-5 col-4 text-center'}>
            //     <button className={'b-radius-25 bg-white border-grey py-1 px-3 lead' } onClick={changeTheme} >{'Dark'}</button>
            // </div>
            <div className={'col-4 d-flex justify-content-center align-items-start pt-4'}>
                <div
                    className={" d-flex col-4 justify-content-center b-radius-25 border-grey shadow-lg p-1"}>
                    <div
                        className={`col-10 p-1 text-center ${theme ? `background-light-blue` : `background-dark-blue-max-min text-white`} b-radius-25 cursor-pointer lead`}
                        onClick={changeTheme}
                    >
                        {theme ? 'Dark' : 'Light'}
                    </div>
                </div>
            </div>
        );
    }
}
