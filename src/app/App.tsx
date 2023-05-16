import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const App = () => {

    const {theme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App;