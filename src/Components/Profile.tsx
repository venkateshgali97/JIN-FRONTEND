import '../Styles/Profile.css'
const Profile = () =>{
    return(
        <div className="dashboard-container">
            <div className="side-nav">
                <ul className='side-nav-items'>
                    <li>Dashboard</li>
                    <li>Time sheet</li>
                    <li>Leave</li>
                    <li>Work From Home</li>
                    <li>Survey</li>
                    <li>Service Desk</li>
                    <li>Forms</li>
                    <li>Travel</li>
                    <li>Expenses</li>
                    <li>Resourcing</li>
                </ul>
                <div className='dashboard-profile-container'>
                    <p className='dashboard-profile-name'>venkatesh</p>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>
            <div className="main-content">
                
            </div>
        </div>
    )
}

export default Profile