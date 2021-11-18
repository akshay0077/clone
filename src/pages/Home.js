import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from "../components/Search";

function Home() {

    return (
        <div className='home'>
            {/*<h1>This is home page</h1>*/}
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar
                        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                        style={{border: "1px solid green"}}
                    />
                </div>
            </div>
            <div className="home_body">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    alt=""/>
                <div className="home_inputContainer">
                    {/*<Search/>*/}
                    <Search/>
                </div>
            </div>
            <div className="footer">
                <h4>Developed by Kher Akshay</h4>
            </div>
        </div>
    );

}

export default Home;
