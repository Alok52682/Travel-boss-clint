import { info } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { StyleContext } from '../../App';

const Places = ({ place, btnDisabled }) => {
    const { img_Url, name, description, id, location_link } = place;
    const { setInfo } = useContext(StyleContext);

    const handleFocus = () => {
        setInfo({ ...info, backround: img_Url, heading: name, description: description, id: id, location: location_link });
        btnDisabled(false);
    }
    return (
        <div onClick={() => handleFocus()} className="carousel-item card w-52 lg:w-96 border shadow-xl pointer focus:border-5">
            <h2 className="card-title text-white m-3">{name}</h2>
            <figure><img src={img_Url} style={{ height: '300px' }} alt="Shoes" /></figure>
        </div>

    );
};

export default Places;