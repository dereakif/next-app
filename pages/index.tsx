import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <>
      <h2>hello world</h2>
      <Link href="/about">go to about page</Link>
    </>
  );
};
export default IndexPage;
