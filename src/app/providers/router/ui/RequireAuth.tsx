import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutesPath } from '../routerConfig/routerConfig'

export function RequireAuth ({ children }: { children: JSX.Element }) {

    const auth = useSelector(getUserAuthData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RoutesPath.MAIN} state={{ from: location }} replace/>
    }

    return children
}
