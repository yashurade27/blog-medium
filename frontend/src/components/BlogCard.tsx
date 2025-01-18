import { Link } from "react-router-dom";
export interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number
  }

  export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
  }: BlogCardProps) => {
    return (
      <Link to={`/blog/${id}`}>
        <div className="w-full max-w-screen-md mx-auto pb-6 border-b border-gray-300 cursor-pointer">
        <div className="p-6">
          <div className="flex flex-row mb-4">
            <div className="mr-3">
              <Avatar name={authorName} />
            </div>
            <div className="mt-2 text-lg">{authorName}</div>
          </div>
          <div className="text-3xl font-sans font-bold text-gray-800">{title}</div>
          <div className="text-slate-600 font-sans mb-4">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-slate-800 flex flex-row">
              {publishedDate}
              <div className="mt-1 flex flex-row ml-3">
                <div className="ml-5">
                  <Claps />
                </div>
                <div className="ml-5">
                  <Responses />
                </div>
              </div>
            </div>
            <div className="flex flex-row ml-20">
              <div className="ml-5">
                <Showless />
              </div>
              <div className="ml-5">
                <Save />
              </div>
              <div className="ml-5">
                <More />
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
  };
  
  export const BlogList = ({ blogs }: { blogs: BlogCardProps[] }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            id= {blog.id}
            key={index}
            authorName={blog.authorName}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.publishedDate}
          />
        ))}
      </div>
    );
  };
  

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

function Claps() {
    return (
      <div className="hover:scale-125 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="#6B6B6B"
            fillRule="evenodd"
            d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    );
  }
  

function Responses() {
  return (
    <div className="hover:scale-125 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#6B6B6B"
        viewBox="0 0 16 16"
      >
        <path
          fill="#6B6B6B"
          d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"
        ></path>
      </svg>
    </div>
  );
}

function Showless() {
  return (
    <div className="hover:scale-125 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"
        ></path>
      </svg>
    </div>
  );
}

function Save() {
  return (
    <div className="hover:scale-125 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#000"
          d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
        ></path>
      </svg>
    </div>
  );
}

function More() {
  return (
    <div className="hover:scale-125 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
