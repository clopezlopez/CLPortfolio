import React from 'react'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Title from '../Components/Title'
import portfolios from '../Components/allportfolios'
import { useState } from 'react'
import {Helmet} from 'react-helmet'


const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfolioPage() {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <Helmet>
                <title>CL Media | Portfolio</title>
                <meta 
                    name="description"
                    content="See my work and projects"
                />
            </Helmet>
            <Title title={'Portfolio'} />
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage;
