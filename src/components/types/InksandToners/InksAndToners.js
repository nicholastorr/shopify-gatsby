import * as React from 'react';
import { Menu } from "antd";
import "./InksAndToners.css"

const categories = [
    {
    title: "Core Adapters",
    link: "/products/core-adapter-3-to-2",
    },
    {
    title: "5000/5500 Dye Inks",
    link: "/products/hp-designjet-5000-5500-inks",
    },
    {
    title: "T610/T620/T770/T790 Inks",
    link: "/products/hp-designjet-t610-t620-t770-t790-inks",
    },
    {
    title: "500/800/815/820 Inks",
    link: "/products/hp-designjet-500-800-815-820-inks",
    },
    {
    title: "T1200/T1300/T2300 Inks",
    link: "/products/hp-designjet-t1100-t1120-t1200-t1300-t2300-inks",
    },
    {
    title: "Z6100 Inks",
    link: "/products/hp-designjet-z6100-inks",
    },
    {
    title: "4000/4020/4500/4520 Inks",
    link: "/products/hp-designjet-4000-4020-4500-4520-inks",
    },
    {
    title: "5000/5500 UV Inks",
    link: "/products/hp-designjet-5000-5500-uv-inks",
    },
    {
    title: "1050/1055 Inks",
    link: "/products/hp-designjet-1050-1055-inks",
    },
    {
    title: "510 Inks",
    link: "/products/hp-designjet-510-inks",
    },
]


export default function InksAndToners() {

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