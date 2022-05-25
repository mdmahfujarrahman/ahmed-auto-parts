import React from 'react';
import { useQuery } from 'react-query';
import { Lazy, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from '../../Sheard/Loading';
import Review from '../Review/Review';

const Reviews = () => {

    const {
        data: reviews,
        isLoading,
        refetch,
    } = useQuery("reviews", () =>
        fetch("http://localhost:5000/reviews").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }


    return (
        <section className="py-20 bg-review-bg bg-center">
            <div className="text-white text-center">
                <h2 className="text-5xl">
                    Feedback From Our Most Valuable Customers
                </h2>
                <p className="my-4 text-xl">
                    We are proud of the fact that millions of company trust us
                    to supply auto parts for their daily use.
                </p>
            </div>
            <>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#FFFFFF",
                        "--swiper-pagination-color": "#FF3737",
                    }}
                    lazy={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Lazy, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div>
                        {reviews.map((review) => (
                            <SwiperSlide
                                key={review._id}
                                className="flex  justify-center items-center"
                            >
                                <Review review={review} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </>
        </section>
    );
};

export default Reviews;