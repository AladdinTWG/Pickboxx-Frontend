import React, { Component } from "react";
import Header from "./Header.js";
import { Link } from "react-router-dom";

class MarketplaceProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productListRelated: [
        {
          imageURL:
            "https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png",
          productName: "Related item one",
          price: 120,
          stockAmount: 100,
          location: "Walmart",
          productID: 4213,
          description: "Pack it up, boys, we're going to medical school",
        },
        {
          imageURL:
            "https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png",
          productName: "Related item two",
          price: 23,
          stockAmount: 122,
          location: "Costco",
          productID: 5155,
          description: "You best be washing yourself, boy",
        },
        {
          imageURL:
            "https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png",
          productName: "Related item three",
          price: 82,
          stockAmount: 9,
          location: "Rite Aid",
          productID: 1679,
          description:
            "The Camelbak Chute Mag 1L Water Bottle holds half your recommended daily water, is durable, comfortable and its leakproof design makes it the perfect bottle for you adventures, commutes and everyday hydration.",
        },
        {
          imageURL:
            "https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png",
          productName: "Related item four",
          price: 11,
          stockAmount: 32,
          location: "Chuck e Cheese",
          productID: 1124,
          description: "Good mouse",
        },
      ],
      reviews: [
        "akes it the perfect bottle for you adventures, commutes and everyday hydration",
        "akes it the perfect bottle for you adventures, commutes and everyday hydration",
        "akes it the perfect bottle for you adventures, commutes and everyday hydration",
        "akes it the perfect bottle for you adventures, commutes and everyday hydration",
        "akes it the perfect bottle for you adventures, commutes and everyday hydration",
        "akes it the perfect bottle for you adventures, commutes and everyday hydration",
      ],
    };
  }

  cr = "strin";

  //   componentDidMount() {
  //     const { test1 } = this.props.location.state;
  //     this.setState({
  //       test1,
  //     });
  //   }

  render() {
    return (
      <div>
        <Header />
        <div className="marketplace-product-info-page-container">
          {console.log(this.state)}
          <h1>{this.state.test1}</h1>
          <div className="product-info-page-main">
            <div className="pipm-first-container">
              <img
                src="https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png"
                className="product-info-page-main-img"
              />
              <div className="product-info-page-main-info">
                <p className="product-info-page-main-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  optio error ad aliquid cupiditate et enim, veritatis natus,
                  quo aperiam modi a assumenda neque delectus facilis amet
                  voluptate quidem ut vel! Neque, reiciendis excepturi dolore
                  nemo voluptates vitae animi, maxime eveniet explicabo
                  doloribus, voluptate nam sunt laboriosam officiis suscipit
                  fuga.
                </p>
                <div className="product-info-page-main-price-container">
                  <span className="price">$$$</span>
                  <select className="marketplace-select-location">
                    <option>option one</option>
                    <option>option two</option>
                    <option>option three</option>
                    <option>option four</option>
                  </select>
                  <Link to="/payment-method">
                    <button className="marketplace-buynow-button">
                      <span className="buy-span">Buy Now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Related products */}
            <div className="marketplace-related-products">
              {this.state.productListRelated.map((ele) => (
                <div className="marketplace-related-products-item">
                  <img className="related-product-image" src={ele.imageURL} />
                  <h2>{ele.productName}</h2>
                  <p>{ele.price}</p>
                  <p>{ele.location}</p>
                </div>
              ))}
            </div>

            <div className="customer-reviews-container">
              {this.state.reviews.map((ele) => (
                <div className="customer-reviews-item">
                  <h2>Rating</h2>
                  <p>{ele}</p>
                  <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">
                      5 stars
                    </label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">
                      4 stars
                    </label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">
                      1 star
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketplaceProductInfo;
