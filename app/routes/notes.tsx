import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllNotes } from "~/components/Notes/note-utils.server";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};
export const loader = async () => {
    const blogs = getAllNotes();
    return blogs;
};
type Blog = {
    title: string;
    link: string
}
export default function Blogs() {
    const notes: Blog[] = useLoaderData();
    return (
        <div className="max-h-screen h-screen max-w-[720px] mx-auto pt-[40px]">
            <h1 className="font-head text-5xl font-bold text-white">Notes</h1>

            <div className="flex flex-col gap-4 mt-[40px]">
                {
                    notes.map(blog => <a key={blog.title} href={blog.link} className="text-md grid grid-cols-[1fr_20fr]">✍️ <span>{blog.title}</span></a>)
                }
            </div>
        </div>
    );
}


