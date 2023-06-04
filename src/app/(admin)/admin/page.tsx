import LoginForm from "@/components/forms/login"
export default function Admin() {
  return (
    <section className="login">
      <div className="flex items-stretch justify-center">
        <div className="login-right w-full"></div>
        <div className="login-left flex w-full max-w-md h-screen border-l-4 border-red-700 border-solid bg-gradient-to-tl from-orange-700 via-amber-500 to-yellow-300">
          <LoginForm/>
        </div>
      </div>
    </section>
  )
}