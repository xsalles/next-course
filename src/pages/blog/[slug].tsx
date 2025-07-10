import Share from "@/components/Share";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ContentPost from "@/templates/blog/[slug]/ContentPost";
import { useRouter } from "next/router";

export default function PostPage() {
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
        <ContentPost slug={slug} />
        <Share />
      </div>
    </div>
  );
}
