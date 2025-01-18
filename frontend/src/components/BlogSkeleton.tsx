
export function BlogSkeleton() {
    return (
      <div>
      <div className="w-full max-w-screen-md mx-auto pb-6 border-b border-gray-300 cursor-pointer">
        <div className="p-6">
          <div className="flex flex-row mb-4">
            <div className="mr-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div> {/* Circle */}
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4 animate-pulse"></div> {/* Smaller line */}
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 animate-pulse"></div> {/* Larger curved line */}
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4 animate-pulse"></div> {/* Smaller line */}
          <div className="flex flex-row justify-between">
            <div className="text-slate-800 flex flex-row">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4 animate-pulse"></div> {/* Smaller line */}
              <div className="mt-1 flex flex-row ml-3">
                <div className="ml-4 bg-gray-200 h-2 w-2 rounded-full dark:bg-gray-700 animate-pulse"></div> {/* Smaller circle */}
                <div className="ml-4 bg-gray-200 h-2 w-2 rounded-full dark:bg-gray-700 animate-pulse"></div> {/* Smaller circle */}
              </div>
            </div>
            <div className="flex flex-row ml-16">
              <div className="ml-4 bg-gray-200 h-2 w-2 rounded-full dark:bg-gray-700 animate-pulse"></div> {/* Smaller circle */}
              <div className="ml-4 bg-gray-200 h-2 w-2 rounded-full dark:bg-gray-700 animate-pulse"></div> {/* Smaller circle */}
              <div className="ml-4 bg-gray-200 h-2 w-2 rounded-full dark:bg-gray-700 animate-pulse"></div> {/* Smaller circle */}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}


