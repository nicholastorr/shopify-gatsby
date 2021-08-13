import * as React from "react"

import  "./EngineeringCopierPaper.css";




const categories = [
    {
    title: "20 lb. Engineering Bond",
    link: "/products/20-lb-engineering-copier-bond"
    },
    {
    title: "20 lb. Inkjet Tinted/Colored Bond",
    link: "/products/20-lb-tinted/colored-bond"
    },
    {
    title: "Engineering Copier Mylar",
    link: "/products/engineering-copier-mylar"
    }
]

export default function EngineeringCopierPapers() {
    

    return (
    <div class="navbar">
    <div class="subnav">
        <button class="subnavbtn">Engineering Copier Paper</button>
        <div class="subnav-content">
            {categories.map(category => (
                <a href={category.link}>{category.title}</a>
            ))}
        </div>
    </div>
    </div>  
    )
}
