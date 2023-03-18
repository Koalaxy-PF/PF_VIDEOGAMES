import { useState, useRef } from 'react'
import CreateUser from '../createUser/createUser'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/SideBar/Sidebar'
import Carrucel_main from '../../components/Carrucel/Carrucel_main'
import Cards from '../../components/CardContainer/CardContainer'
import Slider2 from '../../components/Carrucel/Slider'
import Video from '../../assets/juego-37255.mp4'
export default function Home(){

  const data = [
        
    {
    name: "FORSPOKEN",
    id: 16,
    description: "Forspoken narra la historia de Frey, una joven neoyorquina que acaba en el hermoso y cruel mundo de Athia. Mientras averigua cómo volver a casa, tendrá que usar sus nuevas dotes mágicas para recorrer paisajes enormes y enfrentarse a seres monstruosos.",
    released: "2023-01-24",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1680880/capsule_616x353.jpg?t=1678382734",
    calification: "3",
    MinRequirements: "",
    RecommendRequirements: "",
    company: ["Luminous Productions"],
    genre: ["Action", "Adventure", "Rol"],
    price: 70,
    discount: 0,
  },

         {
    name: "WATCH DOGS®: LEGION",
    id: 15,
    description: "En Watch Dogs: Legion, tu misión es crear una resistencia para salvar a Londres de la debacle en un futuro próximo.",
    released: "2023-01-26",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2239550/capsule_616x353.jpg?t=1674755684",
    calification: "3",
    MinRequirements: "",
    RecommendRequirements: "",
    company: ["Ubisoft Toronto"],
    genre: ["Action", "Adventure"],
    price: 60,
    discount: 0,
  },

      {
    name: "DEAD SPACE",
    id: 17,
    description: "Vuelve el clásico de terror y supervivencia de ciencia ficción, recreado completamente para ofrecer una experiencia más inmersiva (incluidas mejoras visuales, sonoras y de jugabilidad) al mismo tiempo que se mantiene fiel a la emocionante visión del juego original.",
    released: "2023-01-27",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1693980/capsule_616x353.jpg?t=1678446810",
    calification: "4",
    MinRequirements: "",
    RecommendRequirements: "",
    company: ["Motive"],
    genre: ["Action", "Adventure"],
    price: 60,
    discount: 0,
  },

         {
    name: "PIZZA TOWER",
    id: 18,
    description: "Pizza Tower es un juego de plataformas en 2D de ritmo rápido inspirado en la serie Wario Land, con énfasis en el movimiento, la exploración y el ataque de puntuación. Con pixel art muy estilizado inspirado en los dibujos animados de los años 90 y una banda sonora muy enérgica.",
    released: "2023-01-26",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2231450/capsule_616x353.jpg?t=1674756021",
    calification: "5",
    MinRequirements: "",
    RecommendRequirements: "",
    company: ["Tour De Pizza"],
    genre: ["Action", "Indie"],
    price: 20,
    discount: 0,
  },

        {
    name: "AQUATICO",
    id: 19,
    description: "Aquatico es un juego de supervivencia de construcción de ciudades ambientado en las profundidades marinas. Construye estratégicamente una ciudad sumergida sobre el lecho marino y enfrenta los retos que conlleva una vida oceánica..",
    released: "2023-01-12",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1675900/capsule_616x353.jpg?t=1677772500",
    calification: "3",
    MinRequirements: "",
    RecommendRequirements: "",
    company: ["Digital Reef Games."],
    genre: ["Simulation", "Strategy"],
    price: 25,
    discount: 0,
  },
    ];

    const vendidos = [
        
      {
        name: "SONS OF THE FOREST",
        id: 30,
        description: "Enviado a buscar a un multimillonario desaparecido en una isla remota, te encuentras en un infierno infestado de caníbales. Crea, construye y lucha para sobrevivir, solo o con amigos, en este nuevo y aterrador simulador de horror y supervivencia de mundo abierto.",
        released: "2023-02-23",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/1326470/capsule_616x353.jpg?t=16771796397",
        calification: "4",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Endnight Games Ltd"],
        genre: ["Rol"],
        price: 30,
        discount: 0,
      },

      {
        name: "HOGWARTS LEGACY",
        id: 29,
        description: "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",
        released: "2023-02-10",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/990080/capsule_616x353.jpg?t=1676412613",
        calification: "4",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Avalanche Software"],
        genre: ["Action", "Adventure", "Rol"],
        price: 60,
        discount: 0,
      },
      
       {
        name: "FIFA 23",
        id: 37,
        description: "FIFA 23 nos acerca a The World's Game con la tecnología HyperMotion2, la FIFA World Cup™ masculina y femenina disponibles durante la temporada, clubes femeninos, función de juego cruzado* y mucho más.",
        released: "2022-09-30",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/capsule_616x353.jpg?t=1677074188",
        calification: "5",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["EA Canada & EA Romania"],
        genre: ["Simulation", "Sports"],
        price: 70,
        discount: 0,
      },
       
       {
        name: "FAR CRY 5",
        id: 35,
        description: "Bienvenido a Hope County, Montana, la tierra de los valientes y de la libertad, pero también de la secta apocalíptica conocido camo 'Puerta del Edén'. Enfréntate a Joseph Seed, líder de la secta, y sus hermanos para liberar a la comunidad de Hope.",
        released: "2018-03-27",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/capsule_616x353.jpg?t=1671031724",
        calification: "4",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Ubisoft Toronto"],
        genre: ["Action", "Adventure"],
        price: 60,
        discount: 0,
      },
       
       {
        name: "RED DEAD REDEMPTION II",
        id: 36,
        description: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era.",
        released: "2019-12-05",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009",
        calification: "4",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Rockstar Games"],
        genre: ["Action", "Adventure"],
        price: 60,
        discount: 67,
      },
       
      {
        name: "ASSASINS CREED VALHALLA",
        id: 31,
        description: "Ponte en la piel de Eivor, una leyenda vikinga en busca de gloria. Saquea a tus enemigos, haz prosperar tu asentamiento y consolida tu poder político.",
        released: "2022-12-06",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg?t=1671135934",
        calification: "3",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Ubisoft Montreal"],
        genre: ["Action", "Adventure", "Rol"],
        price: 60,
        discount: 0,
      },
    ];

    const Tendencias = [

      {
        name: "OCTOPATH TRAVELER II",
        id: 28,
        description: "Un juego nuevo de rol de la saga OCTOPATH TRAVELER, cuya primera entrega se publicó en 2018 y vendió más de tres millones de copias en todo el mundo.",
        released: "2023-02-24",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/1971650/capsule_616x353.jpg?t=1678490077",
        calification: "5",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Square Enix", "ACQUIRE Corp"],
        genre: ["Rol"],
        price: 60,
        discount: 0,
      },

      {
        name: "ATOMIC HEART",
        id: 27,
        description: "Ten encuentros explosivos en un delirante y sublime mundo utópico. Adapta tu estilo de combate a cada rival, aprovecha el entorno y mejora el equipamiento para cumplir la misión. El precio de averiguar la verdad tendrás que pagarlo con sangre.",
        released: "2023-02-20",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/668580/header.jpg?t=1676995676",
        calification: "5",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Mundfish"],
        genre: ["Action", "Adventure", "Rol"],
        price: 60,
        discount: 0,
      },

      {
        name: "WO LONG: FALLEN DYNASTY",
        id: 24,
        description: "Nuevo RPG de acción de fantasía oscura en los Tres Reinos, de Team NINJA, creadores de Nioh",
        released: "2023-03-03",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1448440/capsule_616x353.jpg?t=1677836173",
        calification: "3",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["KOEI TECMO GAMES CO., LTD."],
        genre: ["Action", "Adventure", "Rol"],
        price: 60,
        discount: 0,
      },
       
      {
        name: "LIKE A DRAGON: ISHIN!",
        id: 25,
        description: "En 1860 Kioto está plagado de desigualdades y un samurái cambiará el curso de la historia en su búsqueda de la justicia. Desenvaina tu espada y únete a la revolución en esta aventura histórica. Reserva ahora para añadir tres armas exclusivas a tu arsenal.",
        released: "2023-03-03",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/capsule_616x353.jpg?t=1678469799",
        calification: "4",
        MinRequirements: "",
        RecommendRequirements: "",
        company: ["Ryu Ga Gotoku Studio"],
        genre: ["Action", "Adventure"],
        price: 60,
        discount: 0,
      },
       
        {
          name: "HI-FI RUSH",
          id: 26,
          description: "Siente el ritmo mientras el aspirante a estrella Chai y su variopinto equipo luchan con una megacorporación en atronadores combates de ritmo. De la mano de Tango Gameworks, llega Hi-Fi RUSH, un juego de acción en el que el mundo se sincroniza con la música.",
          released: "2023-01-25",
          img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817230/header.jpg?t=1675874328",
          calification: "5",
          MinRequirements: "",
          RecommendRequirements: "",
          company: ["Tango Gameworks"],
          genre: ["Action"],
          price: 30,
          discount: 0,
        },
    ];

  return (
    <div className="w-full">


      <div className='top-0'> 
        <Navbar/>
      </div>

          <div className='flex flex-row w-full'>

            <div className='bg-gray-900'>
              <Sidebar />
            </div>
         
            <div className='bg-gray-200'>            
            
              <Slider2 data={Tendencias} tittle={"NEWS AND TRENDS"} />
              <Slider2 data={vendidos} tittle={"BEST SELLERS"} />
              <Slider2 data={data} tittle={"BEST GAMES OF FEBRUARY"} />
              
            </div>
        </div>


      <div className='w-full'>
        <Footer/>
      </div>
    </div>
  )
}