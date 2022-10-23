import React from 'react';
import { FaStar, FaDollarSign } from 'react-icons/fa';

const Hotel = ({ hotel }) => {
    const { description, hotel_img, name, price, rating } = hotel;
    return (

        <div className="carousel-item h-75 card lg:card-side bg-slate-500 mb-5 shadow-xl">
            <figure className='w-7/12'><img src={hotel_img} className='h-full' alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className='card-actions justify-between items-center'>
                    <span><FaStar className='text-warning' />{rating}</span>
                    <span><FaDollarSign className='text-warning' />{price}/Night</span>
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Hotel;