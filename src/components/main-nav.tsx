import { Link } from '@tanstack/react-router';
import { Laptop2 } from 'lucide-react';

export function MainNav() {
    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
                <Laptop2 />
                <h1 className="text-xl font-bold">Sayan Biswas</h1>
            </Link>
        </div>
    )
}