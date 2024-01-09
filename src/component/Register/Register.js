import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userName: "",
    isAgreed: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    userName: "",
    isAgreed: "", 
  });

  const handelChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    let isValid = true;
    event.preventDefault();

    if(!formData.name.trim().length) {
      isValid = false;
      setErrors({ ...errors, name: "Name field required" });
    }

    if (!formData.email.trim().length) {
      isValid = false;
      setErrors({ ...errors, email: "Email filed required"});
    }

    if (!formData.password.trim().length) {
      isValid = false;
      setErrors({ ...errors, password: "Password filed required"});
    }

    if (!formData.userName.trim().length) {
      isValid = false;
      setErrors({ ...errors, userName: "Username filed required"});
    }

    if (!formData.isAgreed.trim().length) {
      isValid = false;
      setErrors({ ...errors, isAgreed: "Agreement field is required"});
    }

    // you can always change the error message for each field based on addition checks

    if (isValid) {
        localStorage.setItem("userData", formData);
        navigate("/genre");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.bottom}>
          
        </div>
      </div>
    </div>
  )
}
