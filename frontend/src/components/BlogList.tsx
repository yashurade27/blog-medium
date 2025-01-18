import { BlogCard, BlogCardProps } from "./BlogCard";
import { Header } from "./Header";

export const BlogList = ({ blogs }: { blogs: BlogCardProps[] }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            id = {blog.id}
            key={index}
            authorName={blog.authorName}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.publishedDate}
          />
        ))}
      </div>
      <Header/>
    </div>
  );
};


