import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [company, setCompany] = useState("");
const [errors, setErrors] = useState({});


 const validateForm = () => {
  const newErrors = {};

  if (!fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  }

  if (!phone.trim()) {
    newErrors.phone = "Phone Number is required";
  } else if (phone.length < 10) {
  newErrors.phone = "Enter valid phone number";
}

  if (!email.trim()) {
    newErrors.email = "Email is required";
  }
  else if (!/\S+@\S+\.\S+/.test(email)) {
  newErrors.email = "Enter a valid email";
}

  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
  return (
    <>
    <Layout>
      <div className="register-page">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <form className="register-form">
          <div className="input-group">
            <label>Full Name*</label>
            <input
  type="text"
  placeholder="Marry Doe"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className={errors.fullName ? "error-input" : ""}
/>

{errors.fullName && (
  <span className="error-text">
    {errors.fullName}
  </span>
)}
          </div>

          <div className="input-group">
            <label>Phone number*</label>
            <input
  type="text"
  placeholder="Marry Doe"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className={errors.phone ? "error-input" : ""}
/>

{errors.phone && (
  <span className="error-text">
    {errors.phone}
  </span>
)}
          </div>

          <div className="input-group">
            <label>Email address*</label>
            <input
  type="email"
  placeholder="Marry Doe"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className={errors.email ? "error-input" : ""}
/>

{errors.email && (
  <span className="error-text">
    {errors.email}
  </span>
)}
          </div>

          <div className="input-group">
            <label>Password *</label>
            <input
  type="password"
  placeholder="Marry Doe"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className={errors.password ? "error-input" : ""}
/>

{errors.password && (
  <span className="error-text">
    {errors.password}
  </span>
)}
          </div>

          <div className="input-group">
            <label>Company name</label>
            <input type="text" placeholder="Marry Doe" value={company}
  onChange={(e) => setCompany(e.target.value)} />
          </div>

          <div className="agency-section">
            <p>Are you an Agency?*</p>

            <div className="radio-group">
              <label>
                <input type="radio" name="agency" />
                Yes
              </label>

              <label>
                <input type="radio" name="agency" />
                No
              </label>
            </div>
          </div>

          <button
            type="button"
            className="create-account-btn"
            onClick={() => {
  if (!validateForm()) return;

  localStorage.setItem(
    "user",
    JSON.stringify({
      fullName,
      phone,
      email,
      company,
    })
  );

  navigate("/account");
}}
          >
            Create Account
          </button>
        </form>
      </div>
    </Layout>
    
    
    </>

    
  )
}

export default Register