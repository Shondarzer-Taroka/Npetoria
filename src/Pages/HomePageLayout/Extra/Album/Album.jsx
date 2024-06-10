import PhotoAlbum from "react-photo-album";



const Album = () => {
    const photos = [
        { src: "https://i.ibb.co/Wsjnrw0/dog2.jpg", width: 800, height: 600 },
        { src: "https://i.ibb.co/hy7Bm8D/rabbit5.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/dtWB06F/parrot32.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/rGk7cBv/parrot.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/nkS4jFx/gct6.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/svH2c14/gct5.jpg", width: 1300, height: 900 },
        { src: "https://i.ibb.co/fnRFLvR/gct4.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/v1dSMmL/gct3.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/483GRRW/gct2.jpg", width: 1200, height: 900 },
        { src: "https://i.ibb.co/cc7KDY9/dog3.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/x5bF4rx/rabbit2.jpg", width: 1000, height: 900 },
        { src: "https://i.ibb.co/Hp2g4kJ/dog1.jpg", width: 1000, height: 900 },
    ];
    return (
        <section className="">

<h1 className="font-bold text-4xl uppercase text-center my-7">Our album</h1>
            <div>
                <PhotoAlbum layout="rows" photos={photos} />;
            </div>
        </section>
    );
};

export default Album;