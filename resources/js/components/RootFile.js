import React from 'react';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import RouteCheck from './RouteCheck';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import Profile from './Profile';
import Setting from './Setting';
import Edit from './Edit';
import ProfileView from './ProfileView';
import Signin from './Signin';
import Adminroute from './Adminroute';


export default function RootFile() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/view/:id' element={<ProfileView />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/adminroute' element={<Adminroute />} />

            <Route path='/' element={<Welcome />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/' element={<RouteCheck />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path='/setting' element={<Setting />} />
            </Route>

        </Routes>
    );
}
const rootelm = document.getElementById('reactpush');
const root = createRoot(rootelm);

if (document.getElementById('reactpush')) {
    root.render(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <HashRouter>
                    <RootFile />
                </HashRouter>
            </PersistGate>
        </Provider>
    );
}