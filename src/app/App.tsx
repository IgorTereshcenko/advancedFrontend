import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {

    const {theme,toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>toggle</button>
            <AppRouter/>
        </div>
    )
}

export default App;