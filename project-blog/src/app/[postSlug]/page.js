import React from "react";

import BlogHero from "@/components/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import CodeSnippet from "@/components/CodeSnippet";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

export async function generateMetadata({ params }) {
  const {
    frontmatter: { title, abstract },
  } = await loadBlogPost(`${params.postSlug}`);

  return {
    title: title,
    description: abstract,
  };
}

const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
  {
    ssr: false,
    loading: Spinner,
  }
);

const CircularColorsDemo = dynamic(
  () => import("@/components/CircularColorsDemo"),
  {
    ssr: false,
    loading: Spinner,
  }
);

async function BlogPost({ params }) {
  const {
    frontmatter: { title, publishedOn },
    content,
  } = await loadBlogPost(`${params.postSlug}`);

  const components = { CodeSnippet, DivisionGroupsDemo, CircularColorsDemo };

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}

export default BlogPost;
