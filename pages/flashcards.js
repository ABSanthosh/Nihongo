import React from "react";
import BlogHeader from "../components/BlogHeader/BlogHeader";
import style from "../styles/Flashcards.module.scss";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Extractor } from "markdown-tables-to-json";

export default function flashcards(props) {
  // console.log(props["contentArray"]);
  return (
    <div className={style.flashcardsWrapper}>
      <BlogHeader />
      <div className={style.flashcardContainer}>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        {/* <pre>
          {props["props"].map((item) => {
            {
              item;
            }
          })}
        </pre> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(path.join("Posts"));
  const wordList = [];
  let contentArray = fileNames.map((fileName) => {
    const metaData = fs.readFileSync(path.join("Posts", fileName), "utf8");
    const { data: frontMatter, content } = matter(metaData);

    let table = content.split(`### Words for the day\n\n`)[1];
    table !== undefined ? (table = table.split(`\n\n`)[0]) : (table = "");
    console.log(table);
    console.log(Extractor.extract(table, "columns", false));
    console.log("\n");
    return {
      id: frontMatter.id,
      content: `${table}`,
    };
  });
  //   props = props.filter((path) => path !== null);
  return {
    props: { contentArray },
  };
}
