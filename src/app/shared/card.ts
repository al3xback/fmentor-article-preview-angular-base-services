export interface Card {
	title: string;
	description: string;
	imageSrc: string;
	author: {
		name: string;
		imageSrc: string;
		postDate: Date;
	};
}
