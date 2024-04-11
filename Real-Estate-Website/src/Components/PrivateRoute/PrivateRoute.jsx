import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import {Navigate,useLocation} from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <h2 className='text-4xl mt-28'>Loading....</h2>
    }
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div className="mt-28">
            {children}
        </div>
    );
};
PrivateRoute.propTypes = {
    children : PropTypes.node.isRequired
}
export default PrivateRoute;