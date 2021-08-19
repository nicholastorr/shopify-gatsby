
import * as React from 'react';
import img from "./Kong-Banners.jpg";
import styled from 'styled-components';

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 75px;
`
const BuyNow = styled.a`
    background-color: firebrick;
    font-size: 2em;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-left: -400px;
    margin-top: -100px;
    margin-bottom: 50px;
`

export default function Carousel() {

    return (
        <div>
            <Banner>  
                <img src={img} />
                <BuyNow href="/products/20-lb-plotter-paper/4-36-x-150-rolls-of-20-uncoated-plotter-paper/">
                    <p >
                        <strong>Buy Now!</strong>
                    </p>
                </BuyNow>
            </Banner>
            
        </div>
    )
}