import React, { useState } from"react"
import { useInksAndToners  } from "./queries/inksAndTonersQuery";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import { Category,
    Button,
    Products,
    Collections,
    Link,
    Cats,
    CategoryTitle,
    HomeCategories,
    ChildCategoryTitle  } from "./styles";
import {inksAndTonersCategories} from "./categories";


const InkProduct = styled.div`
    width: 210.48px;
    height 325px;
    `



export default function InksAndToners() {
    const  data  = useInksAndToners();
    const  [initialLength, setInitialState] = useState(0);
    

    return (
        <HomeCategories>
            <CategoryTitle>Inks &#38; Toners</CategoryTitle>
                <Button style={{color: "#E95F0A"}} onClick={() => {
                    if (initialLength != 0) { 
                    setInitialState(initialLength - 4)}}}><LeftOutlined style={{cursor: "pointer"}} />Previous
                </Button>
                <Category>
                        {data.slice(initialLength,initialLength + 4).map(paper => ( 
                            <Products>
                                <a href={`/${paper.product.handle}`}>
                                <GatsbyImage image={getImage(paper.product.images[0])} style={{width: 190, height: 190}}alt=""/>
                                <h4>{paper.product.title}</h4>
                                </a>
                                <p>Price: {paper.price}</p>
                            </Products>
                            ))}
                </Category>
                <Button style={{color: "#E95F0A"}} onClick={() => {
                    if (initialLength <= data.length - 4) 
                    setInitialState(initialLength + 4)}}><RightOutlined style={{cursor: "pointer", marginRight: "10px"}} />Load More
                </Button>
                <Cats style={{marginRight: "7px"}}>
                    <ChildCategoryTitle>Categories</ChildCategoryTitle>
                    <div style={{marginLeft: 10}}>
                        {inksAndTonersCategories.map(category => (
                            <Link href={category.link}><Collections>• {category.title}</Collections></Link>
                        ))}
                    </div>
                </Cats>
        </HomeCategories>
    )
}