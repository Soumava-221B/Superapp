import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import styles from "./Register.module.css";
import coverImage from "../../assets/images/cover.png";
import Button from "../Button/Button";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userName: "",
    isAgreed: false,
  });

  const [errors, setErrors] = useState({});

  const handelChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {}

    if (!formData.name.trim().length) {
      errors.name = "name is required";
  }

  if (!formData.email.trim().length) {
      errors.email = "email required";
  }

  if (!formData.email.trim().length) {
    errors.userName = "username required";
}

if (!formData.email.trim().length) {
  errors.mobile = "mobile no. required";
}

setErrors(errors);

    // if (!formData.isAgreed.trim().length) {
    //   isValid = false;
    //   setErrors({ ...errors, isAgreed: "Check this box if you want to proceed"});
    // }

    // you can always change the error message for each field based on addition checks

    // if (Object.keys(errors).length) {
    //   localStorage.setItem("userData", JSON.stringify(formData));
    //   navigate("/genre");
    // }
  };

  // For debuging purpose
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className={styles.container}>
      <div>
      <img src={coverImage} alt="cover image of music" />
        <div className={styles.bottom}>
          <p>Discover new things <br/> on SuperApp</p>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.super}>Super App</p>
        <p>Create a new Account</p>
        <p>
          Email <span style={{ color: "green" }}>|</span> Google
        </p>
        <form>
          <input 
            type='text'
            name='name'
            placeholder='Enter your name'
            onChange={(event => handelChange(event))}
            ></input>

            {errors.name ? (
              <p className={styles.errors}>{errors.name}</p>
            ) : (
              <></>
            )}

            <input 
              type='text'
              name='userName'
              placeholder='Eneter your username'
              onChange={(event => handelChange(event))}>
              </input>

              {errors.userName ? (
                <p className={styles.error}>{errors.userName} </p>
              ) : (
                <></>
              )}

            <input 
              type='email'
              name='email'
              placeholder='Email'
              onChange={(event) => handelChange(event)}
              ></input>

            {errors.email ? (
              <p className={styles.error}>{errors.email}</p>
            ) : (
              <></>
            )}

            <input
              type='tel'
              name='mobile'
              placeholder='Mobile'
              onChange={(event) => handelChange(event)}
              ></input>

            {errors.mobile ? (
              <p className={styles.error}>{errors.mobile}</p>
            ) : (
              <></>
            )}

            <label>
              <input
                onChange={(e) => 
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.checked,
                })
                }
                type='checkbox'
                name='isAgreed' 
                />
                Share my registration data with Superapp
            </label>

            {errors.isAgreed ? (
              <p className={styles.error}>{errors.isAgreed}</p>
            ) : (
              <></>
            )}

            <Button onClick={handleSubmit}/>
            <footer className={styles.footer}>
              <p>
                By clicking on Sign up. you agree to Superapp
                <span style={{ color: "green"}}>
                  {" "}
                  Terms and Conditions of Use
                </span>
              </p>
              <p>
              To learn more about how Superapp collects, uses,
              shares and protects your personal data please head
              Superapp
              <span style={{color: "green"}}>
                {" "}
                Privacy Policy
              </span>
              </p>
            </footer>
        </form>
      </div>
    </div>
  );
}
