/* eslint-disable jsx-a11y/heading-has-content */

import { useLoaderData } from '@remix-run/react';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import { getNote } from '~/components/Notes/note-utils.server';

export async function loader({ params }: { params: { category: string; slug: string } }) {
  const note = await getNote(params.category, params.slug);
  return { note };
}

export default function NotePage() {
  const { note } = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(note.code), [note.code]);

  return (
    <article className="max-w-[720px] mx-auto pt-[40px]">
      <div className="prose lg:prose-xl prose-h1:text-3xl prose-h1:font-head prose-h1:font-semibold prose-h2:text-2xl prose-h3:text-xl">
        <Component />
      </div>
    </article>
  );
}