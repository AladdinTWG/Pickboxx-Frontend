import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import Filter from "./Filter";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Header from "./Header.js";

class MarketPlace extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header/>
        <div className="boxx-search-div">
          <input className="boxx-search" type="text"></input>
          <div className="boxx-nav"></div>
          <ButtonGroup aria-label="Basic example" className="switch">
            <Button className="switch_btn" variant="secondary">
              Give Away
            </Button>
            <Button className="switch_btn" variant="secondary">
              Sale
            </Button>
          </ButtonGroup>
        </div>
        <Filter />
        <div className="marketplace">
          <div className="boxx-array">
            <div className="boxx-container">
              <div className="boxx">
                <img
                  className="product-img"
                  src="https://cdn.shopify.com/s/files/1/1571/0569/products/Gallery-Carry-On-Closet-Red-34_13285af5-000a-40cb-9513-1b4b6d23a79a_900x.png?v=1582913894"
                  alt=""
                />
              </div>
              <div className="boxx_info">
                <div>
                  <b>The Carry-On Closet 2.0</b>
                </div>
                <div>Pack it up, boys, we're going to medical school</div>
                <div>In Stock: 20</div>
                <div>Location for pickup: Macy's</div>
              </div>
            </div>
            <div className="boxx-container">
              <div className="boxx">
                <img
                  className="product-img"
                  src="https://images-na.ssl-images-amazon.com/images/I/717-vZHlvdL._SL1500_.jpg"
                  alt=""
                />
              </div>
              <div className="boxx_info">
                <div>
                  <b>Shampoo</b>
                </div>
                <div>You best be washing yourself, boy</div>
                <div>In Stock: 12</div>
                <div>Location for pickup: CVS</div>
              </div>
            </div>
            <div className="boxx-container">
              <div className="boxx">
                <img
                  className="product-img"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="boxx_info">
                <div>
                  <b>Name</b>
                </div>
                <div>Description</div>
                <div>Location for pickup</div>
              </div>
            </div>
            <div className="boxx-container">
              <div className="boxx">
                <img
                  className="product-img"
                  src="data:image/jpeg;base64,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"
                  alt=''
                />
              </div>
              <div className="boxx_info">
                <div>
                  <b>Name</b>
                </div>
                <div>Description</div>
                <div>Location for pickup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketPlace;
