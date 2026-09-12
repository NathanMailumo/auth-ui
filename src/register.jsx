// import './register.css'

export function Register() {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1563453416-6bdef467ccda?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex bg-white w-4xl h-20xl rounded-4xl p-2 pr-5">
          <div className="relative flex items-stretch overflow-hidden rounded-4xl">
            <img
              src="https://images.unsplash.com/photo-1660187301034-997db047eb30?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full rounded-4xl w-full object-cover"
            />
          <img src="../public/png1.png" 
            className="absolute inset-0 z-10 m-auto h-50 w-90 object-contain"
          />

            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-white" />
          </div>
          <div className="flex flex-col gap-4 ml-8 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-xl font-semibold">Register a new Account</h1>
              <p>Create a new account to access features</p>
            </div>
            <form className="flex flex-col justify-center gap-4  items-stretch w-full">
              <label className="text-xs text-gray-600">Name</label>
              <input
                placeholder="e.g John Doe"
                type="text"
                required
                className="border border-slate-400 rounded-sm px-6 py-2 w-lg"
              />
              <label className="text-xs text-gray-600">Email</label>
              <input
                placeholder="e.g john@doe.com"
                type="email"
                required
                className="border border-slate-400 rounded-sm px-3 py-2"
              />
              <label className="text-xs text-gray-600">Password</label>
              <input
                placeholder=".........."
                type="password"
                required
                className="border border-slate-400 rounded-sm px-3 py-2"
              />
              <label className="text-xs text-gray-600">Confirm Password</label>
              <input
                placeholder="..........."
                type="password"
                required
                className="border border-slate-400 rounded-sm px-3 py-2"
              />
              <button className="bg-slate-950 text-white rounded-sm w-lg h-10">
                Submit
              </button>

              <div className="flex justify-center items-center">
                <span className="text-sm">
                  Already have a account? 
                   <a href="#" className="text-blue-400">
                    Login
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
