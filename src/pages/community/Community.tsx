import {Layout} from "@/layout";
import {CommunityPostCreateInvite, CommunityPostList} from "./components";
import {CommunityPostFormDialog} from "./components/CommunityPostFormDialog";
import {Navbar} from "@/features/home/Navbar";

export const Community = () => {
  return (
    <Layout header={<Navbar />}>
      <div className="flex flex-col items-center overflow-y-auto bg-green-900 py-3">
        <CommunityPostFormDialog
          mode="Create"
          trigger={<CommunityPostCreateInvite />}
        />
        <CommunityPostList />
      </div>
    </Layout>
  );
};
