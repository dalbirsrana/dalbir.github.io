import React from 'react';

const Work = () => {

    const workList = [
        { 
            imgUrl: "omniway.png", 
            title: "omniqualityliving.ca", 
            link: "https://www.omniqualityliving.ca/", 
            desc: "",
            techStack: ['WordPress', 'Custom Theme', 'SASS']
        },
        { 
            imgUrl: "carbonneutralltd.jpg", 
            title: "carbonneutralltd.com", 
            link: "https://www.carbonneutralltd.com/", 
            desc: "",
            techStack: ['WordPress', 'Custom Theme', 'SASS']
        },
        { 
            imgUrl: "centurylithium.jpg", 
            title: "centurylithium.com", 
            link: "https://www.centurylithium.com/", 
            desc: "",
            techStack: ['Custom', 'PHP', 'SASS', 'jQuery']
        },
        { 
            imgUrl: "evoterminals.jpg", 
            title: "evoterminals.com", 
            link: "https://evoterminals.com/", 
            desc: "",
            techStack: ['Custom', 'PHP', 'SASS', 'jQuery']
        },
        { 
            imgUrl: "kenorlandminerals.jpg", 
            title: "kenorlandminerals.com", 
            link: "https://www.bmcms1.com/staging/kenorlandminerals.com/", 
            desc: "",
            techStack: ['Custom', 'PHP', 'SASS', 'jQuery']
        },
        { 
            imgUrl: "plantinghopecompany.jpg", 
            title: "plantinghopecompany.com", 
            link: "https://plantinghopecompany.com/", 
            desc: "",
            techStack: ['Custom', 'PHP', 'SASS', 'jQuery']
        },
        { 
            imgUrl: "sangramoller.jpg", 
            title: "sangramoller.com", 
            link: "https://www.bmcms1.com/staging/sangramoller2.com/", 
            desc: "",
            techStack: ['Custom', 'PHP', 'SASS', 'jQuery']
        },
        { 
            imgUrl: "tankerservices-teekay.jpg", 
            title: "tankerservices.teekay.com", 
            link: "https://tankerservices.teekay.com/", 
            desc: "",
            techStack: ['WordPress', 'SASS', 'jQuery']
        },
        { 
            imgUrl: "sigmalithiumresources.jpg", 
            title: "sigmalithiumresources.com", 
            link: "https://site.sigmalithiumresources.com/", 
            desc: "",
            techStack: ['Custom Theme', 'WordPress', 'SASS']
        },
        { 
            imgUrl: "noodor.jpg", 
            title: "NoOdor.com", 
            link: "https://noodor.com", 
            desc: "eCommerce", 
            techStack: ['e-Commerce', 'Shopify']
        },
        { 
            imgUrl: "smellrid.jpg", 
            title: "Smellrid.com", 
            link: "https://smellrid.com", 
            desc: "eCommerce", 
            techStack: ['e-Commerce', 'Miva']
        },
        { 
            imgUrl: "carbonprint.jpg", 
            title: "CarbonPrint.ca", 
            link: "https://carbonprint.ca", 
            desc: "Carbonprint is an application build on ReactJS library. I was front-end developer for this project.", 
            techStack: ['ReactJS', 'NodeJS', 'RestAPI', 'Visualization']
        }
    ]

    return (
        <section className="section-work">
            <h1 className="content-heading">Featured Work</h1>

            <div className="container-work">
                {
                    workList.map( (res, index) => (
                        <div key={index} className="card">

                            <p className="card-title"><a rel="noopener noreferrer" target="_blank" href={res.link}><i className="fas fa-link"></i> {res.title}</a></p>
                            
                            <div className="card-image">
                            <a href={res.link} target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/work/' + res.imgUrl} alt="" />
                            </a>
                            </div>
                            
                            <div className="card-content">
                                
                                <ul className="techstack">
                                    { res.techStack.map( (item, i)=>(
                                        <li key={i}>{item}</li>
                                        ))}
                                </ul>

                                {/* <p className="card-desc">{res.desc}</p> */}

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Work