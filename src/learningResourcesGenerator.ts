// This file contains the implementation of the learning resource generation, the result of which 
// is an array of programming languages grouped with an array of URLs to (hopefully) useful resources. 
import * as vscode from 'vscode';

// (Later) Implement a web crawler to access the file at the above URL
// You know, we could just copy/paste them into here. ok

// Curated list of resources: https://github.com/Michael0x2a/curated-programming-resources/blob/master/resources.md
export let learningUrls: { language: string, URLs: string[] }[] = [
	{'language': 'Scratch', "URLs": [
        'http://scratch.mit.edu/help/videos/',
        'http://inventwithscratch.com/about/',
        'http://cs.harvard.edu/malan/scratch/index.php',
        'http://stwww.weizmann.ac.il/g-cs/scratch/scratch_en.html',
        'http://download.scratch.mit.edu/ScratchReferenceGuide14.pdf',
        'http://snap.berkeley.edu/SnapManual.pdf',
        'http://scratch.mit.edu/educators/',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#scratch'
    ]},	
    {'language': 'C', "URLs": [
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-087-practical-programming-in-c-january-iap-2010/',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-088-introduction-to-c-memory-management-and-c-object-oriented-programming-january-iap-2010/',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-s096-effective-programming-in-c-and-c-january-iap-2014/',
        'http://learn-c.org',
        'http://c.learncodethehardway.org/book/',
        'http://www.buildyourownlisp.com/',
        'http://en.wikibooks.org/wiki/C_Programming',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#c',
        'https://www.learn-c.org/',
		'https://www.edx.org/course/cs50s-introduction-to-computer-science',
        'https://www.programiz.com/c-programming'
    ]},
    {'language': 'C++', 'URLs': [
        'https://developers.google.com/edu/c++/',
        'https://www.coursera.org/course/cplusplus4c',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-096-introduction-to-c-january-iap-2011/',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-088-introduction-to-c-memory-management-and-c-object-oriented-programming-january-iap-2010/',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-s096-effective-programming-in-c-and-c-january-iap-2014/',
        'https://see.stanford.edu/Course/CS106A',
        'https://see.stanford.edu/Course/CS106B',
        'https://see.stanford.edu/Course/CS107',
        'http://nova.umuc.edu/~jarc/sdsd/',
        'http://greenteapress.com/thinkcpp/index.html',
        'http://www.learncpp.com/',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#c-1',
        'http://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list'
      
    ]},
	{'language': 'Python', "URLs": [
		'http://www.pythontutor.com/visualize.html',
		'https://www.edx.org/course/introduction-to-computer-science-and-programming-7',
        'https://docs.microsoft.com/en-us/learn/paths/python-first-steps/',
        'https://www.udacity.com/course/ud036',
        'https://www.coursera.org/course/pythonlearn',
        'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0#.VJw5pv-kAA',
        'http://mitpress.mit.edu/books/introduction-computation-and-programming-using-python-0',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-090-building-programming-experience-a-lead-in-to-6-001-january-iap-2005/',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-189-a-gentle-introduction-to-programming-using-python-january-iap-2011/',
        'http://teamtreehouse.com/features/python',
        'http://learnpython.org',
        'http://www.trypython.org/',
        'http://automatetheboringstuff.com/',
        'http://learnpythonthehardway.org/book/',
        'http://www.openbookproject.net/thinkcs/python/english2e/',
        'http://www.openbookproject.net/thinkcs/python/english3e/',
        'http://www.greenteapress.com/thinkpython/',
        'https://docs.python.org/2/tutorial/',
        'https://docs.python.org/3/tutorial/',
        'http://interactivepython.org/runestone/static/pythonds/index.html',
        'http://www.diveintopython3.net/',
        'http://inventwithpython.com/',
        'http://ProgramArcadeGames.com',
        'https://python-guide.readthedocs.org/en/latest/',
        'http://resrc.io/list/4/pycrumbs/',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#python',
        'http://importpython.com/books/',
        'http://www.pyschools.com/',
        'http://pymotw.com/'
	]},
	{'language' : 'C#', "URLs" : [
		'https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/',
        'https://mva.microsoft.com/en-US/training-courses/c-fundamentals-for-absolute-beginners-16169',
        'http://www.microsoftvirtualacademy.com/training-courses/developer-training-with-programming-in-c',
        'http://en.wikibooks.org/wiki/C_Sharp_Programming',
        'http://www.csharpcourse.com/',
        'http://www.techotopia.com/index.php/C_Sharp_Essentials',
        'http://msdn.microsoft.com/en-us/vstudio/hh341490',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#c-sharp',
        'http://www.amazon.com/Sams-Teach-Yourself-5-0-Hours/dp/0672336847',
        'http://www.amazon.com/Essential-Edition-Microsoft-Windows-Development/dp/0321877586',
        'http://www.amazon.com/gp/product/161729134X',
        'http://www.amazon.com/Effective-Specific-Ways-Improve-Your/dp/0321245660',
        'http://www.amazon.com/More-Effective-Specific-Ways-Improve/dp/0321485890',
		'https://www.youtube.com/watch?v=BM4CHBmAPh4&list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN',
		'https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/'
    ]},
    {'language' : 'JavaScript', "URLs" : [
		'https://www.codecademy.com/learn/introduction-to-javascript',
        'https://www.udacity.com/course/ud804',
        'https://www.khanacademy.org/computing/computer-programming',
        'http://teamtreehouse.com/features/javascript',
        'http://eloquentjavascript.net/',
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#javascript',
        'http://cs75.tv/2010/fall/',
        'https://www.khanacademy.org/computing/computer-programming'
    ]},
    {'language' : 'HTML and CSS', "URLs" : [
        'http://www.codecademy.com/skills/make-a-website',
        'http://www.codecademy.com/tracks/web',
        'https://www.udacity.com/course/ud304',
        'https://www.khanacademy.org/computing/computer-programming',
        'http://teamtreehouse.com/features/html',
		'http://teamtreehouse.com/features/css',
	
    ]},    
    {'language' : 'PHP', "URLs" : [
        'http://www.learn-php.org/',
        'http://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/',
        'http://php.net/manual/en/index.php',
        'http://www.tutorialspoint.com/php/',
        'http://www.phptherightway.com/'
    ]},
    {'language' : 'Perl', "URLs" : [
        'http://www.perl.org/books/beginning-perl/',
        'http://modernperlbooks.com/books/modern_perl_2014/',
        'http://www.perl.org/books/impatient-perl/',
        'http://qntm.org/perl',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#perl',
        'http://www.perl.org/books/library.html',
        'http://www.amazon.com/Learning-Perl-Randal-L-Schwartz/dp/1449303587',
        'http://perl.plover.com/qotw/'
    ]},
    {'language' : 'Java', "URLs" : [
        'https://www.udacity.com/course/cs046',
        'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-092-introduction-to-programming-in-java-january-iap-2010/index.htm',        
        'http://ocw.mit.edu/courses/civil-and-environmental-engineering/1-00-introduction-to-computers-and-engineering-problem-solving-spring-2012/',
        'https://see.stanford.edu/Course/CS106A',
        'https://see.stanford.edu/Course/CS106B',
        'https://see.stanford.edu/Course/CS107',
        'http://mooc.fi/courses/2013/programming-part-1/',
        'http://mooc.fi/courses/2013/programming-part-2/',
        
        'http://www.learnjavaonline.org/',
        
        'http://programmingbydoing.com/',
        'http://greenteapress.com/thinkapjava/',
        'http://www.mindview.net/Books/TIJ/',
        'http://www.mindviewinc.com/downloads/TIJ-3rd-edition4.0.zip',
        'http://www.tutorialspoint.com/java/index.htm',
        'http://chortle.ccsu.edu/java5/index.html',
        'http://docs.oracle.com/javase/tutorial/',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#java',
    ]},
    {'language' : 'Git and GitHub', "URLs" : [
        'https://www.udacity.com/course/ud775',
        'http://pcottle.github.io/learnGitBranching/',
        'https://try.github.io/levels/1/challenges/1',
        'http://www.git-tower.com/learn/ebook/command-line/introduction',
        'http://git-scm.com/documentation',
        'https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#git'
    ]},

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
