import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"
import EngineeringCopierPapers   from "./types/EngineeringCopierPaper/EngineeringCopierPaper"
import PlotterPapers from "./types/PlotterPaper";
import InkjetMedia from "./types/inkjetmedia/InkjetMedia";
import InksAndToners from "./types/InksandToners/InksAndToners"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    
    <div class="header-nav">
    <PlotterPapers />
    <EngineeringCopierPapers />
    <InkjetMedia />
    <InksAndToners />
    </div>
    /*<nav className={[navStyle, className].join(" ")}>

      
     
      <Link
        key="All"
        className={navLink}
        to="/products/"
        activeClassName={activeLink}
      >
        All products
      </Link>
      
      
      {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))}
    </nav>*/
    
  )
}
