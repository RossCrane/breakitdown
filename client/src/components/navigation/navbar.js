export const Navbar = function ({openProjectDashboard, setOpenProjectDashboard, openTaskDashboard, setOpenTaskDashboard}) {

    const goToTaskDashboard = function () {
        setOpenProjectDashboard(false)
        setOpenTaskDashboard(true)
    }

    return (
        <div className="side-navbar">
            <ul className="nav-list">
                    <h2 className="nav-header" >Overview</h2>
                <li className="nav-list-item">
                {/* </li>
                <li className="nav-list-item"> */}
                    <button className="nav-option">Dashboard</button>
                </li>
                <li className="nav-list-item">
                    <button onClick={goToTaskDashboard} className="nav-option">Tasks</button>

                </li>
                    <h2 className="nav-header" >Create</h2>
                {/* <li className="nav-list-item">
                </li> */}
                <li className="nav-list-item">
                <button className="nav-option">Project</button>
                </li>
                <li className="nav-list-item">
                <button className="nav-option">Task</button>
                </li>
                    <h2 className="nav-header" >Home</h2>
                <li className="nav-list-item">
                </li>
                <li className="nav-list-item">
                <button className="nav-option">Profile</button>
                </li>
                <li className="nav-list-item">
                <button className="nav-option">Settings</button>
                </li>
            </ul>
        </div>
    )
}