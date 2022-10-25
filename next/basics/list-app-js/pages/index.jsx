import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          aut dolorem eius! Aspernatur modi quasi, facere ipsam, et possimus
          laudantium autem tempora sit ratione necessitatibus ab quam eveniet
          quia optio!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          aut dolorem eius! Aspernatur modi quasi, facere ipsam, et possimus
          laudantium autem tempora sit ratione necessitatibus ab quam eveniet
          quia optio!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
