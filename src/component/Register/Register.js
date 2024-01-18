import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../../assets/images/cover.png';
import styles from './Register.module.css';
import Button from '../Button/Button';

export default function Register() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: null,
      userName: '',
      isAgreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
  };

    const handleSubmit = (event) => {
      event.preventDefault();            // prevents the page from refreshing
      const errors = {};
    

    if (!formData.name.trim().length) {
      errors.name = "Field is required";
    }

    if (!formData.email.trim().length) {
      errors.email = "Field is required";
    }

    if (!formData.userName.trim().length) {
      errors.userName = "Field is required";
    }

    if (!formData.mobile) {
      errors.mobile = "Field is required";
    }

    if (!formData.isAgreed) {
      errors.isAgreed = "Check this box if you want to proceed";
    }

    setErrors(errors);                                             // call the errors message
    
    // if (Object.keys(errors).length) {                               
    //   localStorage.setItem("userData", JSON.stringify(formData));
    //   navigate("/genre");                                            // takes you to genre page
    // }
    };
    useEffect(() => {                  // For Debuging purpose
      console.log(errors);
    }, [errors]);

  return (
    <div className={styles.content}>
    <img src={coverImage} alt='concert_image'/>
        <div className={styles.bottom}>
            <p>Discover new things on <br/>SuperApp</p>
        </div>
        <div className={styles.body}>
            <div className={styles.heading}>Super App</div>
            <p>Create your new account</p>
            <form>
              <input
                type='text'
                name='name'
                placeholder='Name'
                onChange={(event) => handleChange(event)}
              ></input>
                <br/>
              {errors.name? (
                <p className={styles.error}>{errors.name}</p>
              ) : (
                <></>
              )}

              <input
                type='text'
                name='userName'
                placeholder='UserName'
                onChange={(event) => handleChange(event)}
              ></input>
                <br/>
              {errors.userName? (
                <p className={styles.error}>{errors.userName}</p>
              ) : (
                <></>
              )}

                <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={(event) => handleChange(event)}
              ></input>
                <br/>
              {errors.email? (
                <p className={styles.error}>{errors.email}</p>
              ) : (
                <></>
              )}
                
              <input
                type='tel'
                name='mobile'
                placeholder='Mobile'
                onChange={(event) => handleChange(event)}
              ></input>

              {errors.mobile? (
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
                        type="checkbox"
                        name="isAgreed"
                        />
                        Share my registration data with Superapp
                    </label>

                    {errors.isAgreed? (
                        <p className={styles.error}>{errors.isAgreed}</p>
                    ) : (
                        <></>
                    )}
                    
                    <Button onClick={handleSubmit} />
                    <footer className={styles.footer}>
                      <p>
                      By clicking on Sign up. you agree to Superapp 
                        <span style={{ color: 'green' }}>{" "} Terms and Conditions of Use</span>
                      </p>
                      <br/>
                      <p>
                      To learn more about how Superapp collects, uses, shares and 
                      protects your personal data please head Superapp 
                      <span style={{ color: "green"}}>
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