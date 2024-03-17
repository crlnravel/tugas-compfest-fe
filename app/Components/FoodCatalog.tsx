"use client"

import React, {useEffect, useState} from "react";
import {ApiMakananResponse, Makanan} from "@/app/interface";
import axios from "axios";
import {useSearchParams} from "next/navigation";
import {faker} from "@faker-js/faker";

const generateFoods = (numOfFood: number) => {
    const foods: Makanan[] = []

    for (let i = 0; i < numOfFood; i++) {
        const id = i;
        const nama = faker.word.noun()
        const deskripsi = faker.commerce.productDescription()
        const createdAt = faker.date.past().toString()
        const updatedAt = faker.date.past().toString()
        const harga = +faker.commerce.price()
        const stok = faker.number.int()
        const tokoId = faker.number.int()

        foods.push({
            id,
            nama,
            deskripsi,
            createdAt,
            updatedAt,
            harga,
            stok,
            tokoId,
        })
    }

    return foods
}

const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
}

export const FoodCatalog: React.FC = () => {
    const [foods, setFoods] = useState<Makanan[]>();
    const [allFoods, setAllFoods] = useState<Makanan[]>()

    const searchParams = useSearchParams()
    const pageNumber = +searchParams.get("page")

    useEffect(() => {
        const getFoods = async () => {
            const { data, status }: ApiMakananResponse = await axios.get<ApiMakananResponse>(process.env.NEXT_PUBLIC_BACKEND_URL + "/makanan")

            setFoods(data)
        }

        setAllFoods(generateFoods(100))

    }, []);

    useEffect(() => {
        if (allFoods) {
            setFoods(paginate(allFoods, pageNumber, 20))
        }
    }, [allFoods, pageNumber])

    const dummySkeleton = []

    for (let i = 0; i < 20; i++) {
        dummySkeleton.push(<div key={i} className="skeleton w-40 md:w-60 lg:w-68 h-40 md:h-60 lg:h-68"></div>)
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 lg:gap-9">
            { foods ? foods.map( food => (
                    <div key={food.id} className="card bg-primary-content/0 text-primary w-40 md:w-60 lg:w-68 bg-base-100 shadow-xl">
                        <figure className="rounded-lg"><img src={faker.image.urlLoremFlickr({ category: 'food' })} alt="Shoes" /></figure>
                        <div className="card-body p-4">
                            <h4 className="card-title text-lg">{food.nama}</h4>
                            <p></p>
                        </div>
                    </div>
                    )
                )
                : dummySkeleton
            }
        </div>
    )
}
