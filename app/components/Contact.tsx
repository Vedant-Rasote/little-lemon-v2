"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }).max(50, {
    message: 'Name is too long. (2 to 50 characters)',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  message: z.string().min(1, {
    message: "Message can't be blank!",
  }),
  terms: z.boolean().default(false).refine(value => value === true, {
    message: 'You must accept the privacy policy.',
  }),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      terms: false,
    },
  })

  function onContactSubmit(values: z.infer<typeof formSchema>) {
    console.log('Submitting form:', values);
  }

  return (
    <div className='container my-10' id='contact'>
      <div className="md:p-10">
        <div className="md:p-10">
          <h2 className='uppercase text-lg md:text-xl lg:text-2xl my-4 accent'>Contact</h2>
          <div className="border border-[#5b564a]">
            <div className="md:flex lg:flex">
              <div className="sm:w-full md:w-1/2 flex flex-col p-5 md:p-10 justify-center">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onContactSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input className='text-white bg-body border-[#5b564a] focus:border-[#6d6554] focus:!ring-offset-0 rounded-none' placeholder="eg. John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input className='text-white bg-body border-[#5b564a] focus:border-[#6d6554] focus:!ring-offset-0 rounded-none' type="email" placeholder="eg. john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message..." className="resize-none text-white bg-body border-[#5b564a] focus:border-[#6d6554] focus:!ring-offset-0 rounded-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="terms"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className='border border-[#5b564a] rounded-none bg-body focus:bg-body focus-within:bg-black'
                              />
                              <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Accept terms and conditions
                              </label>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button className='border border-[#5b564a] rounded-none bg-body hover-bg-accent text-white' type="submit">Send</Button>
                  </form>
                </Form>
              </div>
              <div className="sm:w-full md:w-1/2 flex flex-col p-5 md:p-10">
                <p className='mb-1'>Find Us</p>
                <iframe
                  className='w-full my-1'
                  title="Google Map"
                  height="292"
                  src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
                <ul className='mt-5'>
                  <li className='my-2'>
                    Call: <Link href="tel:+91234535473">+91 234535473</Link>
                  </li>
                  <li className='my-2'>
                    Email: <Link href="mailto:info@mysite.com">info@mysite.com</Link>
                  </li>
                  <li className='my-2'>Address: 123 Lemon Grove, Chicago, IL 60601</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact