import Link from "next/link";
import Links from "./links/Links";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.container}>
      <Link href="/" className={s.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
