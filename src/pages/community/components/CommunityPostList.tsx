import {CommunityPostCard} from "./";

export const CommunityPostList = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-5 py-4">
      <CommunityPostCard />
      <CommunityPostCard />
    </div>
  );
};
