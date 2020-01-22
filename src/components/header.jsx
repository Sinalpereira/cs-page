import React, { Component } from 'react';
import logo from '../Task File Icons/ct_logo.svg';
import todoTask from '../Task File Icons/to_do_task.svg';
import questionMark from '../Task File Icons/question_mark.svg';
import userName from '../Task File Icons/user_name_avatar.svg';
import dropdown from '../Task File Icons/grey_drop_down.svg';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="contentstack-logo-wrapper-div">
                        <img
                            src={logo}
                            alt="contentstack-logo"
                            className="contentstack-logo"
                        />
                    </div>

                    <div className="stack-name">
                        <span className="stack-value">Neon Research Labs</span>
                        <span><img src={dropdown} alt="dropdown" class="dropdown-list"></img></span>
                    </div>
                    <div className="navbar">
                        <ul className="nav-list">
                            <li className="list-name"><a className="nav-link">Dashboard</a></li>
                            <li className="list-name"><a className="nav-link">Content Model</a></li>
                            <li className="list-name"><a className=" nav-link entry-link">Entries</a></li>
                            <li className="list-name"><a className="nav-link">Assets</a></li>
                            <li className="list-name"><a className="nav-link">Settings</a></li>
                        </ul>
                    </div>
                    <div className="header-right-images">
                        <img src={todoTask} alt="to-do-task" className="to-do-task"></img>
                        <img src={questionMark} alt="question-mark" className="question-mark"></img>
                        <img src={userName} alt="user-name-avatar" className="user-name-avatar"></img>
                        <img src={dropdown} alt="dropdown-icon" className="dropdown-icon"></img>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;