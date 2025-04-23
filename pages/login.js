
import React from 'react';
import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>爆神分析王 - 登入</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{
        background: 'linear-gradient(to top, #fbe6a2, #fff9e8)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif'
      }}>
        <div style={{
          width: '320px',
          background: '#fff',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
          <img src="/panda.png" alt="panda" style={{ width: '120px', marginBottom: '10px' }} />
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>爆神分析王</h2>
          <input type="text" placeholder="帳號" style={inputStyle} /><br />
          <input type="password" placeholder="密碼" style={inputStyle} /><br />
          <button onClick={() => alert('登入成功！')} style={buttonStyle}>登入遊戲</button>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: '90%',
  padding: '10px',
  margin: '8px 0',
  border: '1px solid #ccc',
  borderRadius: '8px'
};

const buttonStyle = {
  padding: '10px 20px',
  background: 'orange',
  border: 'none',
  borderRadius: '8px',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer'
};
