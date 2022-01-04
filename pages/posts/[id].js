import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function BlogPage(props) {

  return <div>{JSON.stringify(props)}</div>;
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const postsResponse = await axios.get(
    `http://localhost:1337/api/posts/${id}`
  );

  return {
    props: postsResponse.data,
  };
}