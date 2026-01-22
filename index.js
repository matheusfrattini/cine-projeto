//CREATE
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// async function main() {
//   const filmesParaAdicionar = [
//     { title: "O Poderoso Chefão", genre: "Crime", year: 1972 },
//     { title: "Batman: O Cavaleiro das Trevas", genre: "Ação", year: 2008 },
//     { title: "Pulp Fiction", genre: "Crime", year: 1994 },
//     { title: "A Origem", genre: "Ficção Científica", year: 2010 },
//     { title: "Matrix", genre: "Ficção Científica", year: 1999 },
//     { title: "Gladiador", genre: "Aventura", year: 2000 },
//     { title: "Parasita", genre: "Suspense", year: 2019 },
//     { title: "O Rei Leão", genre: "Animação", year: 1994 },
//     { title: "Clube da Luta", genre: "Drama", year: 1999 },
//     { title: "Forrest Gump", genre: "Drama", year: 1994 }
//   ]

//   await prisma.movie.createMany({
//     data: filmesParaAdicionar,
//     skipDuplicates: true
//   })

//   const filmes = await prisma.movie.findMany()
//   console.table(filmes)
// }

// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

// UPDATE
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// async function main() {
//   await prisma.movie.update({
//     where: { id: 4 },
//     data: {
//       title: "A Origem - Versão Estendida",
//       year: 2011
//     }
//   })

//   await prisma.movie.update({
//     where: { id: 7 },
//     data: {
//       genre: "Drama/Suspense"
//     }
//   })

//   const filmes = await prisma.movie.findMany()
//   console.table(filmes)
// }

// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })


//DELETE
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.movie.delete({
    where: { id: 4 }
  })

  await prisma.movie.delete({
    where: { id: 7 }
  })

  const filmes = await prisma.movie.findMany()
  console.table(filmes)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })