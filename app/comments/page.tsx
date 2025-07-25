"use client";

import { Suspense } from "react";
import useComments from "../hooks/useComments";

function Comments({ postId }: { postId: number }) {
  const { data: comments } = useComments(postId); // You do not need to use error, isFetching because it throws instead of returning states.
  return (
    <ul>
      {comments.map((c) => (
        <span key={c.id}>
          <li>
            <strong>{c.name}</strong>
          </li>
          <li>{c.email}</li>
          <li>{c.body}</li>
        </span>
      ))}
    </ul>
  );
}

export default function CommentsPage() {
  return (
    <>
      <div>
        <h1 style={{ color: "darkblue", fontWeight: "bold" }}>Comments Page</h1>
        <span style={{ color: "blue", fontWeight: "bold", padding: "25px" }}>
          Latest comments fetched:
        </span>
        <Suspense fallback={<div>Loading comments...</div>}>
          <Comments postId={1} />
        </Suspense>
      </div>
    </>
  );
}
