const Banner = () => {
    return (
        <div className="hero bg-hero-bg w-11/12 mx-auto h-[500px] my-4 rounded-lg">
            <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="lg:w-[70%] md:w-[90%]">
                    <h1 className="mb-5 lg:text-5xl md:text-3xl text-3xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 text-xs md:text-lg">Unlock the Chef Within and Elevate Your Plate,Join Our Culinary Journey to Create, Innovate.From Classic Recipes to Bold New Flavors,We’ll Guide You with Tips that Every Cook Savors.
                    </p>
                    <div className="space-x-3">
                        <button className="btn bg-green-700 text-white rounded-xl py-2 px-5 border-none hover:bg-transparent hover:ring-1 hover:ring-white">Explore Now</button>
                        <button className="btn bg-transparent text-white border-white rounded-xl py-2 px-5 hover:bg-green-700 hover:border-none">Our feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;