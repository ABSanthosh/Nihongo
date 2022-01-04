import axios from "axios";
import BlogDescription from "../components/BlogDescription/BlogDescription";
import styles from "../styles/Home.module.scss";

export default function Home(props) {
  const blogs = props.data;

  console.log();

  return (
    <div className={styles.container}>
      <header className={styles.homeHeader}>
        <h1 className={styles.title}>
          Nihongo
          <sub className={styles.subHeader}>
            <i>blogs</i>
          </sub>
        </h1>
      </header>
      <hr />
      <main className={styles.main}>
        <BlogDescription styles={styles} />
        <div className={styles.blogsContainer}>
          {blogs.map((blog, index) => (
            <a
              key={index}
              target="_blank"
              href={`posts/${blog.id}`}
              rel="noopener noreferrer"
              className={styles.blogsContainerItem}
            >
              <div className={styles.left}>
                <span className={styles.title}>
                  {blog.attributes.title}

                  <p className={styles.subTitle}>
                    {blog.attributes.description}
                  </p>
                </span>
              </div>
              <div className={styles.right}>
                <span className={styles.date}>
                  {blog.attributes.createdAt
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("/")}
                </span>
                <span className={styles.gotoBlog} />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const postsResponse = await axios.get("http://localhost:1337/api/posts");

  return {
    props: postsResponse.data,
  };
}
