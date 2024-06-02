import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import cr1 from '../../../../assets/team/cr1.png'
import cr2 from '../../../../assets/team/cr2.png'
import cr3 from '../../../../assets/team/cr3.png'
import cr4 from '../../../../assets/team/cr4.jpg'
import '../../../Style/imgHover.css'
import 'animate.css';
const CrazyTeam = () => {
    return (
        <section className='mt-7'>
              <h1 className='text-3xl uppercase text-center font-bold my-3'>crazy team</h1>
            <aside className='grid gap-3 grid-cols-1 md:grid-cols-4'>
                <div id="imgcon" className='border'>
                    <div id='cont' className='relative'>
                        <img className='w-full' src={cr1} alt="" />
                        <div id='icons' className='absolute top-0 w-full h-full'>
                            <div id='social' className='flex gap-3 items-center justify-center h-full z-20'>
                                <FaFacebook className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaFacebook>
                                <FaInstagram className=' text-3xl text-white animate__fadeInDown animate__animated '></FaInstagram>
                                <FaTwitter className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaTwitter>
                            </div>

                        </div>
                    </div>
                    <div id="imgcon">
                        <p className=' text-center mt-2 uppercase font-semibold'> JENNY </p>
                        <p className='text-green-500 text-center my-2'>Researcher</p>
                    </div>
                </div>
                <div id="imgcon" className='border'>
                    <div id='cont' className='relative'>
                        <img className='w-full' src={cr2} alt="" />
                        <div id='icons' className='absolute top-0 w-full h-full'>
                            <div id='social' className='flex gap-3 items-center justify-center h-full z-20'>
                                <FaFacebook className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaFacebook>
                                <FaInstagram className=' text-3xl text-white animate__fadeInDown animate__animated '></FaInstagram>
                                <FaTwitter className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaTwitter>
                            </div>

                        </div>
                    </div>
                    <div id="imgcon">
                        <p className=' text-center mt-2 uppercase font-semibold'> ANNY </p>
                        <p className='text-green-500 text-center my-2'>Researcher</p>
                    </div>
                </div>
                <div id="imgcon" className='border'>
                    <div id='cont' className='relative'>
                        <img className='w-full' src={cr3} alt="" />
                        <div id='icons' className='absolute top-0 w-full h-full'>
                            <div id='social' className='flex gap-3 items-center justify-center h-full z-20'>
                                <FaFacebook className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaFacebook>
                                <FaInstagram className=' text-3xl text-white animate__fadeInDown animate__animated '></FaInstagram>
                                <FaTwitter className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaTwitter>
                            </div>

                        </div>
                    </div>
                    <div id="imgcon">
                        <p className=' text-center mt-2 uppercase font-semibold'> SMITH </p>
                        <p className='text-green-500 text-center my-2'>Designer</p>
                    </div>
                </div>
                <div id="imgcon" className='border'>
                    <div id='cont' className='relative'>
                        <img className='w-full h-[322px] object-cover' src={cr4} alt="" />
                        <div id='icons' className='absolute top-0 w-full h-full'>
                            <div id='social' className='flex gap-3 items-center justify-center h-full z-20'>
                                <FaFacebook className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaFacebook>
                                <FaInstagram className=' text-3xl text-white animate__fadeInDown animate__animated '></FaInstagram>
                                <FaTwitter className=' text-3xl text-white animate__fadeInUp animate__animated  '></FaTwitter>
                            </div>

                        </div>
                    </div>
                    <div id="imgcon">
                        <p className=' text-center mt-2 uppercase font-semibold'> SARA </p>
                        <p className='text-green-500 text-center my-2'>Admin</p>
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default CrazyTeam;