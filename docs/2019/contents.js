interface ITableOfContents {
	contents: IContent[];
}
interface IContent {
	displayYear: number;
	blogList: IBlogCard[];
}
interface IBlogCard {
	title: string;
	editedOn: string;
	briefDescription: string;

	// this object is set to optional for now
	Tags?: string[];
}

const contents: IBlogCard = {
	title: "HI",
	editedOn: "h",
	briefDescription: "hi"
};

const contens: IContent = {
	displayYear: 2019,
	blogList: [
		{
			title: "HI",
			editedOn: "h",
			briefDescription: "hi"
		}
	]
};

// const tableOfContents: ITableOfContents = {
// 	contents: [
// 		{
// 			displayYear: 2019,
// 			blogList: [
// 				{
// 					title: "HI",
// 					editedOn: "h",
// 					briefDescription: "hi"
// 				}
// 			]
// 		}
// 	]
// };
