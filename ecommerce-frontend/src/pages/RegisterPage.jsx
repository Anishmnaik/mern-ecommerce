import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
const RegisterPage = () => {

  const [showpass, setshowpass] = useState(false)
  console.log(showpass)



  const [user, setuser] = useState("")
  const [pass, setpass] = useState("")
  const [confpass, setconfpass] = useState("")
  const [phno, setphno] = useState("")
  const [email, setemail] = useState("")
  const [terms, setterms] = useState(false)



  const auth = async () => {
    if (!user ) {
      toast.error("username is required")
      return;
    }
    if (!pass) {
      toast.error("password is required")
      return;
    }
    if (!confpass) {
      toast.error("conform password is required")
      return;
    }
    if ( !phno ) {
      toast.error("phone number is required ")
      return;
    }
    if ( !email) {
      toast.error("email is required")
      return;
    }
    if (terms === false) {
      toast.error("please accept the terms and conditions")
      return
    }
    if (pass === confpass) {
      console.log("password matched")
    } else {
      toast.error("password don't match")
      console.log("password doesn't match")
      return;
    }
    try {

      const reg = await axios.post("http://localhost:5001/auth/register", { username: user, email: email, password: pass, phonenumber: phno })
      toast.success("register successfull")

    } catch (error) {
      console.log("error  :  ", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-base-100">
      <Toaster />
      {/* ================= LEFT SIDE ================= */}
      <div className="lg:w-1/2 w-full min-h-screen bg-base-200 relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute top-0 right-20 w-24 h-24 rounded-full bg-primary/10"></div>
        <div className="absolute top-32 right-40 w-32 h-32 rounded-full bg-primary/10"></div>
        <div className="absolute bottom-10 left-0 w-28 h-28 rounded-full bg-primary/10"></div>

        <div className="relative z-10 min-h-screen p-10 lg:p-16 flex flex-col justify-between">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="text-4xl">
                🛍️
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  Shop<span className="text-primary">Ease</span>
                </h2>

                <p className="text-sm text-base-content/60">
                  Smart Shopping, Easy Life
                </p>
              </div>
            </div>
          </div>


          {/* Main Text */}
          <div className="max-w-xl">

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Create Your
              <br />
              Account
            </h1>

            <h2 className="text-2xl font-bold text-primary mt-5">
              Join us today!
            </h2>

            <div className="w-16 h-1 bg-primary rounded-full mt-5"></div>

            <p className="text-lg text-base-content/70 mt-6 leading-relaxed max-w-md">
              Register now and unlock a world of amazing products,
              exclusive offers and a seamless shopping experience.
            </p>


            {/* Benefits */}
            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
                  🛡️
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Secure & Trusted
                  </h3>

                  <p className="text-sm text-base-content/60">
                    Your data is safe with us.
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
                  %
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Exclusive Offers
                  </h3>

                  <p className="text-sm text-base-content/60">
                    Get access to deals and discounts.
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
                  🛒
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Easy Shopping
                  </h3>

                  <p className="text-sm text-base-content/60">
                    Enjoy a smooth and fast checkout.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Simple shopping illustration */}
          <div className="flex justify-center lg:justify-start mt-10">

            <div className="flex items-end gap-5">

              <div className="text-6xl">
                🪴
              </div>

              <div className="text-8xl">
                🛍️
              </div>

              <div className="text-6xl">
                🎁
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="lg:w-1/2 w-full min-h-screen bg-[#111d35] text-white flex items-center justify-center p-8">

        <div className="w-full max-w-xl">

          {/* Heading */}
          <div className="text-center mb-8">

            <h1 className="text-5xl font-bold">
              Regist
              <span className="text-primary">
                ration
              </span>
            </h1>

            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>

            <p className="text-white/60 text-lg mt-5">
              Fill in the details to get started
            </p>

          </div>


          {/* Registration Form */}
          <div className="space-y-4">

            {/* Username */}
            <label className="input input-bordered bg-transparent border-white/20 text-white flex items-center gap-3 w-full h-18">
              <span className="text-xl">
                👤
              </span>

              <input
                type="text"
                onChange={(e) => setuser(e.target.value)}
                placeholder="Choose a Username to identify your account"
                className="grow bg-transparent text-white placeholder:text-white/40"
              />
            </label>


            {/* Email */}
            <label className="input input-bordered bg-transparent border-white/20 text-white flex items-center gap-3 w-full h-18">
              <span className="text-xl">
                ✉️
              </span>

              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your Email Address for password recovery and notification"
                className="grow bg-transparent text-white placeholder:text-white/40"
              />
            </label>


            {/* Phone */}
            <label className="input input-bordered bg-transparent border-white/20 text-white flex items-center gap-3 w-full h-18">
              <span className="text-xl">
                📞
              </span>

              <input
                type="tel"
                onChange={(e) => { setphno(e.target.value) }}
                placeholder="Enter your Phone Number for communication"
                className="grow bg-transparent text-white placeholder:text-white/40"
              />
            </label>


            {/* Password */}
            <label className="input input-bordered bg-transparent border-white/20 text-white flex items-center gap-3 w-full h-18">
              <span className="text-xl">
                🔒
              </span>

              <input
                type={showpass ? "text" : "password"}
                onChange={(e) => setpass(e.target.value)}
                placeholder="Create a Password to secure your account"
                className="grow bg-transparent text-white placeholder:text-white/40"
              />

              <span onClick={() => (showpass === true) ? setshowpass(false) : setshowpass(true)} className="cursor-pointer">
                👁️
              </span>
            </label>


            {/* Confirm Password */}
            <label className="input input-bordered bg-transparent border-white/20 text-white flex items-center gap-3 w-full h-18">
              <span className="text-xl">
                🔒
              </span>

              <input
                type={showpass ? "text" : "password"}
                onChange={(e) => setconfpass(e.target.value)}
                placeholder="Re-enter your Password to verify it"
                className="grow bg-transparent text-white placeholder:text-white/40"
              />

              <span onClick={() => (showpass === true) ? setshowpass(false) : setshowpass(true)} className="cursor-pointer">
                👁️
              </span>
            </label>

          </div>


          {/* Terms */}
          <div className="form-control mt-6">

            <label className="label cursor-pointer justify-start gap-3">

              <input onClick={() => setterms(!terms)}
                type="checkbox"
                className="checkbox checkbox-primary"
              />

              <span className="text-white/70">
                I agree to the{" "}
                <span className="text-primary font-semibold">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  Privacy Policy
                </span>
              </span>

            </label>

          </div>


          {/* Register Button */}
          <button onClick={auth} className="btn btn-primary w-full h-16 mt-5 text-xl">
            Register
          </button>


          {/* Login */}
          <p className="text-center text-white/60 mt-6">

            Already have an account?{" "}

            <a
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </a>

          </p>

        </div>
      </div>

    </div>
  );
};

export default RegisterPage;