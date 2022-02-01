import Link from "next/link";
import dbConnect from "../lib/mongodb";
import { gql } from "@apollo/client";
import apolloClient from "../lib/apollo";

interface IndexPageProps {
  helloQuery?: string;
}
const IndexPage = (props: IndexPageProps) => {
  const { helloQuery } = props;
  console.log({ props });
  return (
    <>
      {helloQuery.trim() && <h1>{helloQuery}</h1>}
      <h2>hello world</h2>
      <Link href="/about">go to about page</Link>
    </>
  );
};
export default IndexPage;

export async function getServerSideProps() {
  try {
    await dbConnect();
    const { data } = await apolloClient.query({
      query: gql`
        query hello {
          hello
        }
      `,
    });
    return {
      props: { isConnected: true, helloQuery: data.hello },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
