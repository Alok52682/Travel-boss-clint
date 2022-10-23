import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { StyleContext } from '../../App';
import Hotel from './Hotel';

const Booking = () => {
    const { info } = useContext(StyleContext);
    const hotels = useLoaderData();
    return (
        <div className='flex w-11/12 mx-auto my-10 gap-5'>
            <div className='bg-white flex-initial w-2/4 p-8 rounded-xl'>
                <h1 className='text-4xl font-extrabold mb-8'>Stay In {info.heading}</h1>
                <div className="h-96 carousel carousel-vertical rounded-box">
                    {
                        hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel} />)
                    }
                </div>
            </div>
            <div className='flex-initial w-2/4'>
                <iframe title="cox's bazar" className='h-full w-full rounded-xl' id="gmap_canvas" src={info.location}></iframe>
            </div>
        </div>
    );
};

export default Booking;