import AdminLayout from '@/Layouts/AdminLayout'
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('roles.store'));
    };

    return (
        <AdminLayout>

            <Head title="Create Role" />

            <div className="py-4 mx-auto">
                <h1>Create Role Index Page</h1>

                <Link href={route('roles.index')}>
                    <span>Back</span>
                </Link>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('name', e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex items-center mt-4">
                        <PrimaryButton disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>

            </div>
        </AdminLayout>
    );
}
