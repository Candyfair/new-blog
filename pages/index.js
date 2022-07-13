import { getPosts } from "../lib/functions";
import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Home.module.css'

const Home = (props) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Blog</h1>
    </header>
    <main>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <img src={post.feature_image} alt={post.title} width={400} height={250} />
            <p>{post.feature_image}</p>
          </li>
        ))}
      </ul>
    </main>
    <footer>

    </footer>
  </div>
);

export default Home;

// Generate this page at build time
export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1, // Allows for incremental static regeneration by enabling Next to regenerate the page 1 second after a request comes in
  };
}
