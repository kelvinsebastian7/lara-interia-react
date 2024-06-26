import AdminLayout from '@/Layouts/AdminLayout'
import { Head, Link } from '@inertiajs/react';

export default function RoleIndex({ auth, roles}) {
    return (
        <AdminLayout
            user={auth.user}
        >

            <Head title="Role" />

            <div className="py-4">
                <h1>Role Index Page</h1>

                <Link href={route('roles.create')}>
                    <span>New Role</span>
                </Link>

                <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{border: '1px solid black', borderCollapse: 'collapse' }}>
                            <th style={{border: '1px solid black', borderCollapse: 'collapse' }}>Name</th>
                            <th style={{border: '1px solid black', borderCollapse: 'collapse' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role, index) => (
                        <tr key={index} style={{border: '1px solid black', borderCollapse: 'collapse' }}>
                            <td style={{border: '1px solid black', borderCollapse: 'collapse' }}>{role.name}</td>
                            <Link
                                href={route('roles.edit', role.id)}
                            >
                                <span>Edit</span>
                            </Link>
                            <Link
                                href={route('roles.destroy', role.id)}
                                method="delete"
                                as="button"
                            >
                                <span>Hapus</span>
                            </Link>
                            {/* <td style={{border: '1px solid black', borderCollapse: 'collapse' }}>Edit/Delete</td> */}
                        </tr>
                        ))}
                    </tbody>
                </table>

                {/* <ul>
                    {roles.map((role, index) => (
                    <li key={index}>
                        {role.name} - {role.email} - Edit/Delete
                    </li>
                    ))}
                </ul> */}

            </div>
        </AdminLayout>
    );
}
