import { useStaticQuery, graphql } from "gatsby"


export const useInksAndToners = () => {
    const data = useStaticQuery(graphql`
        query  {
            allShopifyProductVariant (filter: {product: {tags: { in: "Inks and Toners"}}}) {
                nodes {
                  compareAtPrice
                  sku
                  title
                  price
                  product {
                    title
                    images {
                      gatsbyImageData(width: 200)
                    }
                    tags
                    handle
                  }
                }
              }
            }
        `)

       

        return data.allShopifyProductVariant.nodes;
        }