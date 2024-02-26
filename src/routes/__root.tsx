import SiteFooter from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <SiteHeader/>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <Outlet />
            </section>
            <SiteFooter />
            <TanStackRouterDevtools />
        </>
    ),
})