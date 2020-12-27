import React from 'react';
import './header.component.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon_user" />
            </IconButton>
            <img className="Header_img" src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="Header_tinder_logo" />
            <IconButton>
                <ChatIcon fontSize="large" className="header_icon_chat" />
            </IconButton>
        </div>
    )
}

export default Header;