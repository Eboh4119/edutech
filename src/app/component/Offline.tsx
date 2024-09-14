"use client"

import { note } from "../config/data/home";

function Offline(){
    return(
        <>
        <div className="total-container mt-10 pt-16 max-md:mt-2 max-md:pt-2">
            <div className="flex gap-6 max-md:block">
                <div className="online  bg-yellow-500 w-[230px]  h-60 rounded-xl max-md:w-[280px] max-md:py-2">
                    <h3 className="text-center py-2 font-semibold">Offline Class</h3>
                    <p className="skew max-w-[155px] py-2 px-7 text-center font-semibold text-white">$98.98</p>
                    <ul className="lorem font-semibold">
                        <li>Lorem ipsum is simply</li>
                        <li>Lorem ipsum is simply</li>
                        <li>Lorem ipsum is simply</li>
                    </ul>
                </div>

                <div className="max-md:py-4">
                    <div className="offline w-[230px] h-60 rounded-xl max-md:w-[280px] max-md:py-2 max-md:font-bold">
                    <h3 className="text-center py-2 font-semibold">Online Class</h3>
                        <p className="skew max-w-[155px] py-2 px-7 text-center font-semibold text-white">$89.98</p>
                        <ul className="lorem font-semibold">
                            <li>Lorem ipsum is simply</li>
                            <li>Lorem ipsum is simply</li>
                            <li>Lorem ipsum is simply</li>
                        </ul>
                    </div>
                </div>

                <div className="max-md:py-6">
                    <div className="about">
                        <h4 className="text-yellow-500  max-md:text-[15px]">About us</h4>
                        <div className="max-w-[350px] pl-4">
                            <h3 className="text-[28px] text-white font-bold max-w-[260px]">Our Online and Offline Class</h3>
                            <p className="py-2 text-[15px]">{note}</p>
                            <p className="text-[15px]">Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Offline;