import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import Logo from "../../assets/Logo.jpeg";
import {authProvider} from "../admin/providers/authProvider";

export function Navbar() {
  const user = authProvider.getCachedWhoami();

  return (
    <nav className="bg-gradient-to-r from-[#215048] via-[#557D56] to-[#8FB673] p-4">
      <div className="container mx-auto flex w-full  items-center justify-between gap-x-6">
        <div>
          <img src={Logo} alt="Logo" className="h-[6vh] rounded-full" />
        </div>
        <div className="flex w-full items-center justify-center space-x-12 font-bold">
          <Link
            to="/"
            className="text-white transition-all duration-300 hover:text-gray-400"
          >
            Accueil
          </Link>
          <Link
            to="/biodiversite"
            className="text-white transition-all duration-300 hover:text-gray-400"
          >
            Biodiversite
          </Link>
          <Link
            to="/community"
            className="text-white transition-all duration-300 hover:text-gray-400"
          >
            Communite
          </Link>
        </div>
        <div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="ghost" className="p-0 ring-0">
                <Avatar>
                  <AvatarImage
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                  />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              align="end"
              className="z-[100] rounded-md bg-white p-2 text-black shadow-lg"
          {!!user && (
            <Link
              to="/community"
              className="text-white transition-all duration-300 hover:text-gray-400"
            >
              Communite
            </Link>
          )}

          {!!user && <AuthenticatedUserMenu />}
        </div>
      </div>
    </nav>
  );
}

const AuthenticatedUserMenu = () => {
  return (
    <div className="flex flex-1 justify-end">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" className="p-0">
            <Avatar>
              <AvatarImage
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          align="end"
          className="z-[100] rounded-md bg-white p-2 text-black shadow-lg"
        >
          <DropdownMenu.Item className=" cursor-pointer rounded-md p-2 hover:bg-gray-200">
            <Link to="/admin">Administration</Link>
          </DropdownMenu.Item>
          <hr />
          <DropdownMenu.Item className="cursor-pointer rounded-md p-2 hover:bg-gray-200">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};
