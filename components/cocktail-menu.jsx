'use client'

import { useState } from 'react'
import { Martini, Wine, X } from 'lucide-react'
import Image from 'next/image'
import sunnyimg from '../app/public/sunny.jpg'
import basil from '../app/public/basil.jpg'
import daiquiri from '../app/public/daiquiri.jpg'
import frutal from '../app/public/frutal.jpg'
import ginTonic from '../app/public/gin tonic.jpg'
import highball from '../app/public/highball.jpg'
import short from '../app/public/short.jpg'
import footerimg from '../app/public/4glasses.jpg'

const cocktails = [
  {
    id: 1,
    name: "Sunny Cocktail",
    description: "Trago cítrico de la dueña del hogar",
    image: sunnyimg,
    ingredients: [
      { name: "Base alcoholica", description: "Gin, ron blanco y vermu blanco" },
      { name: "Citrico", description: "Zumo de limón y naranja" },
      { name: "Endulzante", description: "Jarabe de azúcar" },
      { name: "Garnish", description: "Twist de naranja y cereza" },
      { name: "Extra", description: "Hielo en cubitos" },
      { name: "Cristaleria", description: "Martini" },
      { name: "Metodo", description: "Coctelera" },
    ]
  },
  {
    id: 2,
    name: "Tropical Sour",
    description: "Un cóctel vibrante y refrescante con notas tropicales.",
    image: frutal,
    ingredients: [
      { name: "Base alcoholica", description: "Ron añejo" },
      { name: "Citrico", description: "Zumo de limón" },
      { name: "Endulzante", description: "Jarabe de miel" },
      { name: "Fruta", description: "Puré de piña" },
      { name: "Garnish", description: "Rodaja de piña y hojas de menta" },
      { name: "Extra", description: "Hielo en cubitos" },
      { name: "Cristaleria", description: "Copa Old Fashioned" },
      { name: "Metodo", description: "Coctelera" },
    ]
  },
  {
    id: 3,
    name: "Smoky Old Fashioned",
    description: "Una reversión del clásico con un toque ahumado.",
    image: daiquiri,
    ingredients: [
      { name: "Base alcoholica", description: "Bourbon" },
      { name: "Endulzante", description: "Azúcar moreno" },
      { name: "Amargo", description: "Bitter de Angostura" },
      { name: "Extra", description: "Hielo grande" },
      { name: "Garnish", description: "Twist de naranja quemado" },
      { name: "Cristaleria", description: "Copa Old Fashioned" },
      { name: "Metodo", description: "Directo en vaso" },
      { name: "Toque final", description: "Humo de madera de cerezo" }
    ]
  },
  {
    id: 4,
    name: "Cucumber Fizz",
    description: "Un cóctel refrescante con pepino y soda.",
    image: basil,
    ingredients: [
      { name: "Base alcoholica", description: "Gin" },
      { name: "Citrico", description: "Zumo de lima" },
      { name: "Endulzante", description: "Jarabe de agave" },
      { name: "Fruta", description: "Pepino fresco" },
      { name: "Gaseosa", description: "Soda" },
      { name: "Garnish", description: "Rodaja de pepino y hojas de menta" },
      { name: "Extra", description: "Hielo en cubitos" },
      { name: "Cristaleria", description: "Copa Highball" },
      { name: "Metodo", description: "Coctelera" },
    ]
  },
  {
    id: 5,
    name: "Spicy Margarita",
    description: "Una margarita con un toque picante.",
    image: highball,
    ingredients: [
      { name: "Base alcoholica", description: "Tequila blanco" },
      { name: "Citrico", description: "Zumo de lima" },
      { name: "Endulzante", description: "Jarabe de agave" },
      { name: "Picante", description: "Jalapeño fresco" },
      { name: "Garnish", description: "Rodaja de jalapeño y sal de chile" },
      { name: "Extra", description: "Hielo triturado" },
      { name: "Cristaleria", description: "Copa Margarita" },
      { name: "Metodo", description: "Coctelera" },
    ]
  },
  {
    id: 6,
    name: "Berry Mule",
    description: "Una versión frutal del clásico Moscow Mule.",
    image: ginTonic,
    ingredients: [
      { name: "Base alcoholica", description: "Vodka" },
      { name: "Citrico", description: "Zumo de limón" },
      { name: "Endulzante", description: "Jarabe de azúcar" },
      { name: "Fruta", description: "Moras frescas" },
      { name: "Gaseosa", description: "Ginger beer" },
      { name: "Garnish", description: "Menta fresca y moras" },
      { name: "Extra", description: "Hielo en cubitos" },
      { name: "Cristaleria", description: "Jarra de cobre" },
      { name: "Metodo", description: "Coctelera" },
    ]
  },
  {
    id: 7,
    name: "Rose Negroni",
    description: "Una variación floral del clásico Negroni.",
    image: short,
    ingredients: [
      { name: "Base alcoholica", description: "Gin" },
      { name: "Aperitivo", description: "Campari" },
      { name: "Vermut", description: "Vermú rosado" },
      { name: "Garnish", description: "Pétalos de rosa comestibles" },
      { name: "Extra", description: "Hielo grande" },
      { name: "Cristaleria", description: "Copa Old Fashioned" },
      { name: "Metodo", description: "Directo en vaso" }
    ]
  }
  

]

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