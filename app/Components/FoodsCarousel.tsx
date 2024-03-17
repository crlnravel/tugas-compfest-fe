"use client"

import React, {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";
import {ApiMakananResponse, Makanan} from "@/app/interface";

export const FoodsCarousel: React.FC = () => {
    const [foods, setFoods] = useState<Makanan[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getFoods = async () => {
            const { data, status } = await axios.get<Makanan[]>(process.env.NEXT_PUBLIC_BACKEND_URL + "/makanan")

            setFoods(data)
            setIsLoading(false)
        }
    }, []);

    return (
        !foods ?
            <div className="skeleton w-full h-80"></div> :
            <div className="carousel rounded-box">
                {foods.map( food => (
                    <div key={food.id} className="carousel-item">
                        <div className="bg-slate-500">

                        </div>
                    </div>
                ))}
            </div>
    )
}