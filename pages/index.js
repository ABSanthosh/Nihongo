import fs from "fs";
import path from "path";
import styles from "../styles/Home.module.scss";
import BlogDescription from "../components/BlogDescription/BlogDescription";
import matter from "gray-matter";
import { useEffect, useState } from "react";

export default function Home({ postArray }) {
  const blogs = postArray;
  const [rowCount, setRowCount] = useState(`repeat(1,1fr)`);

  useEffect(() => {
    setRowCount(
      `repeat(${document.querySelector("#blogsContainer").children.length},1fr)`
    );
  }, []);

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
          style={{
            gridTemplateRows: rowCount,
          }}
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
    let { birthtime, mtime } = fs.statSync(path.join("Posts", file));
    birthtime = birthtime.toISOString();
    mtime = mtime.toISOString();
    return {
      slug,
      frontMatter,
      birthtime,
      mtime,
    };
  });

  return {
    props: { postArray },
  };
}
