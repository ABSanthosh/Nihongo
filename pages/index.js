import fs from "fs";
import path from "path";
import styles from "../styles/Home.module.scss";
import BlogDescription from "../components/BlogDescription/BlogDescription";
import matter from "gray-matter";

export default function Home({ postArray }) {
  const blogs = postArray;


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
        <div
          id="blogsContainer"
          className={styles.blogsContainer}
        >
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={`posts/${blog.frontMatter.id}`}
              className={styles.blogsContainerItem}
              style={{
                backgroundImage: `url(${blog.frontMatter.image})`,
              }}
            >
              <div className={styles.contentContainer}>
                <div className={styles.left}>
                  <span className={styles.title}>
                    {blog.frontMatter.title}
                    <p className={styles.subTitle}>
                      {blog.frontMatter.excerpt}
                    </p>
                  </span>
                </div>
                <div className={styles.right}>
                  <span className={styles.date}>{blog.frontMatter.date}</span>
                  <span className={styles.gotoBlog} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("Posts"));
  const postArray = files.map((file) => {
    const slug = file.replace(".md", "");
    const metaData = fs.readFileSync(path.join("Posts", file), "utf8");
    const { data: frontMatter } = matter(metaData);
    return {
      slug,
      frontMatter,
    };
  });

  postArray.sort((a, b) => {
    return parseInt(a["slug"]) > parseInt(b["slug"]) ? 1 : -1;
  });
  
  return {
    props: { postArray },
  };
}
