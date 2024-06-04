import { useContext } from 'react';
import logBG from '../../assets/9142206.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const LogIn = () => {

  let { signInUser, signInbyGoogle, setSpinner, signInbyTwitter } = useContext(AuthContext)
  let axiosPublic = useAxiosPublic()
  let navigate = useNavigate()
  let loc = useLocation()
  // console.log(loc);
  function onsubmit(e) {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    // console.log(email,password);
    signInUser(email, password)
      .then((result) => {
        let loggedInUser = result.user
        toast.success('Successfully Log In')

        if (loggedInUser) {
          // get token and store client
          const userInfo = { email: email };
          axiosPublic.post('/jwt', userInfo)
            .then(res => {
              if (res.data.token) {
                localStorage.setItem('petoria-access', res.data.token);
                setSpinner(false);
              }
            })
        }

        //   let userInfo={
        //     name:loggedInUser,
        //     email:email,
        //     role:'user',
        //     userProfile:loggedInUser.photoURL
        // }
        // console.log(userInfo);
        // axiosPublic.post('/users',userInfo)
        // .then(res=>{
        //     console.log(res.data);
        //     // navigate('/')
        // })
        // .catch(err=>{
        //     console.log(err);
        // })

        let user = { email }
        console.log(user);


        setTimeout(() => {
          navigate(loc?.state ? loc.state : '/')
        }, 1000)
        e.target.reset()
        //   console.log(user);
      })
      .catch((er) => {
        //   console.log(er.message);
        let storeError = []
        let errorLetter = er.message.split(' ')[2].split('')
        for (let i = 6; i < errorLetter.length - 2; i++) {

          storeError.push(errorLetter[i])
          // console.log(ll[i]);

        }
        er.message == "Firebase: Error (auth/invalid-credential)." ? toast.error("Invalid Email Or Password") : toast.error(storeError.join(''))
      })
  }

  function handleLogInWithGoogle() {
    signInbyGoogle()
      .then((result) => {
        let logUser = result.user
        let user = result.user
        let loggedInUser = result.user
        // let email=user.email
        // if (loggedInUser) {
        // get token and store client
        const userinfo = { email: loggedInUser.email };
        axiosPublic.post('/jwt', userinfo)
          .then(res => {

            // if (res.data.token) {
            //   localStorage.setItem('petoria-access', res.data.token);
            //   setSpinner(false);
            // }
          })
        // }

        let userInfo = {
          name: logUser.displayName,
          email: logUser.email,
          role: 'user',
          userProfile: logUser.photoURL
        }
        console.log(userInfo);
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            // navigate('/')
          })
          .catch(err => {
            console.log(err);
          })

        toast.success('Successfully log In')
        setTimeout(() => {
          navigate(loc?.state ? loc.state : '/')
        }, 1000)
        console.log(user);
      })
      .catch(er => {
        // console.log(er);
        toast.error(er.message)
        setSpinner(false)
      })
  }

  function handleSignInBytwitter() {
    signInbyTwitter()
      .then((result) => {
        let logUser = result.user
        let loggedInUser = result.user
        // if (loggedInUser) {
        //   // get token and store client
        //   const userInfo = { email: loggedInUser.email };
        //   axiosPublic.post('/jwt', userInfo)
        //     .then(res => {

        //       localStorage.setItem('petoria-access', res.data.token);
        //       setSpinner(false);

        //     })
        // }

          let userInfo={
            userProfile:logUser.photoURL,
            name:logUser.displayName,
            email:logUser.email,
            role:'user'
        }
        console.log(userInfo);
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data);
            // navigate('/')
        })
        .catch(err=>{
            console.log(err);
        })

        toast.success('Successfully log In')
        setTimeout(() => {
          navigate(loc?.state ? loc.state : '/')
        }, 1000)
        // console.log(user);
      })
      .catch(er => {
        console.log(er);
        toast.error(er.message)
      })
  }

  return (
    <div>

      <div className=" rounded-lg w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${logBG})` }}>

        <section className="flex items-center justify-center w-full h-full bg-[#2222226c]">
          <form onSubmit={onsubmit}>
            <section className="md:w-[300px]">
              <aside className="bg-[rgba(255,255,255,0.22)] p-5 md:p-7 rounded-xl text-white ">

                <h1 className="text-center text-3xl font-bold font-poppins pb-3"> Log in Here </h1>

                <div className="flex flex-col">
                  <span className="font-semibold">Email:</span>
                  <input className="p-2 rounded-lg bg-[#8080808f] placeholder:text-[#ffffffc2]" type="email" name="email" placeholder="Input Your Email" required />
                </div>

                <div className="flex flex-col ">
                  <span className="font-semibold">Password:</span>
                  <input className="p-2 rounded-lg border-black bg-[#8080808f] placeholder:text-[#ffffffc2]" type="password" name="password" placeholder="Input Your Password" required /> <br />
                  <span className="mt-[-20px] mb-2 underline">forgotten password?</span>
                </div>

                <div>
                  <button className="bg-blue-200 px-4 py-2 rounded text-black w-full">Log In</button>
                </div>
                <div className="flex gap-5 items-center justify-center my-3">
                  <p className="h-[5px] w-[30%] bg-white rounded-lg"></p>
                  <p className="font-semibold text-center">Or Continue With</p>
                  <p className="h-[5px] w-[30%] rounded-lg bg-white"></p>
                </div>


                <div className="flex justify-center">
                  <div className="flex gap-2">
                    <button className="px-3 py-2 rounded-lg bg-blue-400 flex items-center gap-2 font-semibold " onClick={handleLogInWithGoogle}> Google <FaGoogle></FaGoogle> </button>
                    <button className="px-3 py-2 rounded-lg bg-blue-400 flex items-center gap-2 font-semibold " onClick={handleSignInBytwitter}> Twitter <BsTwitter></BsTwitter></button>
                  </div>
                </div>


                <div className="mt-4">
                  <small >Don't have an account ? Please <Link className="font-bold" to={'/register'}> Register</Link> </small>

                </div>


              </aside>
            </section>
          </form>
        </section>

      </div>
      {/* <Toaster></Toaster> */}
    </div>
  );
};

export default LogIn;