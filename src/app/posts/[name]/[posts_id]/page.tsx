import { getSpecifiedData } from '@/app/libs/api-libs';
import PostCard from '@/components/PostCard';

interface Props {
  params: {
    posts_id: string;
  };
}

export default async function SpecifiedPostPage({ params }: Props) {
  const { posts_id } = params;

  const data = await getSpecifiedData('/posts', `${posts_id}`);

  console.log(data);

  return (
    <main className="max-w-screen-sm grid gap-5 mx-auto">
      <div className="grid gap-2 p-2 border border-black rounded-md">
        <PostCard item={data} />
      </div>
    </main>
  );
}
