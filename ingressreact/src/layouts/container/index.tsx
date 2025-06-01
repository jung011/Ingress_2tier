import Header from "../header";
import { Outlet } from "react-router-dom";
export default function Container() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}