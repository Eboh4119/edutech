"use client"
import React, {useState} from "react"
import Image from "next/image";
import useToggle from "../hooks/useToggle";

function Navbar(){

    const [stage, setStage] = useState<string>("main");

    function NavButton(){

        const [showSelect, setShowSelect] = useToggle();
    
        return (
            <>
            <div>
            <button
            onClick={() => setShowSelect(!showSelect)}
            >
            <Image 
            src="/drop.png"
            width={20}
            height={20}
            alt=""
            className={showSelect ? "rotate-180" : ""}
            />
            </button>
            </div>
    
            {showSelect && (
                <ul className="flex-row gap-6">
                <li>home</li>
                <li>courses</li>
                <li>about</li>
                <li>contact</li>
                <li>login</li>
            <div className=" up cursor-pointer bg-amber-400 py-1 px-5 text-black rounded-[4px] mt-2">
                Sign up
            </div>
            </ul>
    
            )}
            </>
        )
    };

    switch(stage){
        case "main":
            return(
            <header>
                <div className="navbar flex text-white justify-between py-5">
                    <div className="logo text-[30px] font-bold pl-12">
                        <h3><span>Ben</span>
                         te<span>ch</span></h3>
                       
                    </div>

                    <div className=" list capitalize font-semibold pr-12">
                        <ul className="flex gap-6 unordered">
                            <li>home</li>
                            <li>courses</li>
                            <li>about</li>
                            <li>pricing</li>
                            <li>contact</li>
                            <li>login</li>
                        <div className=" sign cursor-pointer bg-amber-400 py-1 px-5 text-black rounded-[4px] mt-2" onClick={() => setStage("home")}>
                            Sign up
                        </div>
                        </ul>

                        <div className="navButton">
                            {NavButton()}
                        </div>
                        
                    </div>

                </div>
            </header>
            );

            case "home":
                return (
                    <>
                    <div onClick={() => setStage("main")} className="text-white cursor-pointer">
                        back to home
                    </div>
                    </>
                )
        };

        
};

export default Navbar;