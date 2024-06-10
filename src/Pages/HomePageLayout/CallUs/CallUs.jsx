

const CallUs = () => {
    return (
        <section className="">
            
            <h1 className="uppercase text-center font-bold text-4xl my-7"> call us </h1>
            <aside className="flex flex-col md:flex-row justify-between items-center gap-3">
             <div id="content" className="lg:w-[50%]">
            <p> 
            Imagine a world where every wagging tail and gentle purr finds its way to a loving home. By choosing to adopt, you not only bring unparalleled joy and companionship into your life, but you also become a hero to a pet in need. Every adoption is a promise of love, care, and a brighter future. Our pets, each with their own unique story, await the warmth of a forever home. As you open your heart, you’ll discover the boundless gratitude and loyalty that only a rescued pet can offer. Your decision to adopt ignites a ripple of kindness, giving another animal a chance to be rescued. Let us guide you on this heartfelt journey to find your perfect match. Call us today, and take the first step towards a life filled with unconditional love and happiness. Together, we can create a haven where every pet is cherished and celebrated.
            </p>

             <button className="px-4 py-2 bg-yellow-300 rounded-lg font-semibold mt-7"> call us </button>
             <span className="ml-2"> <a href="tel:+88018123123"> +88018123123</a></span>
             {/* <a href="tel:+88018123123"> +88018123123</a> */}
             {/* <input type="tel" value={'+88018123123'} name="" id="" /> */}
             </div>

             <div className="lg:w-[50%]">
                <img className="w-full" src="https://pets-grooming.axiomthemes.com/wp-content/uploads/2016/07/image-30.jpg" alt="" />
             </div>
            </aside>
        </section>
    );
};

export default CallUs;