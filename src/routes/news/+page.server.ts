import { prisma } from '../../prisma';

export const load = async () => {
	const articles = await prisma.article.findMany();
	return { articles };
};
