import {Button} from "@/components/ui/button";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {Link} from "react-router-dom";
import NatgeoLogo from "../../assets/logo.png";

export function Navbar() {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src={NatgeoLogo} alt="Logo" className="h-[6vh] " />
        </div>
        <div className="flex flex-1 justify-center space-x-12 font-bold">
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
            to="/services"
            className="text-white transition-all duration-300 hover:text-gray-400"
          >
            Communite
          </Link>
          <Link
            to="/contact"
            className="text-white transition-all duration-300 hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
        <div>
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
              className="rounded-md bg-white p-2 text-black shadow-lg"
            >
              <DropdownMenu.Item className="cursor-pointer rounded-md p-2 hover:bg-gray-200">
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  );
}
