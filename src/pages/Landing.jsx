import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from "../data/companies.json"
import faqs from "../data/faqs.json"

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
const Landing = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-10'>
      <section className='text-center'>
        <h1 className=' flex flex-col items-center justify-center gradient-title gardient-title text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter py-4 '>Find Your Dream Job
          <span className='flex items-center gap-2 sm:gap-6'>and get
            <img src="/logo.png" alt="hired logo" className=' h-14 sm:h-24 lg:h-32' />
          </span></h1>
        <p className=' text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore thousands of job listing or find the perfect candidate</p>
      </section>
      <div className=' flex gap-6 justify-center items-center'>
        <Link to="/jobs">
          <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">Post a Jobs</Button>
        </Link>


      </div>

      {/* carousel */}
      <Carousel
      plugins={[ Autoplay({ delay: 2000, stopOnInteraction: true })]}
        className="w-full py-5"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map((items, index) => (
            <CarouselItem key={index} className=" basis-1/3 lg:basis-1/6">
              <img src={items.path} alt={items.name} className='h-9 sm:h-14 object-contain' />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <div >
      <img src="/banner1.png" alt="" className='w-full rounded-sm' />
      </div>
      <section>
        {/* cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

     
      </section>
      {/* accordion */}
       <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}

export default Landing