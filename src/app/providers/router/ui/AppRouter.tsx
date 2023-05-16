import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from '../routerConfig/routerConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
                {routes.map(route =>
                    <Route 
                        path={route.path} 
                        element={(<div className='page-wrapper'>{route.element}</div>)} 
                        key={route.path}/> 
                )}
            </Routes>
        </Suspense>    
    )
}

export default AppRouter;