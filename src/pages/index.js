import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Which EV (Electric Vehicle) is the Right One For Me?</h1>
    <p>So many choices. It might be that there isn’t a bad one in the lot! But everyone has specific considerations like <i>length of commute</i>, <i>price</i>, <i>vehicle size</i> – let this quiz do the heavy lifting around figuring which EV might be the best option specifically for <b><u>you</u></b>!</p>
    <Link to="/quiz/">Take the quiz!</Link>
    <br />
    <Link to="/cars-table/">Go to cars table</Link>
  </Layout>
)

export default IndexPage
