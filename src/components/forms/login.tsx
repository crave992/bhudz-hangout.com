"use client"

import { useState } from 'react';
import { loginUser } from '@/services/User.service';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await loginUser(email, password);
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      
    }
  };

  return (
    <section className="loginForm m-auto w-full px-5 py-5">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Sign In</h2>
      <hr className="my-8" />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="hidden">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full p-2 text-gray-950 rounded mb-5"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password" className="hidden">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 text-gray-950 rounded mb-5"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <hr className="mb-5" />
          <button
            type="submit"
            className="px-5 py-2.5 w-full text-center border-solid border-gray-600 border-4 bg-gray-950 rounded uppercase hover:transition hove:duration-400 hover:ease-linear hover:bg-gray-400">
            Login
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </section>
  )
}