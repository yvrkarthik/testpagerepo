/**
 * This configuration file is mainly used to display the Table of Contents for NotebookOfT site.
 * A json object will be defined which will be driving the rendering of the blog cards in the home page.
 *
 * Version:
 * LastUpdatedOn:
 * Change Log:
 */

/*
 * This type is the fundamental building block of the JSON object
 * Each blog card should implement the below mentioned properties
 */
interface IBlog {
	title: string;

	/*
	 * time date stamp of the article
	 * currently, it is set to string but might change in future
	 */
	editedOn: string;

	/* a brief gist which would used to display a snapshot of the blog */
	briefDescription: string;

	/*
	 * url of the github markdown file
	 * ex: /docs/2019/contents.md
	 */
	githubArticleUrl: string;

	/*
	 * this property is set to optional for now
	 * will be implemented when the Tags feature has been implemented.
	 */
	tags?: string[];
}

/*
 * This type builds upon the IBlog type.
 * Used to categorize the blogs based on a year
 */
interface IContent {
	displayYear: number;
	blogs: IBlog[];
}

/* wrapper which displays all the blogs */
interface ITableOfContents {
	contents: IContent[];
}

/* Actual JSON object where the contents are defined */
const tableOfContents: ITableOfContents = {
	contents: [
		{
			displayYear: 2019,
			blogs: [
				{
					title: "hi",
					editedOn: "1",
					briefDescription: "wwwww",
					githubArticleUrl: "githubArticleUrl"
				}
			]
		},
		{
			displayYear: 2018,
			blogs: [
				{
					title: "hi",
					editedOn: "1",
					briefDescription: "wwwww",
					githubArticleUrl: "githubArticleUrl"
				}
			]
		}
	]
};

export default tableOfContents;
