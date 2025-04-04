import { createBlogPost, fetchPosts } from "./BlogService.js";

export async function createBlogController(req, resp) {
  // TODO: remove default genre after testing
  const { description, genre = "politics" } = req.body;
  if (!description || description.length > 500 || !genre) {
    return resp.status(400).json({ message: "Invalid post" });
  }
  await createBlogPost({ userId: req.userId, description, genre });
  resp.status(201).json({ message: "Post created successfully" });
}

export async function fetchAllBlogsController(_, resp) {
  const serverResponse = {
    data: await fetchPosts(),
    message: "Posts fetched successfully",
  };
  resp.status(200).json(serverResponse);
}
