import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <h1 style={{ color: "darkgreen", fontWeight: "bold" }}>
          TanStack Query
        </h1>
        <div style={{ padding: "2rem" }}>
          <Link
            href="/posts"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 15px",
              textDecoration: "none",
            }}
          >
            Fetch Posts
          </Link>
          <div style={{ padding: "2rem", display: "inline-block" }}>
            <Link
              href="/comments"
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 15px",
                textDecoration: "none",
              }}
            >
              Fetch Comments
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
