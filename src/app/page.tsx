"use client"

import Navbar from "./component/Navbar";
import Region from "./component/Region"


function page() {
    
    return(
        <>
        <div className="total-body max-md:h-full">
            <div className="nav px-6">
                <Navbar />
            </div>
                <Region />
        </div>
        </>
    )
}

export default page;