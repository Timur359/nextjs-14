import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Nout Found</h2>
      <p>Sorry, this page is not found</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
