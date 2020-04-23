import React, { useState, useContext } from "react";

const Landing = () => {
    return (
        <div>
        <div className="landing-main">
            <div className="row">
                <div className="left-landing-col heading-landing-main">
                    <h1 className="h1-heading-landing-main">
                    Connecting Suppliers and Buyers for PPE, 3D printed products, and other essential materials in the fight against Covid-19.
                </h1>
                </div>
                <div className="right-landing-col">                    
                </div>
            </div>
            
        </div>

    <div className="landing-about">
        <div className="about-content">
        <h1 className="h1-landing-about">About</h1>
            <p>
            We are a two sided market place connecting health care workers with local suppliers to source equipment to combat COVID-19. We provide all the essential information needed to get suppliers manufacturing. If you are either willing to help with manufacturing (3d-printing / sewing) or in need of COVID-19 equipment, please register with your email and we will be in touch soon!
            </p> 
            </div>
            <h1 className="h1-landing-about">How it works</h1>
            
            <div className="row">
                <div className="col-md mobile-col">
                    <h2>
                        Suppliers
                    </h2>
       
                        <ol className="list-landing">
                            <li>
                            Sign up as a supplier
                            </li>
                            <li>
                            Get access to our database of verified parts and start printing 
                            </li>
                            <li>
                            Post about what you're able to manufacture and buyers will contact you for supplies
                            </li>
                           
                        </ol>
 
                </div>

                <div className="col-md mobile-col">
                    <h2>
                        Buyer
                    </h2>
                    
                        <ol className="list-landing">
                            <li>
                            Sign up as a buyer
                            </li>
                            <li>
                            View postings posted by local suppliers
                            </li>
                            <li>
                            Get in touch to pickup supplies / get them delivered
                            </li>
                        </ol>
 
                  
                </div>
            </div>
        </div>
    </div>
    );
}

export default Landing;
