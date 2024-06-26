import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react';

export default function TeacherIndex({ auth }) {
    return (
        <AdminLayout
            user={auth.user}
        >
            <div className="py-4">
                <h1>Welcome Teacher</h1>
            </div>
        </AdminLayout>
    );
}
