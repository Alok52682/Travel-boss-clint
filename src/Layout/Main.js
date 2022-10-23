import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Common/Navber';

const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
        </div>
    );
};

export default Main;