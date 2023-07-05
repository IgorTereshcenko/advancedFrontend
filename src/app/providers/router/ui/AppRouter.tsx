import { Route, Routes } from 'react-router-dom'
import { Suspense, memo, useCallback } from 'react'
import { type myRoutes, routes } from '../routerConfig/routerConfig'
import { PageLoader } from 'features/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {

    const renderWithWrapper = useCallback((route: myRoutes) => {

        const element = (<div className='page-wrapper'>{route.element}</div>)

        return (
            <Route
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                key={route.path}/>
        )
    }, [])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routes.map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
