import AdminLayout from '@/Layouts/AdminLayout'

export default function PermissionIndex({ auth, permissions }) {
    return (
        <AdminLayout
            user={auth.user}
        >
            <div className="py-4">
                <h1>Permission Index Page</h1>

                <ul>
                    {permissions.map((permission, index) => (
                    <li key={index}>
                        {permission.name} - {permission.email} - Edit/Delete
                    </li>
                    ))}
                </ul>

            </div>
        </AdminLayout>
    );
}
