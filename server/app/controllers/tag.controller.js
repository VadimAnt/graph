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

class TagController{
	read(root, args){
		return tags.filter((el) => { return el.articleId === root.id });
	}
}

module.exports = new TagController();