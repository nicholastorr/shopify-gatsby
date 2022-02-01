
import * as React from 'react';
import img from "./Kong-Banners.jpg";
import styled from 'styled-components';

const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 75px;
`
const BuyNow = styled.a`
    background-color: firebrick;
    font-size: 2em;
    padding: 10px;
    color: white;
    border-radius: 5px;
    position: absolute;
    display: inline-block;
    margin-right: 25%;
    margin-top: 10%;
    @media (max-width: 1365px) {
        margin-right: 32%;
    }
    @media (max-width: 1000px) {
        font-size: 1.5em;
    }
    @media (max-width: 800px) {
        font-size: 1em;
    }
    @media (max-width: 600px) {
        font-size: 0.8em;
    }
    @media (max-width: 500px) {
        font-size: 0.5em;
    }
`

export default function Carousel() {

    return (
        <div>
            <Banner>  
                <img src={img} />
                <BuyNow href="/products/20-lb-plotter-paper/4-36-x-150-rolls-of-20-uncoated-plotter-paper/">
                    <p style={{margin: "0"}}>
                        <strong>Buy Now!</strong>
                    </p>
                </BuyNow>
            </Banner>
            
        </div>
    )
}