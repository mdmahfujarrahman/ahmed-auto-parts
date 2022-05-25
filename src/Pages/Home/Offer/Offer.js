import React from 'react';
import discount from '../../../asset/discount.png';
import shipping from '../../../asset/free-shipping.png';
import payment from '../../../asset/payment.png';
import support from '../../../asset/support.png';

const Offer = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center mx-auto my-20">
            <div className="flex flex-col md:flex-row items-center  border border-gray-200 py-4 px-10">
                <img className="w-16" src={shipping} alt={shipping} />
                <div className="ml-0 md:ml-8">
                    <h6 className="text-xl">Free Shipping</h6>
                    <p>For orders from $500</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center  border border-gray-200 py-4 px-10">
                <img className="w-16" src={support} alt={support} />
                <div className="ml-0 md:ml-8">
                    <h6 className="text-xl">Support 24/7</h6>
                    <p>Call us anytime</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center  border border-gray-200 py-4 px-10">
                <img className="w-16" src={payment} alt={payment} />
                <div className="ml-0 md:ml-8">
                    <h6 className="text-xl">100% Safety</h6>
                    <p>Only secure payments</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center  border border-gray-200 py-4 px-10">
                <img className="w-16" src={discount} alt={discount} />
                <div className="ml-0 md:ml-8">
                    <h6 className="text-xl">Hot Offers</h6>
                    <p>Discounts up to 50%</p>
                </div>
            </div>
        </section>
    );
};

export default Offer;