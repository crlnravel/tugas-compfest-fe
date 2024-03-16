"use client"

import React, {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";

export const FoodsCarousel: React.FC = () => {
    const [foods, setFoods] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getFoods = async () => {
            const { data, status } = await axios({
                method: "GET",
                url: process.env.NEXT_PUBLIC_BACKEND_URL + "/makanan",
            })

            setFoods(data)
            setIsLoading(false)
        }
    }, []);

    return (
        foods ?
            <div className="skeleton w-32 h-32"></div> :
            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <Image src={foods.imgSource} alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger"/>
                </div>
            </div>
    )
}