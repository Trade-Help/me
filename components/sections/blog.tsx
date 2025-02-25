import { BlogPost } from '../../types';

import Section from '@/components/common/section';
import Post from '@/components/common/post';

type BlogProps = {
  posts: BlogPost[];
};

const Blog = ({ posts }: BlogProps) => {
  return (
    <Section id="blog" title="My Latest Articles">
      <div className="mx-auto mt-10 mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.uuid} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default Blog;
