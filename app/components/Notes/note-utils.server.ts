import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { Notes } from "types";
import rehypeHighlight from "rehype-highlight";
export async function getAllCategories() {
  const contentDir = path.join(process.cwd(), "NotesContent");
  const categories = await fs.readdirSync(contentDir);
  return categories;
}

export async function getNotesByCategory(category: string) {
  const categoryDir = path.join(process.cwd(), "NotesContent", category);
  const files = await fs.readdirSync(categoryDir);

  const notes = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(categoryDir, filename);
      const source = await fs.readFileSync(filePath, "utf-8");

      const { data } = matter(source);
      return {
        ...(data as Notes),
      };
    })
  );

  return notes;
}

export async function getNote(category: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    "NotesContent",
    category,
    `${slug}.mdx`
  );

  console.log(
    "----------------------------------------------------------------------------------------------",
    filePath
  );
  const source = await fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  const result = await bundleMDX({
    source: content,
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
      ];
      return options;
    },
  });

  return {
    frontmatter: data,
    code: result.code,
  };
}

export function getAllNotes() {
  const notesDir = path.join(process.cwd(), "NotesContent");
  const noteContents = fs.readdirSync(notesDir);
  const notes = noteContents.map((file) => {
    const fileContent = fs.readFileSync(`NotesContent/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });
  return notes;
}
