import { useTheme } from 'app/providers/themeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import { getUserInited, userActions } from 'entities/User'
import { useSelector } from 'react-redux'

const App = () => {

    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <SideBar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App
