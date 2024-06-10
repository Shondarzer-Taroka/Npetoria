import { FaStar } from "react-icons/fa6";

const PetCategory = () => {
    return (
        <section>

            <h1 className="text-center font-bold uppercase text-3xl my-7">PEt Category</h1>

            <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="border-2 rounded-lg">
                    <div className="p-2">
                    <img className="w-full h-[300px] object-cover"  src="https://i.ibb.co/1bmzF11/fish.jpg" alt="" />
                    </div>
                    <div id="content" className="p-2">
                        <h1 className="font-bold text-2xl mb-2">Goldie the Shimmering Fish</h1>
                        <h2> <span className="font-semibold"> Pet Name:</span> {'Golden Fish'}</h2>
                        <h2> <span className="font-semibold">Category:</span> {'Fish'}</h2>
                        <h2 className="flex items-center"><span className="font-semibold">Ratings:</span> <span className="flex text-yellow-400"> <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> </span> </h2>
                    </div>
                </div>
                <div className="border-2 rounded-lg">
                    <div className="p-2">
                    <img className="w-full h-[300px] object-cover" src="https://i.ibb.co/k14Rwpp/cat2.jpg" alt="" />
                    </div>
                    <div id="content" className="p-2">
                        <h1 className="font-bold text-2xl mb-2">Shadow the Stealthy Cat</h1>
                        <h2> <span className="font-semibold"> Pet Name: Cat</span> {'Mittens'}</h2>
                        <h2> <span className="font-semibold">Category:Cat</span> {'Cat'}</h2>
                        <h2 className="flex items-center"><span className="font-semibold">Ratings:</span> <span className="flex text-yellow-400"> <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> </span> </h2>
                    </div>
                </div>
                <div className="border-2 rounded-lg">
                    <div className="p-2">
                    <img className="w-full h-[300px] object-cover" src="https://i.ibb.co/CKwS24r/cat1.jpg" alt="" />
                    </div>
                    <div id="content" className="p-2">
                        <h1 className="font-bold text-2xl mb-2">Luna the Enchanting Cat</h1>
                        <h2> <span className="font-semibold"> Pet Name:</span> {'Luna'}</h2>
                        <h2> <span className="font-semibold">Category:</span> {'Cat'}</h2>
                        <h2 className="flex items-center"><span className="font-semibold">Ratings:</span> <span className="flex text-yellow-400"> <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> </span> </h2>
                    </div>
                </div>
                <div className="border-2 rounded-lg">
                    <div className="p-2">
                    <img className="w-full h-[300px] object-cover" src="https://i.ibb.co/v1kyKtB/ferret2.jpg" alt="" />
                    </div>
                    <div id="content" className="p-2">
                        <h1 className="font-bold text-2xl mb-2">Gizmo the Clever Ferret</h1>
                        <h2> <span className="font-semibold"> Pet Name:</span> {'Clever Ferret'}</h2>
                        <h2> <span className="font-semibold">Category:</span> {'Ferret'}</h2>
                        <h2 className="flex items-center"><span className="font-semibold">Ratings:</span> <span className="flex text-yellow-400"> <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> </span> </h2>
                    </div>
                </div>
                <div className="border-2 rounded-lg">
                    <div className="p-2">
                    <img className="w-full h-[300px] object-cover" src="https://i.ibb.co/s1RRX1Q/rabbit.jpg" alt="" />
                    </div>
                    <div id="content" className="p-2">
                        <h1 className="font-bold text-2xl mb-2"> Thumper the Playful Rabbit</h1>
                        <h2> <span className="font-semibold"> Pet Name:</span> {'Rabbit'}</h2>
                        <h2> <span className="font-semibold">Category:</span> {'Rabbit'}</h2>
                        <h2 className="flex items-center"><span className="font-semibold">Ratings:</span> <span className="flex text-yellow-400"> <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> </span> </h2>
                    </div>
                </div>
                <div className="border-2 rounded-lg">
                    <div className="p-2">
                    <img className="w-full h-[300px] object-cover" src="https://i.ibb.co/GQ18Vd0/bird.jpg" alt="" />
                    </div>
                    <div id="content" className="p-2">
                        <h1 className="font-bold text-2xl mb-2">Coco the Chatty Bird</h1>
                        <h2> <span className="font-semibold"> Pet Name:</span> {'Coco'}</h2>
                        <h2> <span className="font-semibold">Category:</span> {'Bird'}</h2>
                        <h2 className="flex items-center"><span className="font-semibold">Ratings:</span> <span className="flex text-yellow-400"> <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> </span> </h2>
                    </div>
                </div>
            </aside>

        </section>
    );
};

export default PetCategory;