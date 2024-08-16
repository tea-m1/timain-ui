import {Avatar} from "@/components/ui/avatar";
import {AvatarImage} from "@radix-ui/react-avatar";
import React from "react";

export interface CommunityPostCreateInviteProps {
  onClick?: () => void;
}

export const CommunityPostCreateInvite: React.FC<CommunityPostCreateInviteProps> =
  React.forwardRef<HTMLDivElement, CommunityPostCreateInviteProps>(
    ({onClick}, ref) => {
      return (
        <div
          role="button"
          className="flex w-[50rem] flex-row items-center gap-x-4 rounded-md border border-gray-100 bg-white p-6 hover:border hover:border-gray-500"
          ref={ref}
          onClick={onClick}
        >
          <Avatar className="h-16 w-16">
            <AvatarImage
              className="rounded-full"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/8c/8c85d02b5f9aa5395454f9f783b1001ac411ca96_full.jpg"
            />
          </Avatar>
          <div>
            <h4 className="text-md scroll-m-20 font-semibold text-gray-400">
              Partagez vos <b>compétences</b>, <b>ressources</b> et{" "}
              <b>expériences</b> avec notre communauté !
            </h4>
          </div>
        </div>
      );
    }
  );
