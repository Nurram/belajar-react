import { Outlet } from "react-router-dom";

export default function JobsLayout() {
    return (
        <div>
            <h2>Jobs Opening</h2>
            <p>List of current job opening in our company</p>
            <br />
            <Outlet />
        </div>
    )
}