import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { getAllData } from './libs/api-libs';

export default async function Home() {
  const data = await getAllData('/posts');

  return (
    <main className="max-w-screen-sm grid gap-5 mx-auto">
      {data?.map((item: any) => (
        <Link key={item.posts_id} href={`/posts/${item.name.toLowerCase()}/${item.posts_id}`} className="grid gap-2 p-2 border border-black rounded-md">
          <PostCard item={item} />
        </Link>
      ))}
    </main>
  );
}
