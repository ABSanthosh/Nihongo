import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import React from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import style from "../../styles/BlogPage.module.scss";
import markdownStyle from "../../styles/Markdown.module.scss";
import ThatsAllFolks from "../../Assets/thatsallfolks.png";

export default function BlogPage(props) {
  const pageContent = props.paths[0]["params"];

  return (
    <div className={style.BlogPage}>
      <BlogHeader />
      {/* <pre className={style.temp}>{JSON.stringify(props, null, 2)}</pre> */}
      <h2
        className={style.heroImage}
        style={{ backgroundImage: `url(${pageContent.frontMatter.image})` }}
      >
        <span className={style.heroTitle}>{pageContent.frontMatter.title}</span>
        <div className={style.dateBox}>
          <span>Created At: {pageContent.frontMatter.date}</span>
        </div>
      </h2>
      <article
        className={markdownStyle.markdownBody}
        dangerouslySetInnerHTML={{ __html: marked(pageContent.content) }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(path.join("Posts"));

  const paths = fileNames.map((fileName) => {
    const metaData = fs.readFileSync(path.join("Posts", fileName), "utf8");
    const { data: frontMatter } = matter(metaData);

    return {
      params: {
        id: `${frontMatter.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const fileNames = fs.readdirSync(path.join("Posts"));


  let paths = fileNames.map((fileName) => {
    const metaData = fs.readFileSync(path.join("Posts", fileName), "utf8");
    const { data: frontMatter, content } = matter(metaData);
    let { birthtime, mtime } = fs.statSync(path.join("Posts", fileName));
    birthtime = birthtime
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join("/");
    mtime =
      mtime.toISOString().split("T")[0].split("-").reverse().join("/") +
      "||" +
      mtime.toISOString().split("T")[1];

    if (frontMatter.id === parseInt(id)) {
      return {
        params: {
          id: `${frontMatter.id}`,
          content,
          frontMatter,
          birthtime: `${birthtime}`,
          mtime: `${mtime}`,
        },
      };
    } else {
      return null;
    }
  });
  paths = paths.filter((path) => path !== null);

  return {
    props: { paths },
  };
}
