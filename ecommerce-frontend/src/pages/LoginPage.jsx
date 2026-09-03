import React, { useState } from "react";
import {Toaster ,toast} from "react-hot-toast"
import axios from "axios"

const LoginPage = () => {

  const [showpass, setshowpass] = useState(false)
  console.log(showpass)

  const [Login , setLogin] = useState("")
  const [Pass , setPass] = useState("")

  const authentication = async () => 
    {
       if (!Login || !Pass ) {
      toast.error("all fealds are required")
      return;
    }
      try {
      const res = await axios.post("http://localhost:5001/auth/login",{login:Login , password:Pass})
        toast.success("login successfull")
    } catch (error) {
if(error.response.status === 401)  {
  console.error("invalid username or password  :  ",error)
  toast.error("invalid username or password")
}  }
      
    }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* ================= LEFT SIDE ================= */}
      <div className="lg:w-1/2 w-full min-h-screen bg-base-200 relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute top-20 right-32 w-24 h-24 rounded-full bg-primary/10"></div>

        <div className="absolute bottom-20 left-0 w-32 h-32 rounded-full bg-primary/10"></div>

        {/* Decorative dots */}
        <div className="absolute top-12 right-10 grid grid-cols-4 gap-2 opacity-40">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>

          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>

          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
        </div>


        <div className="relative z-10 min-h-screen p-8 lg:p-14 flex flex-col">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="text-4xl">
              🛍️
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                BUY
                <span className="text-primary">
                  Now
                </span>
              </h2>

              <p className="text-sm text-base-content/60">
                Smart Shopping, Easy Life
              </p>
            </div>

          </div>


          {/* Main content */}
          <div className="flex-1 flex items-center">

            <div className="max-w-lg">

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Welcome
                <br />
                Back!
              </h1>


              <h2 className="text-2xl font-bold text-primary mt-5">
                Glad to see you again
              </h2>


              <div className="w-14 h-1 bg-primary rounded-full mt-5"></div>


              <p className="text-lg text-base-content/70 mt-6 leading-relaxed">
                Login to continue shopping your favorite products
                and enjoy exclusive offers tailored for you.
              </p>


              {/* Benefits */}
              <div className="mt-8 space-y-6">

                {/* Secure */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
                    🛡️
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Secure & Safe
                    </h3>

                    <p className="text-sm text-base-content/60">
                      Your data is protected with top-notch security.
                    </p>
                  </div>

                </div>


                {/* Deals */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
                    %
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Exclusive Deals
                    </h3>

                    <p className="text-sm text-base-content/60">
                      Access member-only offers and discounts.
                    </p>
                  </div>

                </div>


                {/* Shopping */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
                    🛒
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Easy Shopping
                    </h3>

                    <p className="text-sm text-base-content/60">
                      Smooth experience from cart to checkout.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>




        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="lg:w-1/2 w-full min-h-screen bg-[#111d35] text-white flex items-center justify-center p-8">

        <div className="w-full max-w-xl">

          {/* Heading */}
          <div className="text-center mb-10">

            <h1 className="text-5xl font-bold">
              Log
              <span className="text-primary">
                in
              </span>
            </h1>

            <div className="flex justify-center items-center gap-2 mt-4">

              <div className="w-12 h-1 bg-primary rounded-full"></div>

              <div className="w-2 h-2 rounded-full bg-primary"></div>

            </div>

            <p className="text-lg text-white/60 mt-5">
              Login to your account
            </p>

          </div>

          <Toaster/>
          {/* ================= LOGIN FORM ================= */}

          <div className="space-y-5">

            {/* Username */}
            <label className="input input-bordered bg-transparent border-white/20 text-white flex items-center gap-4 w-full h-18">

              <span className="text-xl">
                👤
              </span>

              <input onChange={(e)=>setLogin(e.target.value)}
                type="text"
                placeholder="Username or Email"
                className="grow bg-transparent text-white placeholder:text-white/40"
              />

            </label>


            {/* Password */}
            <label className="input input-bordered bg-transparent border-white/20 text-white flex items-center gap-4 w-full h-18">

              <span className="text-xl">
                🔒
              </span>

              <input onChange={(e)=>setPass(e.target.value)}
                type={showpass ? "text" : "password"}
                 placeholder="Password"
                className="grow bg-transparent text-white placeholder:text-white/40"
              />

              <span onClick={() => setshowpass(!showpass)} className="cursor-pointer">
                👁️
              </span>

            </label>

          </div>


          {/* Remember + Forgot password */}
          <div className="flex justify-between items-center mt-6">

            <label className="flex items-center gap-3 cursor-pointer">

              <input
                type="checkbox"
                className="checkbox checkbox-primary"
              />

              <span className="text-white/70">
                Remember me
              </span>

            </label>


            <a
              href="/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot password?
            </a>

          </div>


          {/* Login button */}
          <button onClick={authentication}  className="btn btn-primary w-full h-16 mt-7 text-xl">
            Login
          </button>


          {/* Divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="h-px bg-white/20 flex-1"></div>

            <span className="text-white/60">
              or continue with
            </span>

            <div className="h-px bg-white/20 flex-1"></div>

          </div>


          {/* Google */}
          <button className="btn btn-outline border-white/20 hover:bg-white/10 text-white w-full h-14 mb-4">

            <span className="text-xl">
              G
            </span>

            Continue with Google

          </button>


          {/* Facebook */}
          <button className="btn btn-outline border-white/20 hover:bg-white/10 text-white w-full h-14 mb-4">

            <span className="text-xl">
              f
            </span>

            Continue with Facebook

          </button>


          {/* Apple */}
          <button className="btn btn-outline border-white/20 hover:bg-white/10 text-white w-full h-14">

            <span className="text-xl">
              
            </span>

            Continue with Apple

          </button>


          {/* Register */}
          <p className="text-center text-white/60 mt-8">

            Don't have an account?{" "}

            <a
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </a>

          </p>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;