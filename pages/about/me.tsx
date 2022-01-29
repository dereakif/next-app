import { NextPage } from "next";
import Link from "next/link";

const AboutMePage: NextPage = () => {
  return (
    <>
      <h2>this is About/me page</h2>
      <Link href="/">go to home page</Link>
    </>
  );
};
export default AboutMePage;
