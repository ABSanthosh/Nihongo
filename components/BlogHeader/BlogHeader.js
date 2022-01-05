import React from "react";
import PropTypes from "prop-types";
import style from "./BlogHeader.module.scss";
import Link from "next/link";

function BlogHeader(props) {
  return (
    <Link href="/">
      <a className={style.BlogHeaderWrapper}>
        <p className={style.logo}>
          Nihongo<sub>Blogs</sub>
        </p>
      </a>
    </Link>
  );
}

BlogHeader.propTypes = {
  // bla: PropTypes.string,
};

BlogHeader.defaultProps = {
  // bla: 'test',
};

export default BlogHeader;
