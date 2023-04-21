import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

//SEO
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <h1>Routes Index</h1>
      <Link to={'/landingPage'}> Go to landing page </Link>
      <br/>
      <Link to={'/aboutpage'}> Go to about page </Link>

    </>    
  );
};
