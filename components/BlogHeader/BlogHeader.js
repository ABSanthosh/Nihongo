import React from "react";
import PropTypes from "prop-types";
import style from "./BlogHeader.module.scss";
import Link from "next/link";

function BlogHeader(props) {
  return (
    <header className={style.BlogHeaderWrapper}>
      <Link href="/">
        <a className={style.logo}>
          Nihongo<sub>Blogs</sub>
        </a>
      </Link>
    </header>
  );
}

BlogHeader.propTypes = {
  // bla: PropTypes.string,
};

BlogHeader.defaultProps = {
  // bla: 'test',
};

export default BlogHeader;
