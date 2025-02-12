import React from "react";

const LatestNews = () => {
    // Latest News Array
    const latestNews = [
        {
            id: "1",
            image: "/ln1.jpg", // Replace with actual image paths
            author: "By Jastin Wastal",
            date: "15 Sep 2023",
            title: "New season modern scarf",
            description:
                "Etiam facisis urna dignissim dui quisque in mauris viverra Nulla placerat suscipit integer enim.",
        },
        {
            id: "2",
            image: "/ln2.jpg", // Replace with actual image paths
            author: "By Emily Brown",
            date: "10 Sep 2023",
            title: "Autumn collection trends",
            description:
                "Nulla facilisi. Aliquam erat volutpat. Quisque faucibus urna eu arcu pellentesque.",
        },
        {
            id: "3",
            image: "/ln3.jpg", // Replace with actual image paths
            author: "By Sarah Lee",
            date: "5 Sep 2023",
            title: "How to layer your outfits",
            description:
                "Vivamus luctus eros aliquet convallis. Integer malesuada lorem sit amet nisl.",
        },
    ];

    return (
        <div className="px-24 py-8 bg-white">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-semibold text-gray-800">Latest News</h2>
                <p className="my-2 text-lg text-gray-600">Here is our top newses for your fasion guide.</p>
                <div className="bg-red-600 w-28 h-[3px] mx-auto"></div>
            </div>

            {/* Latest News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestNews.map((news) => (
                    <div key={news.id} className="bg-white overflow-hidden relative">
                        <div className="w-full h-96 overflow-hidden">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-fill transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        <button className="bg-red-400 px-6 py-2 absolute top-3 left-3 text-white font-medium text-lg">Fashion</button>
                        <div className="py-4">
                            <div className="flex justify-start items-center gap-4">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                                    <p className="text-lg text-gray-500">{news.author}</p>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                                    <p className="text-lg text-gray-500">{news.date}</p>
                                </div>
                            </div>
                            <h3 className="text-3xl font-semibold my-2 text-gray-800 hover:text-red-600">{news.title}</h3>
                            <p className="text-gray-600 mt-2 text-lg">{news.description}</p>
                            <a href="#" className="text-red-600 hover:text-black hover:border-black mt-3 inline-block text-lg font-medium border-b-2 border-red-600">
                                Read More...
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
