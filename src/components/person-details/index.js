import React from "react";
import "./style.css"

const PersonDetails = ()=> {
    return (
        <div className="person-details card">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FR2-D2&psig=AOvVaw0U1EejsKfY0KfkPAJF9wDt&ust=1588338178971000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjvhPyakOkCFQAAAAAdAAAAABAP" alt="" className="person-image" width={300} height={300}/>
            
            <div className="card-body">
                <h2>R2-D2</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="list-group-item">Text</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="list-group-item">Text</span>
                        <span>43</span>
                    </li>
                    <li className="list-group-item">
                        <span className="list-group-item">Text</span>
                        <span>red</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails