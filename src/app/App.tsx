import { useTheme } from 'app/providers/themeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import { userActions } from 'entities/User'

const App = () => {

    const { theme } = useTheme()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
