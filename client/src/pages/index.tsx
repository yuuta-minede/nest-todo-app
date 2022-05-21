import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';
// import { CreateUserDto, DefaultApi, Configuration } from '../api';

const Home: NextPage = () => {
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const onChangeNameText = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setNameText(event.target.value);
  const onChangeEmailText = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => setEmailText(event.target.value);
  const onChangePasswordText = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => setPasswordText(event.target.value);

  // function createUser(user: CreateUserDto) {
  //   new DefaultApi().userControllerCreate(user);
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <input
            placeholder={'nameを入力してください'}
            type={'text'}
            value={nameText}
            onChange={onChangeNameText}
          />
          <input
            placeholder={'emailを入力してください'}
            type={'text'}
            value={emailText}
            onChange={onChangeEmailText}
          />
          <input
            placeholder={'passwordを入力してください'}
            type={'text'}
            value={passwordText}
            onChange={onChangePasswordText}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
