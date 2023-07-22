"use client";
import { useRef } from "react";
import Image from "next/image";
import { Icons } from "./icons";

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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="lg:px-12">
            <CardWithForm />
          </div>
        ))}
      </div>
    </div>
  );
}

import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="relative w-full h-40">
          <Image
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="img"
            fill
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="">$599</div>

          <div className="font-semibold text-xs my-1">Aliva Priva Jardin</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-slate-400">
          Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI
          Jakarta
        </div>
      </CardFooter>
    </Card>
  );
}
