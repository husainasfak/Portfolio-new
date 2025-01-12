import { useLoaderData } from "@remix-run/react";



export const loader = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    return slug
};

const Blog = () => {
    const slug = useLoaderData();
    console.log('slug', slug)
    return (
        <div>Blog</div>
    )
}

export default Blog