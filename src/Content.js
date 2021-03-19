import React, { Component } from "react";
import trucks from "./data.json";

const kenworth = trucks.map(

    (trucks) => {
        return(
        <div className="col-12" key={trucks.model}>
            <div className="card text-dark">
                <br></br>
                    <img className="shadow-lg" src={trucks.image} alt={trucks.model} />
                    <div className="card-body">
                        <h2 className="card-title">{trucks.model}</h2>
                        <p className="card-text">{trucks.description}</p>
                    </div>
                </div>
                <br></br>
        </div>
        );
    }
);


class Content extends Component
{
    render()
    {
        return(
            <div className="row">
                {kenworth}
            </div>
        );
    }
}

export default Content;