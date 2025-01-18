import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Header } from "../components/Header";
import { useBlogs } from "./hooks";
  

export default function Blogs() {
    const {loading, blogs} = useBlogs()

    if(loading) {
        return <div>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }

    return <div className="flex flex-col">
        <Header/>
        {blogs.map(blog => <BlogCard
            id={blog.id}
            authorName={blog.author.firstName}
            title={blog.title}
            content={blog.content}
            publishedDate="Jan11,2025"
        />)}
        
    </div>
}