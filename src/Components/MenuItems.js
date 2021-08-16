import React from 'react'
import { FaGithub } from 'react-icons/fa' 
import { ExternalLink } from 'react-external-link'


function MenuItems({menuItem}) {
    return (
        <div className="portfolios">        
                {
                    menuItem.map((item)=>{
                    

                        return <div className="portfolio" key={item.id}>
                            <div className="card" style={{backgroundImage: "url(" + item.image + ")"}}>
                                <div className="card-content">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="card-body">{item.description}</p>
                                    <ExternalLink href={item.link1}>
                                        <button className="btn">Visit Site</button>
                                    </ExternalLink>
                                    <ExternalLink href={item.link2} className="card-icon">
                                            <FaGithub className="icon" />
                                    </ExternalLink>
                                </div>
                            </div>
                        </div>
                    })
                }
        </div>
    )
}

export default MenuItems;
