import React from 'react';
import swal from "sweetalert";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const ProductFreture = () => {
    return (
        <div className="py-20">
            <SectionTitle>Our Product Feature</SectionTitle>
            <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl px-8 lg:mx-auto gap-20">
                <div className="flex-1">
                    <h2 className="text-xl lg:text-3xl font-bold uppercase my-6">
                    We Make Computer Differents Parts
                    </h2>
                    <p className='text-justify'>
                    This company basically Manufacturer different Hardware parts  of computers. Like Motherboard, CPU, RAM, Hard drive, Graphics processing unit, Network interface card, Solid-state drive. These companies have been producing their products for a long time with their reputation
                    </p>
                </div>
                <div className="flex-1 flex items-center gap-10 mx-auto">
                    <div
                        onClick={() => {
                            swal(
                                "The motherboard is the backbone that ties the computer's components together at one spot and allows them to talk to each other. Without it, none of the computer pieces, such as the CPU, GPU, or hard drive, could interact. Total motherboard functionality is necessary for a computer to work well.",
                                {
                                    className: "rounded-3xl",
                                }
                            );
                        }}
                        className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#29cae4] px-4 py-5 text-white border-b-4 border-[#20b8d1] rounded-2xl shadow-2xl shadow-gray-300"
                    >
                        <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#20b8d1] text-white">
                            <i className="fa-solid fa-thumbtack"></i>
                        </span>
                        <div className="mt-4 lg:mt-7">
                            <p className="text-sm">Motherboard</p>
                            <p className="text-[7px] lg:text-[10px]">
                                Tab the box to see details
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div
                            onClick={() => {
                                swal(
                                    "The CPU is the brain of a computer, containing all the circuitry needed to process input, store data, and output results. The CPU is constantly following instructions of computer programs that tell it which data to process and how to process it. Without a CPU, we could not run programs on a computer.",
                                    {
                                        className: "rounded-3xl",
                                    }
                                );
                            }}
                            className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#3d30ba] px-4 py-5 text-white border-b-4 border-[#3428a7] rounded-2xl shadow-2xl shadow-gray-300"
                        >
                            <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#3428a7] text-white">
                                <i className="fa-brands fa-servicestack"></i>
                            </span>
                            <div className="mt-4 lg:mt-7">
                                <p className="text-sm">CPU</p>
                                <p className="text-[7px] lg:text-[10px]">
                                    Tab the box to see details
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                swal(
                                    "A hard drive is the hardware component that stores all of your digital content. Your documents, pictures, music, videos, programs, application preferences, and operating system represent digital content stored on a hard drive. Hard drives can be external or internal.",
                                    {
                                        className: "rounded-3xl",
                                    }
                                );
                            }}
                            className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#c9d4e3] px-4 py-5 text-white border-b-4 border-[#b8c4d6] rounded-2xl shadow-2xl shadow-gray-300"
                        >
                            <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#b8c4d6] text-white">
                                <i className="fa-solid fa-rotate"></i>
                            </span>
                            <div className="mt-4 lg:mt-7">
                                <p className="text-sm">Hard drive</p>
                                <p className="text-[7px] lg:text-[10px]">
                                    Tab the box to see details
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            swal(
                                "RAM (random access memory) is a computer's short-term memory, where the data that the processor is currently using is stored. Your computer can access RAM memory much faster than data on a hard disk, SSD, or other long-term storage device, which is why RAM capacity is critical for system performance.",
                                {
                                    className: "rounded-3xl",
                                }
                            );
                        }}
                        className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#4c5071] px-4 py-5 text-white border-b-4 border-[#3b3f61] rounded-2xl shadow-2xl shadow-gray-300"
                    >
                        <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#3b3f61] text-white">
                            <i className="fa-solid fa-dragon"></i>
                        </span>
                        <div className="mt-4 lg:mt-7">
                            <p className="text-sm">RAM</p>
                            <p className="text-[7px] lg:text-[10px]">
                                Tab the box to see details
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFreture;