import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react';

export default function AdminIndex({ auth }) {
    return (
        <AdminLayout
            user={auth.user}
        >
            {/* <Head title="Dashboard" /> */}

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Welcome Admin!</div>
                    </div>
                </div>
            </div> */}
            <div className="py-4">
                <h1>Welcome Admin</h1>
            </div>
        </AdminLayout>
    );
}
