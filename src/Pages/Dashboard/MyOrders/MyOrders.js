import React from 'react';

const MyOrders = () => {
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>Parts Name</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Payment Status</th>
                    <th>Order Status</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                    <td>Blue</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;