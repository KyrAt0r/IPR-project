import {lazy} from "react";
import { Route, Routes, Navigate } from "react-router-dom";


const TestPage = lazy(() => import("./test-page/test-page"));
const UnixConverter = lazy(() => import("./unix-converter/unix-converter"))
const UserPage = lazy(() => import("src/pages/user-page/user-page.tsx"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/unix-converter" element={<UnixConverter/>}/>
            <Route path="/user-page" element={<UserPage/>}/>
        </Routes>
    );
};
