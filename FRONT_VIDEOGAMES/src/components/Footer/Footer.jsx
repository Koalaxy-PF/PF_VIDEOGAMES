import logo from '../../assets/icons/koalaLogo.png'
import icons from '../../assets/footer/icons.js'

export default function Footer() {
  return (
    <footer className="bg-[#609CA4]">

	    <div className="container grid mx-auto gap-x-3 gap-y-8 md:grid-cols-4 xl:grid-cols-4">

			<div className="flex flex-col mr-7 space-y-4 sm:hidden md:flex">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-40 h-40 mt-8 rounded-full ">
						<img src={logo} />
					</div>
				</a>
			</div>

		    <div className="pt-6 flex flex-col space-y-4">
			    <h2 className="text-slate-100 font-bold">SOPORTE</h2>
			    <div className="flex flex-col space-y-2 text-md text-slate-600 font-semibold">
				  <a rel="noopener noreferrer" href="#">Preguntas Frecuentes</a>
				  <a rel="noopener noreferrer" href="#">¿Quiénes Somos?</a>
				  <a rel="noopener noreferrer" href="#">Métodos de Pago</a>
                  <a rel="noopener noreferrer" href="#">Términos y Condiciones</a>
                  
			  </div>
		  </div>

			<div className="pt-6 flex flex-col space-y-4">
			<h2 className="text-slate-100 font-bold">SERVICIOS</h2>
			<div className="flex flex-col space-y-2 text-md text-slate-600 font-semibold">
				<a rel="noopener noreferrer" href="#">Caja de Recompensa</a>				
			</div>
		</div>

		<div className="pt-6 flex flex-col space-y-4">
			<h2 className="text-slate-100 font-bold">CONTACTO</h2>
			<div className="flex flex-col space-y-2 text-md text-gray-600">
				<div className="flex flex-row w-7 h-7 gap-2">
					<img src={icons.img1} alt="WhatsApp" />
					<img src={icons.img2} alt="Instagram" />
					<img src={icons.img3} alt="Facebook" />
					<img src={icons.img4} alt="Gmail" />
				</div>
			</div>
		</div>

	</div>
	<div className="flex items-center justify-center px-6 pt-8 pb-4 text-sm">
		<span className="text-slate-300">© Copyright 2023. Todos los Derechos Reservados.</span>
	</div>
</footer>
  )
}