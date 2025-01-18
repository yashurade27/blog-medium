import { Link } from "react-router-dom";
import { Blog } from "../pages/hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Link to={"/blogs"}>
        <Header />
      </Link>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 px-6 py-12">
        <div className="max-w-5xl w-full bg-white p-8 shadow-lg rounded-lg">
          {/* Blog Header */}
          <h1 className="text-5xl font-bold text-gray-900">{blog.title}</h1>
          <p className="text-gray-600 text-lg mt-2">Published: 18th Jan 2025</p>

          {/* Blog Content */}
          <div className="mt-6 text-lg text-gray-800 leading-relaxed">
            {blog.content}
          </div>

          {/* Author Section */}
          <div className="mt-12 flex items-center space-x-4 border-t pt-6">
            <Avatar name={blog.author.firstName} />
            <div>
              <p className="text-xl font-semibold text-gray-900">
                {blog.author.firstName}
              </p>
              <p className="text-gray-600 text-lg">Master of Mirth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200 cursor-pointer">
      <div className="text-xl font-bold">Medium</div>
    </header>
  );
};
