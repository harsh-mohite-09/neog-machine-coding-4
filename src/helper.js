export const getSortedPosts = (posts, sortBy) => {
  if (sortBy === "latest") {
    return [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sortBy === "upvoted") {
    return [...posts].sort(
      (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
    );
  }
  return posts;
};
