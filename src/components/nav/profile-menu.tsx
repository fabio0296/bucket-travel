"use client"
import { DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { sigOutClient } from "@visit-it/utils/supabase/authentication/client-auth";
import { LogOut, LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export interface ProfileMenuItem {
  text: string;
  icon: LucideIcon;
  clickHandler: () => void
}




export default function ProfileMenu(): React.ReactElement {
  const router = useRouter();
  const profileMenuItems: Array<ProfileMenuItem> = [
    {
      text: 'Log out',
      icon: LogOut,
      clickHandler: async () => { await sigOutClient(); router.push('/login'); router.refresh();}
    }
  ];

  return (
    <DropdownMenuGroup>
      { profileMenuItems.map((item: ProfileMenuItem) => (
        <DropdownMenuItem className="cursor-pointer" key={item.text} onClick={item.clickHandler}>
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.text}</span>
        </DropdownMenuItem>
      ))}
      
    </DropdownMenuGroup>
  );
}