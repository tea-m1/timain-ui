import {FC, memo} from "react";
import {Link} from "react-router-dom";
import {LogOut, User2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip.tsx";

export interface AnonymousHeaderProps {
  page?: "sign_up" | "sign_in";
}

const AnonymousHeader: FC<AnonymousHeaderProps> = ({page}) => {
  return (
    <div className="mx-auto my-0 flex h-full w-[95%] items-center justify-between bg-white">
      <div className="logo w-30 h-15 col-span-1">
        <a
          href="#"
          data-testid="blogify-logo"
          className="text-4xl font-bold tracking-tight"
        >
          _
        </a>
      </div>
      <div data-testid="auth-button" className="space-x-3">
        {page === "sign_up" && (
          <Button variant="outline" size="lg" className="h-9" asChild>
            <Link to="/login">Sign in</Link>
          </Button>
        )}
        {page === "sign_in" && (
          <Button size="lg" className="h-9" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        )}

        {!page && (
          <>
            <Button variant="outline" size="lg" className="h-9" asChild>
              <Link to="/login">Login</Link>
            </Button>

            <Button size="lg" className="h-9">
              <Link to="/signup">Sign up</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

const AuthenticatedHeader: FC = () => {
  const {queue, isLoading} = useLoading("logout");
  const authStore = useAuthStore();

  const _logout = async () => {
    await queue(async () => {
      await logout();
      localStorage.clear();
      window.location.reload();
    });
  };

  return (
    <div
      className="grid h-full w-full grid-cols-10 items-center gap-3 bg-white px-5"
      data-testid="authenticated-header"
    >
      <div className="logo w-30 h-15 col-span-1">
        <Link
          to="/"
          data-testid="blogify-logo"
          className="font-logo text-2xl font-bold"
        >
          BLOGIFY
        </Link>
      </div>
      <div className="col-span-8 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col flex-wrap md:flex-row">
            <NavigationMenuItem className="mx-4 w-40">
              <Link to="/">
                <NavigationMenuLink
                  data-testid="home-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-4 w-40">
              <Link to="/posts">
                <NavigationMenuLink
                  data-testid="about-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Posts
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-4 w-40">
              <Link to={`/users/${authStore.user?.id}`}>
                <NavigationMenuLink
                  data-testid="profile-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="col-span-1 flex justify-evenly align-middle">
        <Tooltip>
          <TooltipTrigger>
            <Link to={`/users/${authStore.user?.id}`}>
              <Avatar>
                <AvatarImage data-testid="avatar" src="random_link" />
                <AvatarFallback data-testid="avatar">
                  <User2 className="text-2xl" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Profile</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Button
              data-testid="logout-button"
              className="flex justify-evenly align-middle"
              isLoading={isLoading}
              onClick={_logout}
            >
              <LogOut />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Logout</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

const NavBarComponent: FC<AnonymousHeaderProps> = ({page}) => {
  return null ? <AuthenticatedHeader /> : <AnonymousHeader page={page} />;
};

export const NavBar = memo(NavBarComponent);
