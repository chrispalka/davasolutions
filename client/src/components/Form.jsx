import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styles from '../assets/Form.module.css';
import Button from './Button';

const axios = require('axios');

const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.formContainer}>
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
            {...register('firstName', { required: 'This field is required!' })}
            placeholder='First Name'
          />
          <p className={styles.error}>{errors.firstName?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type='text'
            {...register('lastName', { required: 'This field is required!' })}
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
        <div className={styles.inputContainer}>
          <Controller
            control={control}
            name='phone'
            render={({ field: { onChange, onBlur, ref } }) => (
              <InputMask
                mask='(999) 999-9999'
                onBlur={onBlur}
                onChange={onChange}
                inputRef={ref}
                placeholder='(555) 555-5555'
                className={styles.input}
              />
            )}
          />
        </div>
        <div className={styles.inputContainer}>
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
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
