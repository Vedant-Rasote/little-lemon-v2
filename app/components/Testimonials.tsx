'use client'

import { Gowun_Batang } from 'next/font/google';
const gowunBatang = Gowun_Batang({ subsets: ['latin'], weight: '400' });
import { Parallax } from 'react-parallax';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonials = () => {
  const testimonials = [
    {
      "id": 1,
      "title": "Delicious Experience",
      "review": "I recently had the pleasure of dining at this exquisite restaurant, and I must say it was a truly delightful experience. The menu offers a diverse range of dishes, each expertly crafted and bursting with unique flavors. The ambiance is cozy and inviting, making it the perfect setting for a memorable meal. The attentive staff further enhanced my dining experience. I highly recommend this restaurant to anyone seeking a culinary adventure.",
      "date": "Jan 12, 2022",
      "datetime": "2022-01-12",
      "customer": {
        "name": "Alice Johnson",
        "occupation": "Food Enthusiast",
        "imageUrl": "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      "id": 2,
      "title": "A Culinary Delight",
      "review": "My visit to this restaurant was a true culinary delight. From the moment I walked in, the warm and inviting atmosphere set the stage for a wonderful dining experience. The menu offers a fantastic selection of dishes, each expertly prepared with attention to detail. The flavors were exquisite, and the presentation was top-notch. The friendly and knowledgeable staff added to the overall positive experience. I can confidently say that this restaurant is a must-visit for any food enthusiast.",
      "date": "Feb 25, 2022",
      "datetime": "2022-02-25",
      "customer": {
        "name": "Bob Smith",
        "occupation": "Gourmet Explorer",
        "imageUrl": "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      "id": 3,
      "title": "Amazing Dining Experience",
      "review": "My recent dining experience at this restaurant was nothing short of amazing. The menu showcases a wonderful blend of flavors, and each dish is a work of art. The attention to detail in both the cuisine and service is commendable. The ambiance is elegant yet comfortable, making it an ideal setting for a special meal. The knowledgeable and friendly staff further enhanced my overall enjoyment. I highly recommend this establishment to anyone looking for a memorable dining experience.",
      "date": "Mar 18, 2022",
      "datetime": "2022-03-18",
      "customer": {
        "name": "Evan Martinez",
        "occupation": "Culinary Connoisseur",
        "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
      }
    },
    {
      "id": 4,
      "title": "Unforgettable Flavors",
      "review": "My recent visit to this restaurant left me with a lasting impression of unforgettable flavors. Each dish on the menu is thoughtfully crafted with a perfect balance of ingredients. The culinary expertise shines through, making it a standout dining destination. The ambiance is sophisticated, and the service is impeccable. I left with a sense of culinary satisfaction and look forward to returning for another exceptional dining experience.",
      "date": "Apr 5, 2022",
      "datetime": "2022-04-05",
      "customer": {
        "name": "David Brown",
        "occupation": "Food Critic",
        "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ];

  return (
    <div className='container'>
      <div className="md:p-10">
        <div className="md:p-10">
          <h2 className={`${gowunBatang.className} uppercase text-lg md:text-xl lg:text-2xl my-4 accent`}>Testimonials</h2>
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/2">
                  <Parallax strength={50} className='' >
                    <article key={testimonial.id} className="embla__slide flex flex-col items-start justify-between p-5 border border-[#5b564a]">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={testimonial.datetime} className=" text-stone-300">
                          {testimonial.date}
                        </time>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:accent-color">
                          <span className="absolute inset-0" />
                          {testimonial.title}
                        </h3>
                        <blockquote>
                          <p className="mt-5 line-clamp-3 text-sm leading-6">{testimonial.review}</p>
                        </blockquote>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <img src={testimonial.customer.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                          <p className="font-semibold">
                            <span className="absolute inset-0" />
                            {testimonial.customer.name}
                          </p>
                          <p className="">{testimonial.customer.occupation}</p>
                        </div>
                      </div>
                    </article>
                  </Parallax>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-5 md:left-10' />
            <CarouselNext className='right-5 md:right-10' />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials