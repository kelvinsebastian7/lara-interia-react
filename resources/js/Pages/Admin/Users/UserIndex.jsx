import AdminLayout from '@/Layouts/AdminLayout'
import { Head, Link } from '@inertiajs/react';

export default function UserIndex({ auth, users }) {
    return (
        <AdminLayout
            user={auth.user}
        >
            <Head title="User" />

            <div className="py-4">
                <h1>User Index Page</h1>

                <Link href={route('users.create')}>
                    <span>New User</span>
                </Link>

                <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{border: '1px solid black', borderCollapse: 'collapse' }}>
                            <th style={{border: '1px solid black', borderCollapse: 'collapse' }}>Name</th>
                            <th style={{border: '1px solid black', borderCollapse: 'collapse' }}>Email</th>
                            <th style={{border: '1px solid black', borderCollapse: 'collapse' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index} style={{border: '1px solid black', borderCollapse: 'collapse' }}>
                            <td style={{border: '1px solid black', borderCollapse: 'collapse' }}>{user.name}</td>
                            <td style={{border: '1px solid black', borderCollapse: 'collapse' }}>{user.email}</td>
                            <td style={{border: '1px solid black', borderCollapse: 'collapse' }}>Edit/Delete</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                {/* <ul>
                    {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.email} - Edit/Delete
                    </li>
                    ))}
                </ul> */}

            </div>
        </AdminLayout>
    );
}
