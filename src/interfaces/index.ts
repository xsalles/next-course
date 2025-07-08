import { Author } from "contentlayer/generated";

export interface PostCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  author: Author;
}

export interface AvatarProps {
  author: Author | undefined;
  title: string | undefined;
  isPostPage?: boolean;
  date?: string;
}

export interface MarkdownProps {
  children: string;
}
