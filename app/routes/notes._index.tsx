import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllCategories } from "~/components/Notes/note-utils.server";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};
export async function loader() {
    const categories = await getAllCategories();
    return categories;
}

export default function Blogs() {
    const notes:string[] = useLoaderData();

    return (
        <div className="max-h-screen h-screen max-w-[720px] mx-auto pt-[40px]">
            <h1 className="font-head text-4xl font-bold text-white">Notes</h1>

            <div className="flex flex-col gap-4 mt-[28px] text-xl">
                {
                    notes.map(blog => <a key={blog} href={`/notes/${blog}`} className="text-md grid grid-cols-[1fr_20fr]">✍️ <span>{blog}</span></a>)
                }
            </div>
        </div>
    );
}


