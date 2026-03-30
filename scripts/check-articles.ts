import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const articles = await prisma.article.findMany({
    select: { slug: true, title: true, category: true },
    orderBy: { publishedAt: "desc" },
    take: 20,
  });
  console.log(JSON.stringify(articles, null, 2));
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
