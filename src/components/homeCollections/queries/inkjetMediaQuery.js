
import { useStaticQuery, graphql } from "gatsby"


export const useInkjetMedia = () => {
    const data = useStaticQuery(graphql`
        query  {
            allShopifyProductVariant (filter: {product: {tags: { in: "Inkjet Media"}}}) {
                nodes {
                  compareAtPrice
                  sku
                  title
                  price
                  product {
                    title
                    images {
                      gatsbyImageData(width: 190)
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