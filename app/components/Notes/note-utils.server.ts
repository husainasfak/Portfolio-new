import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
