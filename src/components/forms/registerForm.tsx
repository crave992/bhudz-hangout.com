"use client"

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { registerUser } from '@/services/User.service';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^\d{11}$/.test(phoneNumber)) {
      alert('Phone number must be 11 digits long');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Email is not in a valid format');
      return;
    }
    if (password !== confirmPassword) {
      alert('Password and Confirm Password fields do not match');
      return;
    }
    if (!email || !password || !firstName || !lastName || !birthDate || !phoneNumber) {
      alert('All fields are required except Middle Name');
      return;
    }
    try {
      await registerUser(
        email,
        password,
        firstName,
        lastName,
        middleName,
        birthDate,
        'guest', // Set the status to 'guest' directly
        phoneNumber
      );
      alert("Successful Register!");
      router.push('/admin');
    } catch (error) {
      if (error instanceof Error) {
        window.alert(`Registration failed: ${error.message}`);
      } else {
        console.error('Registration failed:', error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-wrap'>
        <label className="w-full">
          Email:
          <input type="email" className="text-gray-950 w-full rounded p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="w-full">
          <div className="relative">
            Password:
            <input
              type={showPassword ? 'text' : 'password'}
              className="text-gray-950 w-full rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-11 right-2 transform -translate-y-1/2 text-gray-400 text-1xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>
        <label className="w-full">
          <div className="relative">
            Confirm Password:
            <input
              className="text-gray-950 w-full rounded p-2"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-11 right-2 transform -translate-y-1/2 text-gray-400 text-1xl"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>
        <label className="w-full md:w-1/2">
          First Name:
          <input type="text" className="text-gray-950" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" className="text-gray-950" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Middle Name:
          <input type="text" className="text-gray-950" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        </label>
        <label>
          Birth Date:
          <input type="date" className="text-gray-950" value={birthDate.toISOString().substr(0, 10)} onChange={(e) => setBirthDate(new Date(e.target.value))} />
        </label>
        <label>
          Phone Number:
          <input type="tel" className="text-gray-950" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};
export default RegisterForm;