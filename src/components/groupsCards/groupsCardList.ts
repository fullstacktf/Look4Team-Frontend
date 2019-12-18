


export interface GroupCardInterface {
  name: string,
  image: string,
  friends: string[]
}

export const GroupCardsList: GroupCardInterface[] = [
  {
    name: "los de siempre",
    image: "https://ih1.redbubble.net/image.841977155.7760/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.u1.jpg",
    friends: ["Juan", "Paco", "Manolo", "Pedro"]
  },
  {
    name: "Amigos del colegio",
    image: "https://sagradocorazon.com.es/wp-content/uploads/2018/06/colegio-reparadores-venta-banos.jpg",
    friends: ["Juan", "Paco", "Manolo", "Pedro"]
  }
]
