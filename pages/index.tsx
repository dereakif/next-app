import { NextPage } from "next";
import Link from "next/link";
import dbConnect from "../lib/mongodb";

const IndexPage: NextPage = (props) => {
  console.log({ props });
  return (
    <>
      <h2>hello world</h2>
      <Link href="/about">go to about page</Link>
    </>
  );
};
export default IndexPage;

export async function getServerSideProps() {
  try {
    await dbConnect();
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
