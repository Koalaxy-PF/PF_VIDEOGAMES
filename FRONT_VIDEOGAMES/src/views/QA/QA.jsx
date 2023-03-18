import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/SideBar/Sidebar'
import Footer from '../../components/Footer/Footer'

export default function QA() {
  return(

    <div className=''>

        <div>
            <Navbar />
        </div>

        <div className='flex w-full h-[calc(100vh-5.1rem)] bg-gray-100'>

            <Sidebar />

            <section className="bg-gray-100 text-gray-500 w-full h-full">
	            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		            <h2 className="mb-5 text-4xl  py-2 font-bold leading-none text-center sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Frequently Asked Questions</h2>
		            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">

			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What advantages do I have when creating an account?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
				</div>

			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
				</div>
			</details>

			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
					<p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
				</div>
			</details>

		</div>
	</div>
</section>
        </div>

        <div>
        <Footer />
      </div>


    </div>
  )
}
