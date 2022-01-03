import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home({ posts }) {
  console.log(posts);

  const blogs = [1];

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
        <article className={styles.description}>
          <p>
            This is a simple blog that I put together with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org/"
            >
              Next.js
            </a>{" "}
            and a{" "}
            <a target="_blank" rel="noopener noreferrer" href="#">
              CMS
            </a>{" "}
            to document my journey in learning Japanese. I&apos;ll be adding
            more content as I learn more about the language.
          </p>
          <br />
          <p>For now, my goal is:</p>
          <ul>
            <li>To understand spoken Japanese </li>
            <li>To try and speak Japanese</li>
          </ul>
          <br />
          <p>
            To acheive this, My plan is to learn 25 new Japanese words and 5
            Japanese sentences. I&apos;ll use this blog to keep myself
            accountable. <br />
            In each blog, I&apos;ll add side notes and references that I find
            helpful.
          </p>
        </article>
        <div className={styles.blogsContainer}>
          {blogs.map((blog, index) => (
            <a key={index} href="#" className={styles.blogsContainerItem}>
              <div className={styles.left}>
                <span className={styles.title}>
                  This is the title
                  <p className={styles.subTitle}>
                    This time I learnt about the different alphabets in Japanese
                    and their origins
                  </p>
                </span>
              </div>
              <div className={styles.right}>
                <span className={styles.date}>01/01/2022</span>
                <span className={styles.gotoBlog} />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogs: [
        {
          title: "This is the title",
          subTitle:
            "This time I learnt about the different alphabets in Japanese and their origins",
          date: "01/01/2022",
          id: 1,
        },
      ],
    },
  };
}
