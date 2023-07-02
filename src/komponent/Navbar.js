import React from 'react'
import Couple from './image/couple.png';
import Event from './image/event.png';
import Book from './image/book.png';
import Story from './image/story.png';
import Message from './image/message.png';
import Gift from './image/gift.png';
 const Navbar = () => {
   
  return (
    <div className='NavbarBottom'>
<div className='w-full h-screen '>
	<section id='bottom-navigation' className='flex w-max-lg  items-center justify-between fixed inset-x-0 lg:w-96 bg-pink-500 w-64 h-16 bottom-4 z-50 shadow-xl rounded-xl -translate-x-1/2 left-1/2   '>
	<a href='#Home'>
	<div className='IconHome m-5' >
	<svg  width="20" height="30" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Z" fill="#FFFFFF"/></svg>	
		</div>
	</a>
	<a href='#Couple'>
	<div className='IconCouple relative right-5  '>
		<img width={30} src={Couple} alt='couple'/>	
		</div>
	</a>
	<a href='#Event'>
	<div className='IconEvent right-5 relative'>
		<img width={25} src={Event} alt='event' />
		</div>
	</a>
		<a href='#Book'>
			<div className='IconBook relative right-5'>
				<img width={30} src={Book} alt='book' />
			</div>
		</a>
		<a href='#Story'>
			<div className='IconBook relative right-5'>
				<img width={30} src={Story} alt='Story' />
			</div>
		</a>
		<a href='#Message'>
			<div className='IconBook relative right-5'>
				<img width={25} src={Message} alt='Message' />
			</div>
		</a>
		<a href='#gift'>
			<div className='IconBook relative right-5'>
				<img width={20} src={Gift} alt='Gift' />
			</div>
		</a>
	</section>
</div>
   {/* <div class="w-full h-screen">
	<section id="bottom-navigation" className="block w-max-lg fixed inset-x-0 bottom-4 z-50 bg-pink-800 shadow w-64 lg:w-96 rounded-lg -translate-x-1/2 left-1/2">
		<div id="tabs" class="flex justify-between m-1">
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <svg width="55" height="30" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Z" fill="#ffffff"/></svg>
			</a>
			<a href="#" class="w-full  focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<img width={30} src={Couple} alt='IconCouple' />
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <img width={30} src={Event} alt='Event' />
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <img width={30} src={Book} alt='BookGalery' />
			</a>
			<a href="" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
			<img width={30} src={Book} alt='BookGalery' />
			</a>
		</div>
	</section>
</div> */}
    </div>
)}

export default Navbar;