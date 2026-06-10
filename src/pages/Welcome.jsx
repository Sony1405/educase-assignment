
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
        <Layout>
      <div className="welcome-page">
        <div className="welcome-content">
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <Link to="/register">
            <button className="create-btn">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="login-btn">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </Layout>
    </div>
  )
}

export default Welcome