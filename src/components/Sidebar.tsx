import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "./ui/command"
import {
    LayoutDashboard,
    Newspaper,
    Folders,
    CreditCard,
    Settings,
    User
} from 'lucide-react'
import Link from "next/link";

function Sidebar() {
    return ( 
        <Command className="bg-secondary ">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <Link href="/dashboard">Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper className="mr-2 h-4 w-4" />
                        <Link href="/posts">Posts</Link>
                    </CommandItem>
                    <CommandItem>
                        <Folders className="mr-2 h-4 w-4" />
                        <Link href="/categories">Categories</Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link href="/profile">Profile</Link>
                        <CommandShortcut>Ctrl + P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <Link href="/belling">Belling</Link>
                        <CommandShortcut>Ctrl + B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <Link href="/settings">Settings</Link>
                        <CommandShortcut>Ctrl + S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
        
    );
}

export default Sidebar;