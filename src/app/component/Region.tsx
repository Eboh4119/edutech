"use client"
import { note } from "../config/data/home";
import Image from "next/image";
import Offline from "./Offline";

function Region(){

    return (
        <>
        <div className="section max-w-[1100px] mx-12 mt-10">
            <div className="journey font-semibold">
                <h4 className="text-yellow-500  max-md:text-[15px]">Start Learning</h4>

                <div className="flex gap-20 max-md:block">
                    <div className="text-white pl-4 max-w-[550px]">
                    <h1 className="text-[60px] max-md:text-[40px]">A Journey to Excellence.</h1>
                    <p>{note}</p>
                    <p className="pb-4">{note}</p>

                    <button className="bg-yellow-500 px-4 py-2 cursor-pointer text-black rounded-md course">
                        Start A Course
                    </button>
                    </div>

                    <div className="images relative w-80 mt-6">
                        <Image
                        src="/picone.jpg"
                        alt=""
                        width={594}
                        height={775}
                        className="rounded-xl absolute top-0 left-0 z-0 picone"
                        />

                        <Image
                        src="/pictwo.jpg"
                        alt=""
                        width={220}
                        height={155}
                        className="absolute rounded-xl top-[25%] right-[40%] -z-5 mr-12 pictwo"
                        />

                        <Image
                        src="/boy.jpg"
                        alt=""
                        width={120}
                        height={100}
                        className="absolute rounded-xl top-[15%] left-[80%] ml-30 -z-2 boy"
                        />
                    </div>
                </div>
            </div>
                    <div className="new mt-10">
                        <Offline />
                    </div>
        </div>
        </>
    );
};

export default Region;