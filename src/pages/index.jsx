import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"
import PlotterPapers from "../components/homeCollections/PlotterPapers";
import styled from "styled-components";
import EngineeringCopierPapers from "../components/homeCollections/EngineeringCopierPaper";
import InkjetMedia from "../components/homeCollections/InkjetMedia";
import InksAndToners from "../components/homeCollections/InksAndToners";



// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  //margin: "0 20% 0 20%",
}

const Container = styled.div`
  margin: 0 35% 0 18.75%;
  `




function Hero (props) {
  return (
    <div className={container}>
      <h1 className={intro}>Welcome to Plotter Paper Direct</h1>
      {!!process.env.GATSBY_DEMO_STORE && (
        <>
          <p className={callOut}>
            It's a proof-of-concept in a box, with 10k products and 30k variants
            to help you get to proof-of-concept as soon as right now.
          </p>
          <p className={callToAction}>
            Hook it up to your own Shopify store data and start customizing in
            minutes by deploying it to Gatsby Cloud for free. Grab your Shopify
            store credentials and
            <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
              <img
                src="https://www.gatsbyjs.com/deploynow.png"
                alt="Deploy to Gatsby Cloud"
                className={deployButton}
              />
            </a>
          </p>
        </>
      )}
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <Container>
        <PlotterPapers />
        <EngineeringCopierPapers />
        <InkjetMedia />
        <InksAndToners />
      </Container>
    </Layout>
  )
}
