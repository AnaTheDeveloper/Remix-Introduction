import type { V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";
import Footer from "./footer";
import HomePage from "./homepage";

//SEO
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
};
