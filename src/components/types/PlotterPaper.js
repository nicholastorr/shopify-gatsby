import * as React from 'react';







const categories = [
    {
    title: "20 lb. Plotter Paper",
    link: "/products/20-lb-plotter-paper"
    },
    {
    title: "24 lb. Plotter Paper",
    link: "/products/24-lb-plotter-paper"
    },
    {
    title: "18 lb. Translucent Bond",
    link: "/products/18-lb-translucent-bond"
    },
    {
    title: "24 lb. Coated Bond",
    link: "/products/24-lb-coated-bond"
    },
    {
    title: "36 lb. Coated Bond",
    link: "/products/36-lb-coated-bond"
    },
    {
    title: "46 lb. Coated Bond",
    link: "/products/46-lb-coated-bond"
    },
    {
    title: "20 lb. Inkjet Vellum",
    link: "/products/20-lb-inkjet-vellum"
    },
    {
    title: "Inkjet Matte Mylar",
    link: "/products/inkjet-matte-mylar"
    },
    {
    title: "Inkjet Clear Film",
    link: "/products/inkjet-clear-film"
    },
    {
    title: "20 lb. Inkjet Tinted/Colored Bond",
    link: "/products/20-lb-inkjet-tinted-colored-bond"
    }
]


export default function PlotterPapers() {

    return (
        <div class="navbar">
            <div class="subnav">
                <button class="subnavbtn">Plotter Paper</button>
                <div class="subnav-content">
                    {categories.map(category => (
                        <a href={category.link}>{category.title}</a>
                ))}
                </div>
            </div>
        </div>  
    )
}