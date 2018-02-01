const tags = [
	{
		id: 1,
		articleId: 1,
		name: "Biology",
	},
	{
		id: 2,
		articleId: 1,
		name: "DNK",
	},
	{
		id: 3,
		articleId: 1,
		name: "Chemistry",
	},
];


module.exports = {
	tags: (article) => {
		console.log(article);
		return tags.filter((el) => { return el.articleId === article.id });
	}
};