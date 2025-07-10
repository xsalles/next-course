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
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function PostPage(post: ContentPostProps) {
  const router = useRouter();
  
  const slug = router.query.slug;

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
              {slug}
            </BreadcrumbItem>
          </BreadcrumbLink>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex w-full flex-col-reverse md:flex-row gap-8 mt-8">
        <ContentPost post={post.post}/>
        <Share />
      </div>
    </div>
  );
}

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
);

const recentPosts = sortedPosts.slice(0, 5)

const paths = recentPosts.map((post) => ({
  params: { slug: post.slug}
}))

return {
  paths,
  fallback: 'blocking'
}
})

export const getStaticProps = (async (context) => {
  const {slug} = context.params as { slug: string}

  const post = allPosts.find(
    (post) => post && post.slug === slug
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post
    }
  }
}) satisfies GetStaticProps