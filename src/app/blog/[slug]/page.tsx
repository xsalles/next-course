'use client'

import Share from "@/components/Share";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ContentPost, { ContentPostProps } from "@/templates/blog/[slug]/ContentPost";
import { allPosts } from "contentlayer/generated";

interface PageProps {
    params: { slug: string };
}

export default function PostPage({params}: PageProps) {

    console.log("Params:", params)
    console.log("All Posts:", allPosts)
  const slug = params.slug

  console.log("Slug:", slug)
  
  const post = allPosts.find((post) => post.slug === decodeURIComponent(slug));

  console.log("Post:", post)

  return (
    <div className="mt-20 px-4 lg:px-48 h-auto">
      <Breadcrumb className="mt-12">
        <BreadcrumbList>
          <BreadcrumbLink href="/blog">
            <BreadcrumbItem className="text-body-md text-white font-medium">
              Blog
            </BreadcrumbItem>
          </BreadcrumbLink>
          <BreadcrumbSeparator className="text-gray-300" />
          <BreadcrumbLink href={`/blog/${slug}`}>
            <BreadcrumbItem className="text-body-md text-blue-200 font-medium">
              {post ? post.title : "Carregando..."}
            </BreadcrumbItem>
          </BreadcrumbLink>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex w-full flex-col-reverse md:flex-row gap-8 mt-8">
        {
            post ? (
                <ContentPost post={post}/>
            ) : (
                <p>Carregando</p>
            )
        }
        <Share />
      </div>
    </div>
  );
}