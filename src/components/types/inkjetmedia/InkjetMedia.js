import * as React from 'react';
import "./InkjetMedia.css"

const categories = [
    {
    title: "Photo Paper",
    link: "/products/photo-paper"
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
    <div class="navbar2">
    <div class="subnav2">
        <button class="subnavbtn2">Inkjet Media</button>
        <div class="subnav-content2">
            {categories.map(category => (
                <a href={category.link}>{category.title}</a>
            ))}
        </div>
    </div>
    </div>  
    )
}
