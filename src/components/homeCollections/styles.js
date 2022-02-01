import styled from "styled-components";



export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    align-items: center;
    margin-top: 17px;
    margin-bottom: 50px;    
    @media (max-width: 1400px) {
        margin-bottom: -50px;
    }
    @media (max-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
        margin: 0;
        justify-content: space-around;
        margin-bottom: -25px;
    }
`
export const Button = styled.a`

`
export const Products = styled.div`
    margin-left: 20px;
    width: 225px;
    height 325px;
    @media (max-width: 550px) {
        img {
            width: 140px;
            height: 140px;
        }
        width: 140px;
        margin-left: 5px;
    }
`
export const Collections = styled.p`
    margin: 0px;
    font-size: 1em;
    text-decoration: none;
    margin-bottom: 7px;
    color: #000000;
`

export const Link = styled.a`
    text-decoration: none;

`
export const Cats = styled.div`
    @media (max-width: 550px) {
        margin-top: 30px;
    }

    @media (max-width: 1400px) {
        margin-top: 25px;
    }
`
export const CategoryTitle = styled.h2`
    font-size: 1.5em;
`

export const HomeCategories = styled.div`
    margin-bottom: 20px;
    width: 75vw;
`

export const ChildCategoryTitle = styled.h3`
    padding-bottom: 10px;
    color: #b22222;
    font-size: 20px;
    border-bottom: 1px solid #d9381e;
    margin-bottom: 10px;
    `

export const CategoryBody = styled.div`
    @media (min-width: 1400px) {
        display: flex;
        flex-direction: row;
        #load-more, #load-less {
            margin-top: 120px;
        }
    }
`