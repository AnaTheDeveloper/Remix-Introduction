import { Link } from "@remix-run/react";


export default function About() {
    return (
      <>
        <h1>About Page</h1>
        <Link to={'/'}> Go to routes </Link>
  
      </>    
    );
  };