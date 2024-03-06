interface Props {
  name: string;
  created_at: string;
  content: string;
}

export default function PostCard({ item }: { item: Props }) {
  return (
    <>
      <div className="flex gap-2">
        <p className="font-semibold mb-1">{item.name}</p>
        <p>|</p>
        <p>{item.created_at}</p>
      </div>
      <hr />
      <h1>{item.content}</h1>
    </>
  );
}
