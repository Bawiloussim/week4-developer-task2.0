import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { DropdownMenu, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import { UserCircleIcon } from '@heroicons/react/24/solid';
export default function Navbar() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <nav className='glass sticky top-0 z-50 border-zinc-200 dark:border-zinc-700 border-b'>
            <div className='container mx-auto flex justify-between items-center py-4'>
            <Link to='/dashboard' className='text-lg font-bold'>
                Dev Task Manager
            </Link>
            <div className='flex items-center space-x-4'>
                <ThemeToggle />
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="user menu">
                        <UserCircleIcon className='h-8 w-8 text-zinc-700 dark:text-zinc-300' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-48'>
                    <DropdownMenuItem onClick={logout}>
                    Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </div>
        </nav>
)
}