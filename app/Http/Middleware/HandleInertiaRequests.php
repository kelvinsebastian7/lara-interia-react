<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Http\Resources\UserResource;
// use Tighten\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            // 'auth' => [
            //     'user' => $request->user(),
            // ],
            'auth.user' => fn () => $request->user()
                ? new UserResource($request->user())
                : null,

            // 'ziggy' => function () use ($request) {
            //     return array_merge((new Ziggy)->toArray(), [
            //         'location' => $request->url(),
            //     ]);
            // },

            // 'auth.user.roles' => fn () => $request->user()
            //     ? $request->user()->getRoleNames()
            //     : null,
            // 'auth.user.permissions' => fn () => $request->user()
            //     ? $request->user()->getPermissionNames()
            //     : null,
        ];
    }
}
