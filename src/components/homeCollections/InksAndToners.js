import React, { useState } from"react"
import { useInksAndToners  } from "./queries/inksAndTonersQuery";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const Category = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
    align-items: center;
`
const Button = styled.a`

`
const Products = styled.div`
    margin-left: 20px;
    width: 225px;
    height 325px;
`
const Collections = styled.p`
    margin: 0px;
    font-size: .75em;
    text-decoration: none;
`

const Link = styled.a`
    text-decoration: none;
`
const Cats = styled.div`
    margin-top: -75px;
    width: 170px;
    height: 315px;
    `

const categories = [
    {
    title: "Core Adapters",
    link: "core-adapters",
    },
    {
    title: "5000/5500 Dye Inks",
    link: "hp-designjet-5000/5500",
    },
    {
    title: "T610/T620/T770/T790 Inks",
    link: "hp-designjet-t610/t620/t770/t790",
    },
    {
    title: "500/800/815/820 Inks",
    link: "hp-designjet-500/800/815/820",
    },
    {
    title: "T1200/T1300/T2300 Inks",
    link: "hp-designjet-t1100/t1120/t1200/t1300/t2300",
    },
    {
    title: "Z6100 Inks",
    link: "hp-designjet-z6100",
    },
    {
    title: "4000/4020/4500/4520 Inks",
    link: "hp-designjet-4000/4020/4500/4520",
    },
    {
    title: "5000/5500 UV Inks",
    link: "hp-designjet-5000/5500-uv",
    },
    {
    title: "1050/1055 Inks",
    link: "hp-designjet-1050/1055",
    },
    {
    title: "510 Inks",
    link: "hp-designjet-510",
    },
]



export default function InksAndToners() {
    const  data  = useInksAndToners();
    const  [initialLength, setInitialState] = useState(0);
    

    return (
        <div>
            <h2>Inks and Toners</h2>
            <Category>
                <Button onClick={() => {
                    if (initialLength != 0) { 
                    setInitialState(initialLength - 5)}}}><StaticImage src="https://cdn.shopify.com/s/files/1/0292/8205/files/left-arrow1.png?v=1628794657" style={{width: 25 }} />
                </Button>
                        {data.slice(initialLength,initialLength + 5).map(paper => (
                            
                            <Products>
                                <a href={`/${paper.product.handle}`}>
                                <GatsbyImage image={getImage(paper.product.images[0])} style={{width: 190, height: 190}} alt=""/>
                                <h4>{paper.product.title}</h4>
                                </a>
                                <p>Price: {paper.price}</p>
                            </Products>
                            ))}
                <Button onClick={() => {
                    if (initialLength <= data.length - 5) 
                    setInitialState(initialLength + 5)}}><StaticImage src="https://cdn.shopify.com/s/files/1/0292/8205/files/right-arrow1.png?v=1628795125" style={{width: 25 }} />
                </Button>
                <Cats>
                    <h3>Categories</h3>
                    <div style={{marginTop: -10, marginLeft: 10}}>
                        {categories.map(category => (
                            <Link href={category.link}><Collections>• {category.title}</Collections></Link>
                        ))}
                    </div>
                </Cats>
            </Category>
        </div>
    )
}