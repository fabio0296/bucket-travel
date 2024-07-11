
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import ProfileMenu from "./nav/profile-menu";
import { getUserServer } from "@visit-it/utils/supabase/authentication/server-auth";
import { Fragment } from "react";


export async function AppHeader() {
  const user = await getUserServer();
  return user ?
    (
      <nav className="w-[96.666667%] mx-auto flex flex-row py-5">
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hover:bg-transparent">
                <Avatar className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <AvatarImage src={user?.user_metadata.avatar_url} className="aspect-square h-full w-full" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>{user?.user_metadata.full_name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <ProfileMenu />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    )
    :
    <Fragment />;
}