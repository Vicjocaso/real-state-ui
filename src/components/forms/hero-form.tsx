"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});

export function HeroForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    },
  });
  // ...
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="relative">
          <Input placeholder="location" {...form.register("location")} />
          {form.formState.errors.location && (
            <p className="text-sm font-medium text-destructive py-2">
              {form.formState.errors.location.message}
            </p>
          )}
          <div className="absolute top-0 right-0">
            <Button
              className={cn(buttonVariants({ size: "sm" }), " text-xs m-0.5")}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
