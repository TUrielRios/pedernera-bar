'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import sunny_cocktail from '../app/public/sunnyCocktail.png'
import tango from '../app/public/tango.png'
import malvina from '../app/public/malvina.png'
import pedernera from '../app/public/pedernera.png'

const cocktails = [
  {
    id: 2,
    name: "Sunny Cocktail",
    description: "Brilla como una tarde de verano. La suavidad del ron de coco se funde con el gin y la frescura cítrica, mientras la granadina aporta un destello dulce y vibrante. El perfume de albahaca lo eleva, creando un trago fresco, alegre y encantador. Ideal para abrir la pista... o simplemente sonreír.",
    image: sunny_cocktail, // Necesitarás importar esta imagen
    ingredients: [
      { name: "Base alcoholica", description: "Ron de coco y gin" },
      { name: "Citrico", description: "Jugo de naranja, jugo de limón" },
      { name: "Endulzante", description: "Granadina" },
      { name: "Garnish", description: "Una rodaja de naranja y una rama de albahaca" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Maridaje", description: "Ideal para disfrutar durante cualquier momento del cumpleaños" }
    ]
  },
  {
    id: 3,
    name: "Tango",
    description: "Un clásico con espíritu porteño. La frescura del limón y el pepino se fusionan con la intensidad del gin y un toque de almíbar, dando como resultado un trago equilibrado, vibrante y elegante. Ideal para brindar después del almuerzo, con el ritmo suave de una tarde de celebración.",
    image: tango, // Necesitarás importar esta imagen
    ingredients: [
      { name: "Base alcoholica", description: "Gin" },
      { name: "Citrico", description: "Jugo de limón" },
      { name: "Endulzante", description: "Almíbar" },
      { name: "Garnish", description: "Una rodaja de limón" },
      { name: "Extra", description: "Pepino" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Maridaje", description: "Ideal para después del almuerzo" }
    ]
  },
  {
    id: 4,
    name: "Malvina",
    description: "Ligero, herbal y refrescante, Malvina es un cóctel pensado para acompañar almuerzos al sol. La fusión del gin y el Aperol se suaviza con almíbar y limón, mientras el pepino y el agua tónica le suman frescura y carácter. Ideal para acompañar almuerzos largos, sobremesas compartidas y charlas al sol.",
    image: malvina, // Necesitarás importar esta imagen
    ingredients: [
      { name: "Base alcoholica", description: "Gin y Aperol" },
      { name: "Citrico", description: "Jugo de limón" },
      { name: "Endulzante", description: "Almíbar" },
      { name: "Garnish", description: "Una rodaja de naranja" },
      { name: "Extra", description: "Agua tónica y pepino" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Maridaje", description: "Ideal para acompañar el almuerzo" },
      { name: "Importante", description: "Llená tu vaso hasta la mitad con Malvina y completá con agua tónica." }
    ]
  },
  {
    id: 5,
    name: "Pedernera",
    description: "Un trago cálido y jugoso, con alma tropical y cuerpo dorado. El ron se fusiona con el dulzor suave del durazno y el cítrico vibrante de la naranja, mientras el almíbar equilibra con sutileza. Fresco, frutal y fácil de amar, es el compañero ideal para snacks salados y momentos distendidos.",
    image: pedernera, // Necesitarás importar esta imagen
    ingredients: [
      { name: "Base alcoholica", description: "Ron dorado" },
      { name: "Citrico", description: "Jugo de naranja y jugo de durazno" },
      { name: "Garnish", description: "Una rodaja de naranja" },
      { name: "Endulzante", description: "Almíbar" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Maridaje", description: "Ideal para acompañarlo con snacks y salados." }
    ]
  }
];


export function CocktailMenu() {
  const [selectedCocktail, setSelectedCocktail] = useState(null)

  return (
    <div className="max-w-4xl mx-auto bg-[#FFFDF0] border-8 border-[#1C4E36] p-8 font-serif">
      <h1 className="text-4xl font-bold text-center text-[#1C4E36] mb-8">Pedernera Bar</h1>
      
      {selectedCocktail ? (
        <div className="text-[#1C4E36]">
          <button 
            onClick={() => setSelectedCocktail(null)}
            className="mb-4 text-[#1C4E36] hover:text-[#2A734F] transition-colors"
          >
            <X className="inline-block mr-2" size={24} />
            Back to menu
          </button>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-4 lg:mb-2">
              {selectedCocktail.name}
            </h1>
            <Image
              src={selectedCocktail.image}
              alt={selectedCocktail.name}
              width={250}
              height={250}
              className="mx-auto lg:ml-4 mb-4 lg:mb-0"
            />
          </div>

          <div className="space-y-4">
            {selectedCocktail.ingredients.map((ingredient, index) => (
              <div key={index}>
                <h3 className="font-bold">{ingredient.name}</h3>
                <p className="text-sm italic">{ingredient.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cocktails.map((cocktail) => (
            <div 
              key={cocktail.id} 
              className="border border-[#1C4E36] p-4 rounded cursor-pointer hover:bg-[#E6E3D6] transition-colors flex items-center"
              onClick={() => setSelectedCocktail(cocktail)}
            >
              <div>
                <h2 className="text-xl font-bold text-[#1C4E36] mb-2">{cocktail.name}</h2>
                <p className="text-[#1C4E36] text-sm">{cocktail.description}</p>
              </div>
              <Image
                src={cocktail.image}
                alt={cocktail.name}
                width={100}
                height={100}
                className="mr-4"
              />
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}
