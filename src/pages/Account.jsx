import Layout from "../components/Layout";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <Layout>
      <div className="account-page">
        <h2>Account Settings</h2>

        <div className="profile-section">
          <div className="profile-image">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="profile"
            />
          </div>

          <div className="profile-info">
            <h3>{user?.fullName}</h3>
<p>{user?.email}</p>
          </div>
        </div>

        <div className="description">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Account