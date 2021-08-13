import { useStaticQuery, graphql } from "gatsby"


export const useEngineeringCopierPapers = () => {
    const data = useStaticQuery(graphql`
        query  {
            allShopifyProductVariant (filter: {product: {tags: { in: "Engineering Copier Paper"}}}) {
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