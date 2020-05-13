import React, { Component } from "react";
import "./style.css";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {
  state = {
    item: null,
    img: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImgUrl !== prevProps.getImgUrl
    ) {
      this.updateItem();
    }
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          loading: false,
          img: getImgUrl(item)
        });
      })
      .catch(this.onError);
  }

  render() {
    const { item, error, img } = this.state;

    if (!this.state.item) {
      return <span>Select a person</span>;
    }
    const { loading } = this.state;

    const { name } = item;

    const hasData = !(loading || error);

    const spinner = loading ? <Spiner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        <img
          src={img}
          alt=""
          className="person-image"
          width={300}
          height={300}
        />
        {hasData ? (
          <div className="card-body">
            <h2>{name}</h2>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, { item });
              })}
            </ul>
            <ErrorButton />
          </div>
        ) : null}
      </div>
    );
  }
}
