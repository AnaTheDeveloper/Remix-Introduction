import { useNavigate } from "@remix-run/react";

export default function LandingPageOne() {

    const navigate = useNavigate();

    const handleNavigationToRoutes = () => {
      navigate('/');        
    };

    return (
      <>
        <h1>Landing Page One</h1>
        <button onClick={handleNavigationToRoutes}>Go to routes page</button>
      </>    
    );
  };