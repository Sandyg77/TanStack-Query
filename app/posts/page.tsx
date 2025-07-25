"use client";

import usePosts from "../hooks/usePosts";

export default function PostsPage() {
  const { data, isPending, error } = usePosts();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <h1 style={{ color: "darkblue", fontWeight: "bold" }}>Posts Page</h1>
        <span style={{ color: "blue", fontWeight: "bold", padding: "25px" }}>
          Latest posts fetched:
        </span>
        <ul>
          {data?.slice(0, 10).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
