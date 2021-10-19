import React, { useState } from"react"
import { useInkjetMedia } from "./queries/inkjetMediaQuery";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Category,
    Button,
    Products,
    Collections,
    Link,
    Cats,
    CategoryTitle } from "./styles";
import { inkjetMediaCategories } from "./categories";






export default function InkjetMedia() {
    const  data  = useInkjetMedia();
    const  [initialLength, setInitialState] = useState(0);
    

    return (
        <div>
            <CategoryTitle>Inkjet Media</CategoryTitle>
            
            <Category>
                <Button onClick={() => {
                    if (initialLength != 0) { 
                    setInitialState(initialLength - 5)}}}><StaticImage src="https://cdn.shopify.com/s/files/1/0292/8205/files/left-arrow1.png?v=1628794657" style={{width: 25}} />
                </Button>
                        {data.slice(initialLength,initialLength + 5).map(paper => (
                            
                            <Products>
                                <a href={`/${paper.product.handle}`}>
                                <GatsbyImage image={getImage(paper.product.images[0])} style={{width: 190, height: 190}}alt=""/>
                                <h4>{paper.product.title}</h4>
                                </a>
                                <p>Price: {paper.price}</p>
                            </Products>
                            ))}
                <Button onClick={() => {
                    if (initialLength <= data.length - 5) 
                    setInitialState(initialLength + 5)}}><StaticImage src="https://cdn.shopify.com/s/files/1/0292/8205/files/right-arrow1.png?v=1628795125" style={{width: 25, marginLeft: 10}} /> 
                </Button>
                <Cats>
                    <h3>Categories</h3>
                    <div style={{marginTop: -10, marginLeft: 10}}>
                        {inkjetMediaCategories.map(category => (
                            <Link href={category.link}><Collections>• {category.title}</Collections></Link>
                        ))}
                    </div>
                </Cats>
            </Category>
        </div>
    )
}