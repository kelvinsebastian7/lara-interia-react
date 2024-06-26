import AdminLayout from '@/Layouts/AdminLayout'
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Edit({role}) {
    const { data, setData, put, processing, errors } = useForm({
        name: role.name,
    });

    // const props = defineProps({
    //     role: {
    //         type: Object,
    //         required: true
    //     }
    // })

    const submit = (e) => {
        e.preventDefault();

        put(route('roles.update', role.id), data);
    };

    return (
        <AdminLayout>

            <Head title="Update Role" />

            <div className="py-4 mx-auto">
                <h1>Update Role Index Page</h1>

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
                            Update
                        </PrimaryButton>
                    </div>
                </form>

            </div>
        </AdminLayout>
    );
}
