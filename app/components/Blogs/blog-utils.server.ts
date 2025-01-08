import fs from "fs";
import path from "path";
import matter from 'gray-matter'
export function getAllBlogs() {
  const blogsDir = path.join(process.cwd(), "BlogsContent");
  const blogContents = fs.readdirSync(blogsDir);
  const blogs = blogContents.map((file) => {
    const fileContent = fs.readFileSync(`BlogsContent/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });
  return blogs
}

