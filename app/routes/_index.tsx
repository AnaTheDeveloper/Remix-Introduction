import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

//SEO
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <h1>Logo</h1>
      <Link to={'/about'} className="text-blue-600 font-semibold">About</Link>
      <br/>
      <Link to={'/portfolio'}>Portfolio</Link>
      <br/>
      <Link to={'/contact'}>Contact</Link>

    </>    
  );
};
