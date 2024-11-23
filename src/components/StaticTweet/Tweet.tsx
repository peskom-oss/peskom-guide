import { Tweet } from "react-tweet";

export default function StaticTweet({ id }: { id: string }) {
  return (
    <div className="w-full flex justify-center">
      <Tweet id={id} />
    </div>
  );
}
