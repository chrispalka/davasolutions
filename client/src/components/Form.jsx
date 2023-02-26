import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styles from '../assets/Form.module.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const axios = require('axios');

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [data, setData] = useState(null);
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    setData(data);
    setIsLoading(true);
    axios
      .post('formSubmit', {
        data,
      })
      .then((response) => {
        if (response.data === 'success') {
          setIsLoading(false);
          setIsComplete(true);
          setTimeout(() => {
            setIsComplete(false);
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
    console.log(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  }, [formState, data, reset]);

  return (
    <div className={styles.formContainer}>
      {!isComplete ? (
        <>
          <h1 className={styles.heading}>Contact Us</h1>
          <h2 className={styles.subHeading}>
            Fill out the form below, and we will get back to you as soon as
            possible!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.styledForm}>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type='text'
                {...register('firstName', {
                  required: 'This field is required!',
                })}
                placeholder='First Name'
              />
              <p className={styles.error}>{errors.firstName?.message}</p>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type='text'
                {...register('lastName', {
                  required: 'This field is required!',
                })}
                placeholder='Last Name'
              />
              <p className={styles.error}>{errors.lastName?.message}</p>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                {...register('email', {
                  required: 'This field is required!',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                })}
                type='email'
                placeholder='Email'
              />
              <p className={styles.error}>{errors.email?.message}</p>
            </div>
            <div
              className={[styles.inputContainer, styles.telContainer].join(' ')}
            >
              <Controller
                control={control}
                name='phone'
                render={({ field: { onChange, onBlur, ref } }) => (
                  <InputMask
                    mask='(999) 999-9999'
                    onBlur={onBlur}
                    onChange={onChange}
                    inputRef={ref}
                    inputMode='numeric'
                    placeholder='(555) 555-5555'
                    className={styles.input}
                  />
                )}
              />
            </div>
            <div
              className={[styles.inputContainer, styles.telContainer].join(' ')}
            >
              <textarea
                className={styles.input}
                type='text'
                {...register('message')}
                rows='8'
                placeholder='Questions, comments, concerns?'
              />
            </div>
            <div className={styles.inputContainer}>
              <Button type='submit' className={styles.button}>
                {isLoading ? (
                  <FontAwesomeIcon
                    className={'fa-spin'}
                    icon={faSpinner}
                    size='lg'
                  />
                ) : (
                  <>Submit</>
                )}
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 className={styles.heading}>Thank you!</h1>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faCheckCircle}
            size='lg'
          />
        </>
      )}
    </div>
  );
};

export default Form;
