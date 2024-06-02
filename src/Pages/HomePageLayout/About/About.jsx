

const About = () => {
    return (
        <section className="mt-7">
            <h1 className="font-bold text-4xl uppercase text-center my-3"> About us</h1>
            
            <aside  className="flex flex-col md:flex-row md:justify-between items-center ">
               <div className="md:w-[50%]">
                 <img className="w-full md:h-[400px] object-cover" src="https://images-cdn.ubuy.co.in/64371c9c7e2e4603c10082ee-tumybee-cute-animals-greeting-card.jpg" alt="" />
               </div>

               <div className="md:w-[40%]">
               Welcome to Pet Haven, your trusted companion in the journey of pet adoption and care. Born out of a deep passion for animals and a commitment to their well-being, Pet Haven was created to bridge the gap between pets in need and loving families. Our platform simplifies the adoption process, allowing you to browse detailed profiles of pets, connect with them, and adopt seamlessly. Each profile includes essential information about the pet's breed, age, personality, and special needs, ensuring you find the perfect match. Beyond adoption, we offer a wealth of resources to support you in providing the best care for your new furry friend. At Pet Haven, we believe that every pet deserves a loving home, and we are dedicated to making that a reality. Join us in our mission to enrich lives through the joy of pet companionship. Thank you for being part of our community!
               </div>
            </aside>
        </section>
    );
};

export default About;