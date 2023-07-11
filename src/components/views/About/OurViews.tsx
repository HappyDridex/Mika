const OurViews = () => {
    return (
        <section>
            <h2 className="mx-auto mt-5 w-max text-3xl text-white md:text-[40px]">Наши виды</h2>
            <div className="mt-11 grid grid-cols-1 gap-4 px-[10%] md:grid-cols-3 md:gap-9 md:px-10">
                <img
                    className="max-h-auto w-full rounded-2xl object-cover md:max-h-[445px]"
                    src="/images/about/about-3.png"
                    alt="Церковь"
                />
                <img
                    className="max-h-auto w-full rounded-2xl object-cover md:max-h-[445px]"
                    src="/images/about/about-1.png"
                    alt="Церковь"
                />
                <img
                    className="max-h-auto w-full rounded-2xl object-cover md:max-h-[445px]"
                    src="/images/about/about-2.png"
                    alt="Церковь"
                />
            </div>
        </section>
    );
};

export default OurViews;
