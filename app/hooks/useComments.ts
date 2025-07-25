import { useSuspenseQuery } from "@tanstack/react-query";

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function useComments(postId: number) {
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    return response.json();
  };
  return useSuspenseQuery<Comment[]>({
    queryKey: ["comments", postId],
    queryFn: fetchComments,
  });
}
