import { getPosts } from "../lib/functions";
import Link from "next/link";

const Index = (props) => (
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Index;

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
