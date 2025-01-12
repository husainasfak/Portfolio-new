
import { useLoaderData, Link, Outlet, redirect } from '@remix-run/react';
import { getNotesByCategory } from '~/components/Notes/note-utils.server';



export async function loader({ params, request }: { params: { category: string }; request: Request }) {
  const notes = await getNotesByCategory(params.category);
  const url = new URL(request.url);
  if (notes.length > 0 && url.pathname === `/notes/${params.category}`) {
    const firstNoteSlug = notes.sort((a, b) => a.seq - b.seq)[0].slug;
    return redirect(`/notes/${params.category}/${firstNoteSlug}`);
  }
  return { notes, category: params.category };
}

export default function CategoryLayout() {
  const { notes, category } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className='fixed bg-black rounded-lg py-4 px-6 top-10 left-4'>
        <div className='flex flex-col gap-4'>
          {notes.sort((a, b) => a.seq - b.seq).map((note) => (
            <Link
              key={note.slug}
              to={`/notes/${category}/${note.slug}`}
            >
              <h3 className="text-sm text-white">{note.title}</h3>
              {note.description && (
                <p className="text-xs mt-1 text-[#737373]">{note.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="overflow-y-auto mb-[100px]">
        <Outlet />
      </div>
    </div>
  );
}