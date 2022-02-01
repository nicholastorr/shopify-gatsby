import React, { useState } from"react"
import { useEngineeringCopierPapers } from "./queries/engineeringCopierPaperQuery";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Category,
    Button,
    Products,
    Collections,
    Link,
    Cats,
    CategoryTitle,
    HomeCategories,
    ChildCategoryTitle,
    CategoryBody } from "./styles";

import { engineeringCopierPaperCategories } from "./categories";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";



export default function EngineeringCopierPapers() {
    const  data  = useEngineeringCopierPapers();
    const  [initialLength, setInitialState] = useState(0);
    
    
    return (
        <HomeCategories>
            <CategoryTitle>Engineering Copier Paper</CategoryTitle>
            <CategoryBody>
                <Button style={{color: "#E95F0A"}} id="load-less" onClick={() => {
                    if (initialLength != 0) { 
                    setInitialState(initialLength - 4)}}}><LeftOutlined style={{cursor: "pointer"}} />Previous
                </Button>
                <Category>
                        {data.slice(initialLength,initialLength + 4).map(paper => (
                            <Products>    
                                <a href={`/${paper.product.handle}`}>
                                <GatsbyImage image={getImage(paper.product.images[0])} style={{width: 190, height: 190}} alt=""/>
                                <h4>{paper.product.title}</h4>
                                </a>
                                <p>Price: {paper.price}</p>
                            </Products>
                            ))}
                </Category>
                <Button style={{color: "#E95F0A"}} id="load-more" onClick={() => {
                    if (initialLength <= data.length - 5) 
                    setInitialState(initialLength + 4)}}><RightOutlined style={{cursor: "pointer", marginRight: "10px", marginLeft: "7px"}} />Load More
                </Button>
                <Cats style={{}}>
                    <ChildCategoryTitle>Categories</ChildCategoryTitle>
                    <div style={{marginLeft: 10}}>
                        {engineeringCopierPaperCategories.map(category => (
                            <Link href={category.link}><Collections>• {category.title}</Collections></Link>
                        ))}
                    </div>
                </Cats>
                </CategoryBody>
        </HomeCategories>
    )
}