import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyleContext } from '../../App';
import { FaArrowRight } from 'react-icons/fa';

const BookingModal = () => {
    const { info } = useContext(StyleContext);
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const origin = form.origin.value;
        const fromDate = form.from.value;
        const toDate = form.to.value;

        console.log(origin, fromDate, toDate);
        navigate(`/booking/${info.id}`);
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" name='origin' placeholder='Where From?' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" readOnly value={info.heading} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <div>
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <input type="date" name='from' className="input input-bordered" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <input type="date" name='to' className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-warning w-full">Start Booking <FaArrowRight /> </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;