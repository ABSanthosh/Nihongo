import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import style from "../../styles/BlogPage.module.scss";

export default function BlogPage(props) {
  return (
    <div className={style.BlogPage}>
      <BlogHeader />
      <pre className={style.temp}>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const files = fs.readdirSync(path.join("Posts"));

  let currentPost = files.map((file) => {
    const metaData = fs.readFileSync(path.join("Posts", file), "utf8");
    const { data: frontMatter, content } = matter(metaData);

    let { birthtime, mtime } = fs.statSync(path.join("Posts", file));
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
        file,
        mtime,
        content,
        birthtime,
        frontMatter,
      };
    } else {
      return null;
    }
  });

  currentPost = currentPost.filter((post) => post !== null)[0];

  console.log(currentPost);

  return {
    props: currentPost,
  };
}

// export async function getStaticProps({ params: { id } }) {
//   const files = fs.readdirSync(path.join("Posts"));
//   const currentPost = files.map((file) => {
//     const metaData = fs.readFileSync(path.join("Posts", file), "utf8");
//     const { data: frontMatter } = matter(metaData);
//     if (frontMatter.id === id) {
//       return {
//         frontMatter,
//         file,
//       };
//     }
//   });

//   console.log(currentPost);

//   return {
//     props: {},
//   };
// }

// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join("Posts"));

//   const paths = files.map((file) => {
//     const metaData = fs.readFileSync(path.join("Posts", file), "utf8");
//     const { data: frontMatter } = matter(metaData);
//     console.log(id);
//     return {
//       params: {
//         id: frontMatter.id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
