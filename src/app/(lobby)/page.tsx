"use client";
import Image from "next/image";
import { Shell } from "@/components/shell";
import Balance from "react-wrap-balancer";
import { HeroForm } from "@/components/forms/hero-form";
import CarouselCard from "@/components/carousel-cards";
import { AccordionDemo } from "@/components/accordion";
import { ContactCard } from "@/components/contact-card";
import { contactCardArray } from "@/types";

const slides: string[] = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
  "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
  "https://images.unsplash.com/photo-1515173342347-46d4b997a731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=902&q=80",
];

const contactCards: contactCardArray = [
  {
    title: "Call",
    description: "(407)-221-2309",
    icon: "phone",
  },
  {
    title: "Chat",
    description: "(407)-221-2309",
    icon: "message",
  },
  {
    title: "Video",
    description: "(407)-221-2309",
    icon: "video",
  },
  {
    title: "Message",
    description: "(407)-221-2309",
    icon: "mail",
  },
];

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="flex justify-center h-[50rem] bg-gradient-to-r from-slate-300 to-slate-600"
      >
        <div className="w-full md:max-w-4xl">
          <div className="flex flex-col justify-between lg:flex-row items-center py-12 md:py-[6.9rem]">
            <div className="w-80">
              <div className="flex-col space-y-6 text-center">
                <Balance className="text-3xl text-slate-900 font-bold leading-tight md:text-5xl lg:text-6xl lg:leading-[1.1]">
                  Discover Most Suitable Property
                </Balance>
                <Balance className="text-slate-800">
                  Find a variety of properties that suit you very easilty Forget
                  all difficulties in finding a residence for you
                </Balance>
                <div className="">
                  <HeroForm />
                </div>
              </div>
            </div>

            <div className="w-64 lg:w-[27rem] lg:py-0 py-[5rem]">
              <div className="relative w-full md:h-[35rem] h-[20rem]">
                <Image
                  loading="lazy"
                  className="object-cover rounded-t-[240px] border-[6px] border-solid border-slate-900"
                  src={slides[1]}
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Shell as="div">
        <section
          id="residence"
          aria-labelledby="popular-residence-heading"
          className="space-y-6 py-6 md:pt-10 lg:pt-24"
        >
          <div className="flex-col items-center">
            <h2 className="text-slate-900 text-2xl font-medium dark:text-slate-200">
              Best Choices
            </h2>
            <h2 className="text-slate-500 text-3xl font-medium dark:text-slate-200">
              Popular Residence
            </h2>
          </div>
          <div className="lg:w-[76rem] w-[17rem]">
            <CarouselCard />
          </div>
        </section>
        <section
          id="our-value"
          aria-labelledby="our-value-heading"
          className="space-y-6 py-6 md:pt-10 lg:pt-24"
        >
          <div className="grid lg:grid-cols-2 dark:text-slate-50 ">
            <div>
              <div className="mx-auto lg:w-[33rem] lg:py-0 py-[7rem]">
                <div className="relative w-full md:h-[35rem] h-[20rem]">
                  <Image
                    loading="lazy"
                    className="object-cover rounded-t-[240px] border-[6px] border-solid border-slate-900"
                    src={slides[3]}
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="w-full">
                <div className="flex-col space-y-7 text-center">
                  <div>
                    <Balance className="text-3xl font-bold leading-tight md:text-5xl lg:text-4xl lg:leading-[1.1]">
                      Our Value
                    </Balance>
                  </div>
                  <div>
                    <Balance className="text-4xl font-bold leading-tight md:text-5xl lg:text-3xl lg:leading-[1.1]">
                      Value We Give to You
                    </Balance>
                  </div>
                  <Balance className="text-slate-400">
                    We always ready to help by providijng the best services for
                    you. We beleive a good blace to live can make your life
                    better
                  </Balance>
                  <div>
                    <AccordionDemo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact-us"
          aria-labelledby="our-value-heading"
          className="space-y-6 py-6 md:pt-10 lg:pt-32"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl dark:text-slate-50">
              Our contact
            </h2>
            <Balance className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </Balance>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-6">
            <div>
              <div className="mx-auto lg:w-[33rem] lg:py-0 py-[7rem]">
                <div className="relative w-full md:h-[35rem] h-[20rem]">
                  <Image
                    loading="lazy"
                    className="object-cover rounded-t-[240px] border-[6px] border-solid border-slate-900"
                    src={slides[2]}
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-center">
              {contactCards.map((contact) => (
                <div key={contact.title}>
                  <ContactCard
                    title={contact.title}
                    icon={contact.icon}
                    description={contact.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Shell>
    </div>
  );
}
