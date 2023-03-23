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

		<div class="bg-cover bg-no-repeat flex w-full h-[calc(100vh-4.5rem)]" style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>

            <Sidebar />

            <section className="text-slate-100 w-full h-full text-xl">
	            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		            <h2 className="mb-5 text-4xl  py-2 font-bold leading-none text-center sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Frequently Asked Questions</h2>
		            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">

			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What advantages do I have when creating an account?</summary>
				<div className="px-4 pb-4">
					<p>It allows us to have a list of favorites, to be able to buy games and to be able to see them in our library.</p>
				</div>
			</details>

			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What payment methods do we have?</summary>
				<div className="px-4 pb-4">
					<p>Validated users can buy using PayPal or MercadoPago.</p>
				</div>
			</details>

			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is the function of the support?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Support allows us to contact us and send us your problem or BUG.</p>
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
