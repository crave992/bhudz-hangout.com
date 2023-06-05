import RegisterForm from "@/components/forms/registerForm"
export default function Admin() {
  return (
    <section className="login">
      <div className="flex items-center justify-center h-screen">
        <div className="register flex w-full max-w-3xl px-5 py-8 bg-gradient-to-tl from-orange-700 via-amber-500 to-yellow-300">
          <RegisterForm />
        </div>
      </div>
    </section>
  )
}