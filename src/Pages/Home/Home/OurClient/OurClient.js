import React from 'react';
import './OurClient.css'
import rei from "../../../../images/companies/hp.png";
import arcTeryx from "../../../../images/companies/asus.png";
import deutor from "../../../../images/companies/lenovo.png";
import gragory from "../../../../images/companies/samsung.png";
import kelty from "../../../../images/companies/kelty.png";
import marmot from "../../../../images/companies/marmot.png";
import northFace from "../../../../images/companies/north-face.png";
import ospray from "../../../../images/companies/ospray.png";
import { Zoom } from "react-reveal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
const OurClient = () => {
    return (
        <div className="installation-content">
            <div className="text-center mt-10">
                <SectionTitle>Our Clients</SectionTitle>
            </div>

            <Zoom bottom cascade>
                <div className="companies mt-5 mb-10">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            200: {
                                width: 200,
                                slidesPerView: 1,
                            },
                        }}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: true,
                        }}
                        loopedSlides={9999}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={arcTeryx} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={rei} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={deutor} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={gragory} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={kelty} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={marmot} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={northFace} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={ospray} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/*         
      
          */}
            </Zoom>
        </div>
    );
};

export default OurClient;