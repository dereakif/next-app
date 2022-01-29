import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <h2>this is user page</h2>
      <div>username:{username}</div>
      <div>{JSON.stringify(router.query)}</div>
      <Link href="/">go to home page</Link>
    </>
  );
};
export default UserPage;
