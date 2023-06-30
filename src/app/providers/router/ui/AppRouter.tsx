import { Route, Routes } from 'react-router-dom'
import { Suspense, memo, useMemo } from 'react'
import { routes } from '../routerConfig/routerConfig'
import { PageLoader } from 'features/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData)

    const authOnlyRoutes = useMemo(() => {
        return routes.filter(route => {
            if (route.authOnly && !isAuth) {
                return false
            }

            return true
        })
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {authOnlyRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={(<div className='page-wrapper'>{route.element}</div>)}
                        key={route.path}/>
                )}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
