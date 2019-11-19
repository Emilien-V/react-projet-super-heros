import React from "react";

export default function Card() {
    return (
        <div className="card m-3" style={{width: '18rem'}}>
            <img src="https://via.placeholder.com/320x180" className="card-img-top" alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}