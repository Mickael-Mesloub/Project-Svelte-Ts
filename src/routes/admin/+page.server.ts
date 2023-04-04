import { prisma } from '../../prisma';
import type { Actions } from './news/$types';

export const actions: Actions = {
	createArticle: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const content = data.get('content') as string;
		const image = data.get('image') as string;
		await prisma.article.create({
			data: {
				content,
				title,
				image
			}
		});
	}
};
