import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import {Navigate,useLocation} from 'react-router-dom'
const PrivateRoute = ({children}) => {
const {user,loading} = useContext(AuthContext)
const location = useLocation()
    
    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    } 
    if(loading){
        return <h1 className='text-2xl'>Loading...</h1> 
    }
    return (
    
         <div>
            {children}
         </div>
    );
};
PrivateRoute.propTypes = {
    children : PropTypes.node.isRequired
}
export default PrivateRoute;