import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                (active
                    ? 'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400'
                    : 'px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group') +
                className
            }
        >
            {children}
        </Link>
    );
}
