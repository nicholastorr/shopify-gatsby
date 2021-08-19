import React, { useState } from"react"
import { usePlotterPapers } from "./queries/plotterPaperQuery";
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
    title: "20 lb. Plotter Paper",
    link: "/20-lb-plotter-paper"
    },
    {
    title: "24 lb. Plotter Paper",
    link: "/24-lb-plotter-paper"
    },
    {
    title: "18 lb. Translucent Bond",
    link: "/18-lb-translucent-bond"
    },
    {
    title: "24 lb. Coated Bond",
    link: "/24-lb-coated-bond"
    },
    {
    title: "36 lb. Coated Bond",
    link: "/36-lb-coated-bond"
    },
    {
    title: "46 lb. Coated Bond",
    link: "/46-lb-coated-bond"
    },
    {
    title: "20 lb. Inkjet Vellum",
    link: "/20-lb-inkjet-vellum"
    },
    {
    title: "Inkjet Matte Mylar",
    link: "/inkjet-matte-mylar"
    },
    {
    title: "Inkjet Clear Film",
    link: "/inkjet-clear-film"
    },
    {
    title: "20 lb. Inkjet Tinted/Colored Bond",
    link: "/20-lb-inkjet-tinted-colored-bond"
    }
]



export default function PlotterPapers() {
    const  data  = usePlotterPapers();
    const  [initialLength, setInitialState] = useState(0);
    

    return (
        <div>
            <h2>Plotter Paper</h2>
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