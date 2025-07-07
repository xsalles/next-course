interface PostCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  author: {
    name: string;
    image: string;
  };
}

interface AvatarProps {
  author: {
    name: string;
    image: string;
  };
  title: string;
}
