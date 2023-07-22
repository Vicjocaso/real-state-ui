import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Shell } from "@/components/shell";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Balance from "react-wrap-balancer";
import { HeroForm } from "@/components/forms/hero-form";

const slides: string[] = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
  "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
  "https://images.unsplash.com/photo-1515173342347-46d4b997a731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=902&q=80",
];

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="flex justify-center h-[50rem] bg-slate-500"
      >
        <div className="w-full md:max-w-4xl">
          <div className="flex flex-col justify-between lg:flex-row items-center py-4 md:py-[6.9rem]">
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

            <div className="w-64 lg:w-[27rem]">
              <div className="relative w-full md:h-[35rem] h-[20rem]">
                <Image
                  loading="lazy"
                  className="object-cover rounded-t-[240px] border-[6px] border-solid border-slate-500"
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
          id="categories"
          aria-labelledby="categories-heading"
          className="space-y-6 py-6 md:pt-10 lg:pt-32"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Categories
            </h2>
            <Balance className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore our categories and find the best products for you
            </Balance>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            aa
          </div>
        </section>
        <section
          id="create-a-store-banner"
          aria-labelledby="create-a-store-banner-heading"
          className="grid place-items-center gap-6 rounded-lg border bg-card px-6 py-16 text-center text-card-foreground shadow-sm"
        >
          <h2 className="text-2xl font-medium sm:text-3xl">
            Do you want to sell your products on our website?
          </h2>
          <Link href="/dashboard/stores">
            <div className={cn(buttonVariants())}>
              Create a store
              <span className="sr-only">Create a store</span>
            </div>
          </Link>
        </section>
        <section
          id="featured-products"
          aria-labelledby="featured-products-heading"
          className="space-y-6"
        >
          <div className="flex-col items-center">
            <h2 className="text-slate-900 text-2xl font-medium dark:text-slate-200">
              Best Choices
            </h2>
            <h2 className="text-slate-500 text-3xl font-medium dark:text-slate-200">
              Popular Residence
            </h2>
          </div>
          {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
          {/* <div className="w-[80rem]">
            <CarouselCard />
          </div> */}
          {/* </div> */}
        </section>
        <section
          id="contact-us"
          aria-labelledby="featured-stores-heading"
          className="space-y-6"
        >
          <h2 className="text-2xl font-medium sm:text-3xl">Featured stores</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            asd
          </div>
        </section>
      </Shell>
    </div>
  );
}
