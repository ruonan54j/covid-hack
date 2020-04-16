import React, { useState, useContext } from "react";

const Landing = () => {
    return (
        <div>
        <div className="landing-main">
            <div className="row">
                <div className="col-4 heading-landing-main">
                    <h1 className="h1-heading-landing-main">
                Connecting Suppliers and Buyers for 3D printed products in the fight against Covid-19.
                </h1>
                </div>
                <div className="col-8">                    
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
                <div className="col">
                    <h2>
                        Suppliers
                    </h2>
                    <p>
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
 
                    </p>
                </div>

                <div className="col">
                    <h2>
                        Buyer
                    </h2>
                    <p>
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
 
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Landing;