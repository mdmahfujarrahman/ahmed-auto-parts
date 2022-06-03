import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = ({ review }) => {
    const { name, rating, reviewtext } = review;
    console.log(parseInt(rating));
    let totalRating;
    
    if(parseInt(rating) === 1){
        totalRating = "⭐";
    } else if(rating === 2){
        totalRating = "⭐⭐";
    } else if(rating === 3){
        totalRating = "⭐⭐⭐";
    } else if(rating === 4){
        totalRating = "⭐⭐⭐⭐";
    } else{
        totalRating = "⭐⭐⭐⭐⭐";
    }
    console.log(totalRating);
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold brand-color">
                                {name}
                            </h2>
                            <p className="mt-2 text-gray-600 brand-color">
                                {reviewtext}
                            </p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-primary">
                                <small>
                                    {rating} {totalRating}
                                </small>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Review;
