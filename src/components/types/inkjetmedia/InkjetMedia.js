import * as React from 'react';

import { Menu } from "antd";
import "./InkjetMedia.css"

const categories = [
    {
    title: "Satin Photo Paper",
    link: "/products/photo-satin-paper"
    },
    {
    title: "Gloss Photo Paper",
    link: "/products/photo-gloss-paper"
    },
    {
    title: "Satin Poster Paper",
    link: "/products/satin-poster-paper"
    },
    {
    title: "Poly Pro Matte",
    link: "/products/poly-pro-matte"
    },
    {
    title: "Self Adhesive Poly Pro Matte",
    link: "/products/self-adhesive-poly-pro-matte"
    },
    {
    title: "Matte Polyester Canvas",
    link: "/products/matte-polyester-canvas"
    },
    {
    title: "Banner Media",
    link: "/products/banner-media"
    },
    {
    title: "Inkjet Films and Mylar",
    link: "/products/inkjet-films-and-mylar"
    },
    {
    title: "Art Paper",
    link: "/products/art-paper"
    },
    {
    title: "Lamination Spray",
    link: "/products/lamination-spray"
    }
]


export default function InkjetMedia() {
    

    return (
        <Menu>
            {categories.map((category, index) => (
                <Menu.Item key={index}>
                    <a href={category.link}>{category.title}</a>
                </Menu.Item>
            ))}
        </Menu>
    )
}
