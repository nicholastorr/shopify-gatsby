import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink, headerNav } from "./navigation.module.css"
import EngineeringCopierPapers   from "./types/EngineeringCopierPaper/EngineeringCopierPaper"
import InkjetMedia from "./types/inkjetmedia/InkjetMedia";
import InksAndToners from "./types/InksandToners/InksAndToners";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PlotterPapers from "./types/PlotterPaper/PlotterPaper";
import "antd/dist/antd.css";

export function Navigation({ className }) {

  const plotterpapers = PlotterPapers();
  const engineeringcopierpapers = EngineeringCopierPapers();
  const inkjetmedia = InkjetMedia();
  const inksandtoners = InksAndToners();
  
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
    
    <div className={headerNav}>
      <Dropdown overlay={plotterpapers}>
        <h2>Plotter Papers</h2>
      </Dropdown>
      <Dropdown overlay={engineeringcopierpapers}>
        <h2>Engineering Copier Paper</h2>
      </Dropdown>
      <Dropdown overlay={inkjetmedia}>
        <h2>Inkjet Media</h2>
      </Dropdown>
      <Dropdown overlay={inksandtoners}>
        <h2>Inks and Toners</h2>
      </Dropdown>
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
