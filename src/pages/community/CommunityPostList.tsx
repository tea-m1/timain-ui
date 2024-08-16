import {CommunityPostCard} from "./CommunityPostCard";

export const CommunityPostList = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-y-5 overflow-y-auto py-4">
      <CommunityPostCard />
      <CommunityPostCard />
    </div>
  );
};
