import React from "react";
import style from "./BlogDescription.module.scss";

function BlogDescription() {
  return (
    <article className={style.BlogDescription}>
      <p>
        This is a simple blog that I put together with{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
          Next.js
        </a>{" "}
        and a{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://strapi.io/">
          Strapi CMS
        </a>{" "}
        to document my journey in learning Japanese. I&apos;ll be adding more
        content as I learn more about the language.
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
        Japanese sentences. I&apos;ll use this blog to keep myself accountable.{" "}
        <br />
        In each blog, I&apos;ll add side notes and references that I find
        helpful.
      </p>
    </article>
  );
}

export default BlogDescription;
