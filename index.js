import { normalize, schema, denormalize } from "normalizr";
import print from "./function.js";

const holding = {
  id: "1000",
  nombre: "Relojes",
  multideporte: {
    id: "2",
    nombre: "Fenix 7x",
    SKU: "103452311",
    color: "Black",
    peso: "160g",
  },
  running: {
    id: "3",
    nombre: "Forerunner 55",
    SKU: "102343311",
    color: "White",
    peso: "88g",
  },
  golf: {
    id: "4",
    nombre: "Approach S62",
    SKU: "103455211",
    color: "White",
    peso: "140g",
  },
  categoriaEntrenando: [
    {
      id: "1",
      nombre: "Garmin Swim 2",
      SKU: "10141211",
      color: "Red",
      peso: "120g",
    },
    {
      id: "2",
      nombre: "Fenix 7x",
      SKU: "103452311",
      color: "Black",
      peso: "160g",
    },
    {
      id: "3",
      nombre: "Forerunner 55",
      SKU: "102343311",
      color: "White",
      peso: "88g",
    },
    {
      id: "4",
      nombre: "Approach S62",
      SKU: "103455211",
      color: "White",
      peso: "140g",
    },
    {
      id: "5",
      nombre: "Venu 2 Plus",
      SKU: "109897611",
      color: "White",
      peso: "90g",
    },
    {
      id: "6",
      nombre: "Vivomove HR",
      SKU: "107832311",
      color: "Gold",
      peso: "95g",
    },
    {
      id: "7",
      nombre: "Descent Mk1",
      SKU: "109987511",
      color: "Black",
      peso: "155g",
    },
    {
      id: "8",
      nombre: "Forerunner 65",
      SKU: "101947511",
      color: "Blue",
      peso: "76g",
    },
  ],
};

const categoriaEntrenando = new schema.Entity("catEntrenando");

const organigrama = new schema.Entity("organigrama", {
  multideporte: categoriaEntrenando,
  running: categoriaEntrenando,
  golf: categoriaEntrenando,
  categoriaEntrenando: [categoriaEntrenando],
});

//NORMALIZAR
let relojesNormalizado = normalize(holding, organigrama);
console.log("LG Normal-->", JSON.stringify(holding).length);
console.log("LG Normalizada-->", JSON.stringify(relojesNormalizado).length);

//DESNORMALIZAR
let relojesDesnormalizado = denormalize(
  relojesNormalizado.result,
  organigrama,
  relojesNormalizado.entities
);

console.log(
  "LG Desnormalizada-->",
  JSON.stringify(relojesDesnormalizado).length
);

print(relojesNormalizado);
