import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"


function Navbar() {
    return (
        <div
        className="bg-primary dark:bg-stale-700 text-white py-2 px-5 
            flex justify-between"
        >
            <h1>D</h1>
            <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                    <AvatarImage 
                    src="https://github.com/shadcn.png"
                    alt="pic"/>
                    <AvatarFallback className="text-black">P</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/auth">Logout</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>

        </div>
    );
}

export default Navbar;
