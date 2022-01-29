import { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <h2>this is About page</h2>
      <Link href="/">go to home page</Link>
    </>
  );
};
export default AboutPage;
