import React, { Component } from "react";



class Header extends Component {
    render() {
        return (
            <header>
                <div className="p-5 text-center bg-light text-dark">
                    <h1 className="mb-3">Kenworths</h1>
                    <img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Kenworth Trucks" />
                    <h4 className="mb-3">View our available models</h4>
                    <p>Note this application was created using react version 17.0.1. You can check this in your applications package.json file.</p>
                    <p>All you need is the /public/images folder, and all the files contained within the /src folder, and include this into your own react application.</p>
                    <p>This application has 3 components (Main, Header and Content). The Main component contains the Header and Content components and is then used in the index.js file. The Header component contains the logo and heading and also this information you are reading. The Content component reads data from the JSON file, interates through the JSON file using the JS method .map and displays the content below (as you can see).</p>
                    <p>This application has been styled using the Bootstrap css library.</p>
                    <a href="https://github.com/TuhakarainaB/6210_A1_Sample" className="btn btn-dark">Link to the GitHub Repository for this app.</a>
                </div>
                <br></br>
            </header>
        );
    }
}

export default Header;