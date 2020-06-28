
// Github page with curated list of resources
let masterList = 'https://github.com/Michael0x2a/curated-programming-resources/blob/master/resources.md';



// https://stackoverflow.com/questions/35435042/how-can-i-define-an-array-of-objects
export let learningUrls: { language: string, URLs: string[] }[] = [
	{'language': 'C', "URLs": [
		'https://www.learn-c.org/',
		'https://www.edx.org/course/cs50s-introduction-to-computer-science',
		'https://www.programiz.com/c-programming'
		]},
	{'language': 'Python', "URLs": [
		'http://www.pythontutor.com/visualize.html',
		'https://www.edx.org/course/introduction-to-computer-science-and-programming-7',
		]}
	];

export function generateLearningResources() {
    
}


export function searchLanguages(lang: string, langUrlArray: { language: string, URLs: string[] }[]){
	for(var i=0; i < langUrlArray.length; i++){
		if (langUrlArray[i].language === lang){
			return langUrlArray[i];
		}
	}
}
