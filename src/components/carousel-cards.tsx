"use client";

import { useRef } from "react";
import * as React from "react";
import Image from "next/image";
import { Icons } from "./icons";
import { houses } from "../../data/houses";

export default function CarouselCard() {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= 400;
    }
  };
  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 450;
    }
  };

  return (
    <div className="overflow-hidden relative w-full dark:bg-transparent rounded-lg">
      <div className="flex justify-end">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 rounded-full border dark:text-slate-50"
        >
          <Icons.chevronLeft size={30} />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 m-2 rounded-full border dark:text-slate-50"
        >
          <Icons.chevronRight size={30} />
        </button>
      </div>
      <div
        ref={contentRef}
        className="flex items-center justify-start overflow-x-auto scroll-smooth"
      >
        {houses.map((house) => (
          <div key={house.title} className="lg:px-12">
            <CardHouses
              title={house.title}
              image={house.image}
              price={house.price}
              location={house.location}
              description={house.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface CardHousesProps {
  image: string;
  price: number;
  title: string;
  location: string;
  description: string;
}

export function CardHouses(props: CardHousesProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="relative w-full h-40">
          <Image
            className="object-cover rounded-lg"
            src={props.image}
            alt="img"
            fill
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="">${props.price}</div>

          <div className="font-semibold text-xs my-1">{props.title}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-slate-400">{props.description}</div>
      </CardFooter>
    </Card>
  );
}
