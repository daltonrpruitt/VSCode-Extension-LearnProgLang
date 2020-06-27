// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// List of urls to use
const learningUrls = {
	'C' : [
		'https://www.learn-c.org/',
		'https://www.edx.org/course/cs50s-introduction-to-computer-science',
		'https://www.programiz.com/c-programming'
		],
	'Python' : [
		'http://www.pythontutor.com/visualize.html',
		'https://www.edx.org/course/introduction-to-computer-science-and-programming-7',
		]

};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Learn Programming Languages" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('learnprogramminglanguages.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from VSCodeExtensionTest!');
	});

	// Learn a new language
	let learn = vscode.commands.registerCommand('learnprogramminglanguages.learn', () =>{

		//Initial testing
		vscode.window.showInformationMessage('You want to learn a programming language?');

	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(learn);

}

// this method is called when your extension is deactivated
export function deactivate() {}
