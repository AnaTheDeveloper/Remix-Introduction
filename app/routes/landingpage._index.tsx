import { Link, useNavigate } from "@remix-run/react";

export default function LandingPage() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');        
    };

    return (
        <>
            <h1>Landing Page</h1>
            <Link to={'/landingpage/landingpageone'}> Go to landing page one </Link>
            <br/>
            <button onClick={handleBack}>Back</button>
        </>
      

    );
};