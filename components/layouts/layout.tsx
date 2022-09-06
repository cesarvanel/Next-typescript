import react, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  title?: string;
  children?: ReactNode;
};

function Layout({ children, title = "Next+Type" }: Props) {
  return (
    <div>
      <Head>{title}</Head>

      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/list-users">
            <a>User List</a>
          </Link>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <p> Footer</p>
      </footer>
    </div>
  );
}

export default Layout;
