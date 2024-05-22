import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    const matheus = await prisma.user.upsert({
        where: { email: 'matheusrochaevs@gmail.com' },
        update: {},
        create: {
            name: 'Matheus Rocha Evangelista',
            email: 'matheusrochaevs@gmail.com',
            password: 'Evssalvo@9185'
        },
    })

    const sara = await prisma.user.upsert({
        where: { email: 'sarapachecosrs@gmail.com' },
        update: {},
        create: {
            name: 'Sara Pacheco Soares',
            email: 'sarapachecosrs@gmail.com',
            password: 'Evssalvo@9185'
        },
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })