import React, { useState } from"react"
import { usePlotterPapers } from "./queries/plotterPaperQuery";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Category,
    Button,
    Products,
    Collections,
    Link,
    Cats,
    CategoryTitle,
    HomeCategories,
    ChildCategoryTitle,
    CategoryBody  } from "./styles";

import { plotterPaperCategories } from "./categories";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";






export default function PlotterPapers() {
    const  data  = usePlotterPapers();
    const  [initialLength, setInitialState] = useState(0);
    

    return (
        <HomeCategories>
            <CategoryTitle>Plotter Paper</CategoryTitle>
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
                    if (initialLength <= data.length - 4) 
                    setInitialState(initialLength + 4)}}><RightOutlined style={{cursor: "pointer", marginRight: "10px", marginLeft: "7px"}} />Load More
                </Button>
                <Cats >
                    <ChildCategoryTitle>Categories</ChildCategoryTitle>
                    <div style={{ marginLeft: 10}}>
                        {plotterPaperCategories.map(category => (
                            <Link href={category.link}><Collections>• {category.title}</Collections></Link>
                        ))}
                    </div>
                </Cats>
            </CategoryBody>
        </HomeCategories>
    )
}