import React, {Component} from "react";

export default class ItemList extends Component  {
    render() {
        return (
            <ul className="item-list group-list">
                <li className="list-group-item">Luke</li>
                <li className="list-group-item">Dart</li>
                <li className="list-group-item">R2-D2</li>
            </ul>
        )
    }
}
