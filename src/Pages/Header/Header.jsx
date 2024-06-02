import { NavLink } from "react-router-dom";


const Header = () => {
    const navlinks = <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/need'}>Pet Listing</NavLink>
    <NavLink>DonationCampaigns</NavLink>
  </>
    return (
        <section>
        
        <aside className="flex justify-between">
            <div><img src="/src/assets/react.svg" alt="" /></div>

            <div>
             <ul className="md:flex-col lg:flex-row">
                {
                    navlinks
                }
             </ul>
            </div>
        </aside>
            
        </section>
    );
};

export default Header;