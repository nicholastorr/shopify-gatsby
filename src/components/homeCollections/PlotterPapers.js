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
    ChildCategoryTitle  } from "./styles";

import { plotterPaperCategories } from "./categories";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";






export default function PlotterPapers() {
    const  data  = usePlotterPapers();
    const  [initialLength, setInitialState] = useState(0);
    

    return (
        <HomeCategories>
            <CategoryTitle>Plotter Paper</CategoryTitle>
            <Category>
                <Button onClick={() => {
                    if (initialLength != 0) { 
                    setInitialState(initialLength - 5)}}}><LeftOutlined style={{cursor: "pointer"}} />
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
                    setInitialState(initialLength + 5)}}><RightOutlined style={{cursor: "pointer", marginRight: "10px", marginLeft: "7px"}} /> 
                </Button>
                <Cats style={{marginTop: "-100px"}}>
                    <ChildCategoryTitle>Categories</ChildCategoryTitle>
                    <div style={{ marginLeft: 10}}>
                        {plotterPaperCategories.map(category => (
                            <Link href={category.link}><Collections>• {category.title}</Collections></Link>
                        ))}
                    </div>
                </Cats>
            </Category>
        </HomeCategories>
    )
}