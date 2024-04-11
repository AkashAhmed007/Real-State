import { useLoaderData } from "react-router-dom";
const EstateDetails = () => {
    const card = useLoaderData()
    console.log(card)
    return (
        <div className="mt-28 min-h-screen">
            
           This is estate details 
           
        </div>
    );
};

export default EstateDetails;