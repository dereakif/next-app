import { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <h2>this is About page</h2>
      <div>
        <Link href="/">go to home page</Link>
      </div>
      <Link href="/about/me">go to about/me page</Link>
    </>
  );
};
export default AboutPage;
