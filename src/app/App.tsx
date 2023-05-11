import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const App = () => {

    const {theme,toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<h1>Loading</h1>}>
                <Routes>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Suspense>    
        </div>
    )
}

export default App;