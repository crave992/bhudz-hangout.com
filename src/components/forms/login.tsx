export default function LoginForm() {
  return (
    <section className="loginForm m-auto w-full px-5 py-5">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Sign In</h2>
      <hr className="my-8"/>
      <form action="">
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
            required
          />
          <hr className="mb-5"/>
          <button 
            type="submit"
            className="px-5 py-2.5 w-full text-center border-solid border-gray-600 border-4 bg-gray-950 rounded uppercase hover:transition hove:duration-400 hover:ease-linear hover:bg-gray-400">
            Login
          </button>
        </div>
      </form>
    </section>
  )
}