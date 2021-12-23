import React from 'react'
//import {Section} from 'react-scroll'
//import { Element } from 'react-scroll'
import "./Product.css"
//import image from "../../assets/newfresh.jpg"


const Product = () => {
    return (
        <div>
        <div className="productcontainer">
            <div className="product__head">
                <h1>farm2bag</h1>
            </div>
            <div className="product__para">
                <p>We are selling vegitables ,fruits and groceries through online</p>
            </div>
            <div className="product__button">
            <a href="farm2bag.com">
                <button>Check out</button>
                </a>
            </div>
        </div>
        {/* Second content*/}
        <div className="productcontainer2">
            <div className="productcontainer2__para">
                <p>Why order with farm2bag</p>
            </div>
            {/* <div className="productcontainer2__image">
                <img className="productcontainer2__image1" src={image} alt="/"></img>
                <img className="productcontainer2__image2" src={image} alt="/"></img>
                <img className="productcontainer2__image3" src={image} alt="/"></img>
            </div> */}
            <div className="productcontainer2__head">
                <p className="productcontainer2__head1">Fresh and Organic</p>
                <p className="productcontainer2__head2">Offers and Quality</p>
                <p className="productcontainer2__head3">Fast delivery</p>
            </div>
            <div className="productcontainer2__content">
                <p className="productcontainer2__content1">Our company are buying vegitables and fruits from trusted farmers and we have double checked the product is Organic. We are selling only before two days harvested products</p><br/>
                <p className="productcontainer2__content2">The quality of the products are completly different from others. also We are providing combo offers and individual offers </p><br/>
                <p className="productcontainer2__content3">if you order today , the delivery be at your home tommorow .if the customer need an immediate delivery depends on the weather and the cost would be change for immediate delivery</p><br/>
            </div>
        </div>
        <div className="containerbottom">
            <p>Order now                                    <span><a href="www.farm2bag.com">www.farm2bag.com</a></span>and<span><a href="www.farm2bag.com">www.far2bag.com app</a></span></p>
        </div>
        </div>
    )
}

export default Product
