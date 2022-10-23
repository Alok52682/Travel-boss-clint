import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Places from './Places';
import './home.css';
import { StyleContext } from '../../App';
import BookingModal from './BookingModal';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const [disabled, setDisabled] = useState(true);
    const { info } = useContext(StyleContext);
    const places = useLoaderData();

    return (
        <div className="lg:flex items-center gap-5 w-11/12 mx-auto mt-28">
            <div className='flex-initial lg:w-2/4 p-10 text-white bg-blur z-10 rounded-xl'>
                <h2 className='text-5xl font-extrabold'>{info.heading}</h2>
                <p className='font-bold text-white'>{info.description}</p>
                <label htmlFor="my-modal-3" className="btn btn-warning mt-5" disabled={disabled && "disabled"}>Booking <FaArrowRight /></label>
                <BookingModal />
            </div>
            <div className="border-2 rounded-box hover:border-indigo-600 p-10 bg-blur">
                <h2 className='mb-5 text-white'>Click any Card for Booking</h2>
                <div className='carousel carousel-center max-w-sm lg:max-w-2xl space-x-4 rounded-box '>
                    {
                        places.map(place => <Places key={place.id} place={place} btnDisabled={setDisabled} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;