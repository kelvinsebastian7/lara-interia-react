import { usePage } from '@inertiajs/react';

export function usePermission() {
    const { auth } = usePage().props

    const hasRole = (role) => {
        if (auth && auth.user && auth.user.roles) {
            return auth.user.roles.includes(role);
        }
        return false;
    };

    const hasPermission = (permission) => {
        if (auth && auth.user.permissions) {
            return auth.user.permissions.includes(permission);
        }
        return false;
    };

    return { hasRole, hasPermission };
}