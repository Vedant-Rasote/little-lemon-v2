'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image';

const Menu = () => {
  const lunchMenu = [
    { name: 'Hummus Platter', description: 'Chickpea dip served with olive oil and pita bread', price: 8.99, image: '/food1.webp' },
    { name: 'Greek Salad', description: 'Fresh vegetables, feta cheese, olives, and Greek dressing', price: 10.99, image: '/food1.webp' },
    { name: 'Chicken Souvlaki', description: 'Grilled marinated chicken skewers with tzatziki sauce', price: 12.99, image: '/food1.webp' },
    { name: 'Shawarma Wrap', description: 'Seasoned and grilled meat wrapped in flatbread with tahini', price: 9.99, image: '/food1.webp' },
    { name: 'Baklava', description: 'Rich, sweet pastry made of layers of filo filled with chopped nuts', price: 6.99, image: '/food1.webp' },
  ];

  const dinnerMenu = [
    { name: 'Chicago-Style Falafel Platter', description: 'Falafel served with Chicago-style tzatziki and pita', price: 16.99, image: '/food1.webp' },
    { name: 'Lakefront Salmon Souvlaki', description: 'Fresh salmon skewers marinated and grilled to perfection', price: 24.99, image: '/food1.webp' },
    { name: 'Deep-Dish Moussaka', description: 'A hearty casserole with layers of eggplant, ground lamb, and béchamel sauce', price: 19.99, image: '/food1.webp' },
    { name: 'Windy City Shawarma Wrap', description: 'Seasoned and grilled meat wrapped in Chicago-style flatbread with tahini', price: 18.99, image: '/food1.webp' },
    { name: 'Navy Pier Baklava Delight', description: 'Rich baklava made with locally sourced nuts and honey', price: 12.99, image: '/food1.webp' },
  ];
  return (
    <div className='container my-10'>
      <div className="md:p-10">
        <div className="md:p-10">
          <h2 className='uppercase text-lg md:text-xl lg:text-2xl my-4 accent'>Menu</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className=' border-b-0'>
              <AccordionTrigger className="py-6 bg-color text-white hover:bg-[#403c36] hover:px-4 border-t border-[#5b564a]">
                <p>LUNCH MENU</p>
                <p className='hidden md:inline-block relative left-[-303px]'>Starts: 11:30 AM / Ends: 2:30 PM</p>
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableBody>
                    {lunchMenu.map((item, index) => (
                      <TableRow key={index} className="border-b hover:bg-[#403c36] group">
                        <TableCell className="font-medium w-1/6">{item.name}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell className="hidden md:block">
                          <Image className='hidden group-hover:block' width={300} height={300} src={item.image} alt='Award 4' />
                        </TableCell>
                        <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="py-6 bg-color text-white hover:bg-[#403c36] hover:px-4 border-y border-[#5b564a]">
                <p>DINNER MENU</p>
                <p className='hidden md:inline-block relative left-[-216px]'>Starts: 5:30 PM / Ends: 9:00 PM (FRI. & SAT. TILL 12 PM)</p>
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableBody>
                    {dinnerMenu.map((item, index) => (
                      <TableRow key={index} className="border-b hover:bg-[#403c36] group">
                        <TableCell className="font-medium w-1/6">{item.name}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell className="hidden md:block">
                          <Image className='hidden group-hover:block' width={300} height={300} src={item.image} alt='Award 4' />
                        </TableCell>
                        <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Menu