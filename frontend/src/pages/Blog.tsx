import { BlogSkeletonFull } from "../components/BlogSkeletonFull";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "./hooks";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return (
      <div>
        <BlogSkeletonFull />
      </div>
    );
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
}
