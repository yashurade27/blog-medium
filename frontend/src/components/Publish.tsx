import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Publish() {
  const [title, setTitle] = useState("");
  const [content, setDescription] = useState("");
  const navigate = useNavigate();

  const handlePublish = async (e: any) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/blog/${response.data.id}`); // Redirect after successful post
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  return (
    <div>
      <div>
        <Link to={"/blogs"}>
          <Header />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl mt-10 border border-gray-200">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Publish Your Blog
        </h2>
        <form className="space-y-8" onSubmit={handlePublish}>
          {/* Title Input */}
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-400 text-lg"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Description
            </label>
            <textarea
              value={content}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description about your blog..."
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-400 text-lg"
            />
          </div>

          {/* Publish Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl transition-all"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 cursor-pointer">
      <div className="text-xl font-bold">Medium</div>
    </header>
  );
};
