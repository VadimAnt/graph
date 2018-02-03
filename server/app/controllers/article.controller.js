const articles = [
	{
		id: 1,
		userId: 1,
		title: "Article1",
		descr: "test2fname"
	},
	{
		id: 2,
		userId: 1,
		title: "Article2",
		descr: "test1fname"
	},
	{
		id: 3,
		userId: 1,
		title: "Article3",
		descr: "test3fname"
	},
];

class ArticleController{
	read(root, args){
		return articles.filter((el) => { return el.userId === root.id });
	}
}

module.exports = new ArticleController();