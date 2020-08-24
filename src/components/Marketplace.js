import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import Filter from "./Filter";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Header from "./Header.js";

class MarketPlace extends Component {
  state = {
    productList: [
      {
        imageURL: 'https://cdn.shopify.com/s/files/1/1571/0569/products/Gallery-Carry-On-Closet-Red-34_13285af5-000a-40cb-9513-1b4b6d23a79a_900x.png?v=1582913894',
        productName: 'The Carry-On Closet 2.0',
        stockAmount: 20,
        location: 'Macy\'s',
        productID: 123,
        description: 'Pack it up, boys, we\'re going to medical school'
      },
      {
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/717-vZHlvdL._SL1500_.jpg',
        productName: 'Shampoo',
        stockAmount: 12,
        location: 'CVS',
        productID: 445,
        description: 'You best be washing yourself, boy'
      },
      {
        imageURL: 'https://www.wigglestatic.com/product-media/100482706/Camelbak-Chute-Mag-1L-Water-Bottles-Bluegrass-SS18-1513401001-7.jpg?w=430&h=430&a=7',
        productName: 'Camelback Reusable Water Bottle',
        stockAmount: 1,
        location: 'Target',
        productID: 191,
        description: 'The Camelbak Chute Mag 1L Water Bottle holds half your recommended daily water, is durable, comfortable and its leakproof design makes it the perfect bottle for you adventures, commutes and everyday hydration.'
      },
      {
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81A11OxpgXL._AC_SL1500_.jpg',
        productName: 'Deathadder Mouse',
        stockAmount: 1,
        location: 'Best Buy',
        productID: 624,
        description: 'Good mouse'
      }
    ],
    currentProduct: "this product"
  };
  render() {
    return (
      <div>
        <Header />
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
            {
              this.state.productList.map(ele =>
                <Link
                  className='boxx-container'
                  to={{
                    pathname: `/marketplace/products/${ele.productName}/${ele.productID}`,
                    state: { test1: 'testw' }
                  }}>
                  <div className="boxx">
                    <img
                      className="product-img"
                      src={ele.imageURL}
                      alt=""
                    />
                    {console.log(ele)}
                    <div className="boxx_info">
                      <div>
                        <b>{ele.productName}</b>
                      </div>
                      <div>{ele.description}</div>
                      <div>In Stock: {ele.stockAmount}</div>
                      <div>Location for pickup: {ele.location}</div>
                    </div>
                  </div>

                </Link>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MarketPlace;
