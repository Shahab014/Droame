import React, { useState } from 'react';
import style from "../styles/Home.module.css"
import { useRouter } from 'next/router';

const BookingForm = () => {
  const [customerDetails, setCustomerDetails] = useState({
    customerId: '',
    customerName: '',
    email: '',
    phoneNumber: ''
  });

  const [bookingDetails, setBookingDetails] = useState({
    bookingId: '',
    locationId: '',
    droneShotId: '',
    createdTime: ''
  });

  const handleCustomerDetailsChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBookingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  const router = useRouter();

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div>
        <h3>Customer Details</h3>
        <label className={style.label} htmlFor="customerId">Customer ID:</label>
        <input
          className={style.input}
          type="text"
          id="customerId"
          name="customerId"
          value={customerDetails.customerId}
          onChange={handleCustomerDetailsChange}
        />
        <br />
        <label className={style.label} htmlFor="customerName">Customer Name:</label>
        <input
          className={style.input}
          type="text"
          id="customerName"
          name="customerName"
          value={customerDetails.customerName}
          onChange={handleCustomerDetailsChange}
        />
        <br />
        <label className={style.label} htmlFor="email">Email:</label>
        <input
          className={style.input}
          type="email"
          id="email"
          name="email"
          value={customerDetails.email}
          onChange={handleCustomerDetailsChange}
        />
        <br />
        <label className={style.label} htmlFor="phoneNumber">Phone Number:</label>
        <input
          className={style.input}
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={customerDetails.phoneNumber}
          onChange={handleCustomerDetailsChange}
        />
      </div>
      <div>
        <h3>Booking Details</h3>
        <label className={style.label} htmlFor="bookingId">Booking ID:</label>
        <input
          className={style.input}
          type="text"
          id="bookingId"
          name="bookingId"
          value={bookingDetails.bookingId}
          onChange={handleBookingDetailsChange}
        />
        <br />
        <label className={style.label} htmlFor="locationId">Location ID:</label>
        <input
          className={style.input}
          type="text"
          id="locationId"
          name="locationId"
          value={bookingDetails.locationId}
          onChange={handleBookingDetailsChange}
        />
        <br />
        <label className={style.label} htmlFor="droneShotId">Drone Shot ID:</label>
        <input
          className={style.input}
          type="text"
          id="droneShotId"
          name="droneShotId"
          value={bookingDetails.droneShotId}
          onChange={handleBookingDetailsChange}
        />
        <br />
        <label className={style.label} htmlFor="createdTime">Created Time:</label>
        <input
          className={style.input}
          type="datetime-local"
          id="createdTime"
          name="createdTime"
          value={bookingDetails.createdTime}
          onChange={handleBookingDetailsChange}
        />
      </div>
      <button className={style.submit} type="submit">Submit</button>
      <button onClick={()=>router.push("/")} className={style.submit} type="submit">Back to Home</button>
      
    </form>
  );
};

export default BookingForm;
