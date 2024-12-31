'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import punt_pampa from '../app/public/sunny.jpg'
import dulce_criollo from '../app/public/dulce_criollo.png'
import sol_norte from '../app/public/sol_norte.png'
import frutal from '../app/public/frutal.jpg'
import gin_criollo from '../app/public/gin-criollo.png'
import highball from '../app/public/highball.jpg'
import ron_argento from '../app/public/ron_argento.png'
import pomelo_tropical from '../app/public/pomelo_tropical.png'
import footerimg from '../app/public/4glasses.jpg'
import baileys from '../app/public/baileys.png'
import patron from '../app/public/patron.png'
import jagger from '../app/public/jagger.png'

const cocktails = [
  {
    id: 1,
    name: "Punt & Pampa",
    description: "Un cóctel amargo-dulce con un final cítrico refrescante.",
    image: punt_pampa,
    ingredients: [
      { name: "Base alcoholica", description: "Vermú Punt e Mes" },
      { name: "Citrico", description: "Jugo de pomelo" },
      { name: "Endulzante", description: "Granadina" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso corto" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 2,
    name: "Obrero de la Tarde",
    description: "Un trago chispeante y equilibrado con notas amargas y dulces.",
    image: highball,
    ingredients: [
      { name: "Base alcoholica", description: "Amargo Obrero" },
      { name: "Citrico", description: "Jugo de pomelo" },
      { name: "Diluyente", description: "Sprite" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 3,
    name: "Gintonic Criollo",
    description: "Un clásico reversionado con aromas cítricos.",
    image: gin_criollo,
    ingredients: [
      { name: "Base alcoholica", description: "Gin Tanqueray y 10ml de vermú" },
      { name: "Diluyente", description: "Agua tónica" },
      { name: "Citrico", description: "Rodaja de pomelo" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 4,
    name: "Roncito Argento",
    description: "Un trago fresco con un toque cítrico y burbujeante.",
    image: ron_argento,
    ingredients: [
      { name: "Base alcoholica", description: "Ron Bacardi" },
      { name: "Citrico", description: "Jugo de limón" },
      { name: "Endulzante", description: "Almibar" },
      { name: "Diluyente", description: "Sprite" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 5,
    name: "Sol del Norte",
    description: "Un cóctel dulce con un degradado espectacular.",
    image: sol_norte,
    ingredients: [
      { name: "Base alcoholica", description: "Vodka" },
      { name: "Citrico", description: "Jugo de naranja" },
      { name: "Endulzante", description: "Granadina" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 6,
    name: "Pomelo Tropical",
    description: "Una mezcla cítrica y refrescante con cachaza.",
    image: pomelo_tropical,
    ingredients: [
      { name: "Base alcoholica", description: "Cachaza" },
      { name: "Citrico", description: "Jugo de pomelo" },
      { name: "Endulzante", description: "Azúcar" },
      { name: "Diluyente", description: "Sprite" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 7,
    name: "Dulces sueños",
    description: "Un trago cremoso con un toque dulce y un contraste inesperado.",
    image: dulce_criollo,
    ingredients: [
      { name: "Base alcoholica", description: "Baileys" },
      { name: "Endulzante", description: "Granadina" },
      { name: "Refuerzo", description: "Vodka" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso corto" },
      { name: "Metodo", description: "Agitado" }
    ]
  },
  {
    id: 9,
    name: "El Patrón del Obrero",
    description: "Un trago fresco e intenso con notas herbales.",
    image: patron,
    ingredients: [
      { name: "Base alcoholica", description: "Amargo Obrero" },
      { name: "Citrico", description: "Jugo de limón y pomelo" },
      { name: "Diluyente", description: "Soda" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso corto" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 10,
    name: "Fresco y Jagger",
    description: "Un trago herbáceo y refrescante con un toque oscuro.",
    image: jagger,
    ingredients: [
      { name: "Base alcoholica", description: "Jagger" },
      { name: "Cítrico", description: "Jugo de pomelo" },
      { name: "Endulzante", description: "Almíbar" },
      { name: "Diluyente", description: "Sprite" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso corto" },
      { name: "Metodo", description: "Construcción directa" }
    ]
  },
  {
    id: 11,
    name: "Argentum",
    description: "Un cóctel complejo con un balance perfecto entre dulce, amargo y cítrico.",
    image: frutal,
    ingredients: [
      { name: "Base alcoholica", description: "Ron Bacardi" },
      { name: "Refuerzo", description: "Amargo Obrero" },
      { name: "Citrico", description: "Jugo de pomelo" },
      { name: "Endulzante", description: "Granadina" },
      { name: "Hielo", description: "Cubitos" },
      { name: "Cristaleria", description: "Vaso largo" },
      { name: "Metodo", description: "Agitado y colado" }
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
      
      <div className="mt-8 flex justify-center text-center text-[#1C4E36]">
      <Image
                src={footerimg}
                alt='4 copas'
                width={200}
                height={200}
                className="mr-4"
              />
      </div>
    </div>
  )
}