import { Header } from "./FullBlog";

export const BlogSkeletonFull = () => {
    return (
      <div>
        <Header/>
        <div className="min-h-screen flex flex-col items-center bg-gray-100 px-6 py-12">
          <div className="max-w-5xl w-full bg-white p-8 shadow-lg rounded-lg">
            {/* Blog Header */}
            <div className="h-8 bg-gray-300 rounded-full w-1/4 animate-pulse mb-4"></div> {/* Blog title placeholder */}
            <div className="h-4 bg-gray-300 rounded-full w-1/3 animate-pulse mb-6"></div> {/* Date placeholder */}
  
            {/* Blog Content */}
            <div className="h-4 bg-gray-300 rounded-full w-3/4 animate-pulse mb-4"></div> {/* Content placeholder */}
            <div className="h-4 bg-gray-300 rounded-full w-3/4 animate-pulse mb-4"></div> {/* Content placeholder */}
            <div className="h-4 bg-gray-300 rounded-full w-2/3 animate-pulse mb-4"></div> {/* Content placeholder */}
            
            {/* Author Section */}
            <div className="mt-12 flex items-center space-x-4 border-t pt-6">
              <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div> {/* Avatar placeholder */}
              <div className="flex flex-col space-y-2">
                <div className="h-4 bg-gray-300 rounded-full w-32 animate-pulse"></div> {/* Author name placeholder */}
                <div className="h-4 bg-gray-300 rounded-full w-24 animate-pulse"></div> {/* Author role placeholder */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  