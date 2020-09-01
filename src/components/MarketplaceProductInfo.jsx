import React, { Component } from 'react';
class MarketplaceProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productListRelated: [
        {
          imageURL: 'https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png',
          productName: 'Related item one',
          price: 120,
          stockAmount: 100,
          location: 'Walmart',
          productID: 4213,
          description: 'Pack it up, boys, we\'re going to medical school'
        },
        {
          imageURL: 'https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png',
          productName: 'Related item two',
          price: 23,
          stockAmount: 122,
          location: 'Costco',
          productID: 5155,
          description: 'You best be washing yourself, boy'
        },
        {
          imageURL: 'https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png',
          productName: 'Related item three',
          price: 82,
          stockAmount: 9,
          location: 'Rite Aid',
          productID: 1679,
          description: 'The Camelbak Chute Mag 1L Water Bottle holds half your recommended daily water, is durable, comfortable and its leakproof design makes it the perfect bottle for you adventures, commutes and everyday hydration.'
        },
        {
          imageURL: 'https://img.pngio.com/box-png-images-free-download-png-box-2258_1747.png',
          productName: 'Related item four',
          price: 11,
          stockAmount: 32,
          location: 'Chuck e Cheese',
          productID: 1124,
          description: 'Good mouse'
        }
      ],
      reviews: ['akes it the perfect bottle for you adventures, commutes and everyday hydration', 'akes it the perfect bottle for you adventures, commutes and everyday hydration', 'akes it the perfect bottle for you adventures, commutes and everyday hydration', 'akes it the perfect bottle for you adventures, commutes and everyday hydration', 'akes it the perfect bottle for you adventures, commutes and everyday hydration', 'akes it the perfect bottle for you adventures, commutes and everyday hydration',],

      currentProduct: 'string'
    }
  }

  cr = "strin"

  componentDidMount = async () => {
    const { currentProduct } = this.props.location.state
    this.setState(() => ({
      currentProduct
    }))
  }

  render() {
    // console.log(this.state.currentProduct)
    return (
      <>
        {
          this.state.currentProduct !== undefined ?
            // {console.log(this.state)}
            <div className='marketplace-product-info-page-container' >
              {/* {console.log(this.state)} */}

              <div className='product-info-page-main'>
                <div className='pipm-first-container'>
                  <div className='product-info-page-main-img-container'>
                    <img src={this.state.currentProduct.imageURL} className='product-info-page-main-img' />
                    <h1>{this.state.currentProduct.productName}</h1>
                  </div>
                  <div className='product-info-page-main-info'>
                    <p className='product-info-page-main-description'>{this.state.currentProduct.description}</p>
                    <div className='product-info-page-main-price-container'>
                      <span>{this.state.currentProduct.price}$</span>
                      <select className='marketplace-select-location'>
                        <option>option one</option>
                        <option>option two</option>
                        <option>option three</option>
                        <option>option four</option>
                      </select>
                      <button className='marketplace-buynow-button'>Buy Now</button>
                    </div>
                  </div>
                </div>


                {/* Related products */}
                <div className='marketplace-related-products'>
                  {this.state.productListRelated.map(ele =>
                    <div className='marketplace-related-products-item'>
                      <img className='related-product-image' src={ele.imageURL} />
                      <h2>{ele.productName}</h2>
                      <p>{ele.price}</p>
                      <p>{ele.location}</p>
                    </div>
                  )}
                </div>

                <div className='customer-reviews-container'>
                  {this.state.reviews.map(ele =>
                    <div className='customer-reviews-item'>
                      <h2>Rating</h2>
                      <p>{ele}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            : <></>
        }
      </>
    );
  }
}

export default MarketplaceProductInfo;