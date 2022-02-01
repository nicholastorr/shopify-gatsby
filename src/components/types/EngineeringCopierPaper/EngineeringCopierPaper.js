import * as React from "react";
import { Menu } from "antd";


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
        <Menu>
        {categories.map((category, index) => (
            <Menu.Item key={index}>
                <a href={category.link}>{category.title}</a>
            </Menu.Item>
        ))}

    </Menu>
    )
}
