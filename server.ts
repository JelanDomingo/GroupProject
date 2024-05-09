/*import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function main() {
    const post = await prisma.post.create({
        data: {
            title: "My first post",
            name: 'My first body',
        }
    });
    console.log(post);
}


main()
    .catch(e => {
        console.error(e.message)
    }
)
.finally(async () => {
    await prisma.$disconnect()
})*/