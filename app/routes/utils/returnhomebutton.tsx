import { useNavigate } from "@remix-run/react";

export default function ReturnHome() {

  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <>
      <button onClick={handleReturnHome} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Return home</button>
    </>    
  );
};