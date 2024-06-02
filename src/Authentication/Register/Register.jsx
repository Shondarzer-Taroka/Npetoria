import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logBG from '../../assets/register.jpg'
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { data } from "autoprefixer";


const Register = () => {
    let { createUser, updateUser } = useContext(AuthContext)
    let navigate = useNavigate()
    let loc = useLocation()
    let axiosPublic=useAxiosPublic()
    // console.log(loc);
    function onsubmit(e) {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        let name = e.target.name.value
        let photo = e.target.image.value
        // console.log(email, password, name, photo);
        
      

        if (password.length < 6) {
            // toast.error('You should take at least 6 characters')
            toast.error('You should take at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('You should take an uppercase')

            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('You should take a lowercase')

            return;
        }

        // if (password.length<6) {
        //     alert('jk')
        //     toast.success('j')
        // }

        createUser(email, password)
            .then((result => {
                let logUser = result.user
                //let  user  = {email}

                let userInfo={
                    name:name,
                    email:email,
                    role:'user',
                    userProfile:photo
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
                
                console.log(logUser);
                updateUser(name, photo)
                    .then(() => {

                    })
                    .catch(er => {
                        console.log(er);
                    })
                // e.target.reset()
                toast.success('Successfully registered')
                // location.reload()
                // setTimeout(() => {
                //     navigate(loc?.state ? loc.state : '/')
                //     location.reload()
                // }, 1000)
            }))
            .catch(er => {
                er.message == 'Firebase: Error (auth/email-already-in-use).' ? toast.error('Email already in used') : ''
                // console.log(er.message);
                // console.log(er);
            })

    }
    return (
        <div>

            <div className=" rounded-lg w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${logBG})` }}>

                <section className="flex items-center justify-center w-full h-full bg-[#22222278]">
                    <form onSubmit={onsubmit}>
                        <section className="md:w-[300px]">
                            <aside className="bg-[rgba(44,42,42,0.83)] p-5 md:p-7 rounded-xl text-white ">
                                <h1 className="text-center text-3xl font-bold font-poppins pb-3"> Register Here </h1>
                                <div className="flex flex-col">
                                    <span className="font-semibold">Name</span>
                                    <input className="p-2 rounded-lg bg-[#8080808f] placeholder:text-[#ffffffc2]" type="text" name="name" placeholder="Input Your Name" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="font-semibold">Email:</span>
                                    <input className="p-2 rounded-lg bg-[#8080808f] placeholder:text-[#ffffffc2]" type="email" name="email" placeholder="Input Your Email" />
                                </div>


                                <div className="flex flex-col">
                                    <span className="font-semibold">Photo URL</span>
                                    <input className="p-2 rounded-lg bg-[#8080808f] placeholder:text-[#ffffffc2]" type="text" name="image" placeholder="Input Your photo URL" />
                                </div>


                                <div className="flex flex-col ">
                                    <span className="font-semibold">Password:</span>
                                    <input className="p-2 rounded-lg border-black bg-[#8080808f] placeholder:text-[#ffffffc2]" type="password" name="password" placeholder="Input Your Password" /> <br />
                                    {/* <span className="mt-[-20px] mb-2 underline">forgotten password?</span> */}
                                </div>

                                <div>
                                    <button className="bg-fuchsia-500 px-4 py-2 rounded-xl w-full">Register</button>
                                </div>

                                <div className="mt-4">
                                    <small >Already registered ? Please <Link className="font-bold text-xl" to={'/login'}> Log In</Link> </small>

                                </div>


                            </aside>
                        </section>
                    </form>
                </section>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;