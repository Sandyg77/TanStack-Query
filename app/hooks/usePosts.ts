// app/hooks/usePosts.ts
"use client";

import { useQuery } from "@tanstack/react-query";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function usePosts() {
  const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}
