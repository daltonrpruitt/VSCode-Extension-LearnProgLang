// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Context } from 'mocha';
import 'Math';
import { getVSCodeDownloadUrl } from 'vscode-test/out/util';
import { URI } from 'vscode-uri';
import { learningUrls, searchLanguages } from './learningResourcesGenerator';


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
		let message = 'You want to learn a programming language?\n';
		const items: string[] = learningUrls.map(element => element.language);
		//let qpopts = vscode.
		//  https://code.visualstudio.com/api/references/vscode-api
		const lang = vscode.window.showQuickPick(items, 
			{placeHolder:"What language do you want to learn about?"} );
		lang.then( (value) => {
			if(value) {
				vscode.window.showInformationMessage(value + " was selected!");
				let languageObj = searchLanguages(value, learningUrls);
				if(!languageObj){vscode.window.showErrorMessage("Could not find that language...");} // this should not happen...
				else {
					let url = languageObj.URLs[Math.floor(Math.random() * languageObj?.URLs.length)];
					vscode.window.showInformationMessage("Now going to " + url);
					let uri = URI.parse(url);
					vscode.env.openExternal(uri);
				}
			}
		});
		

	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(learn);

}

// this method is called when your extension is deactivated
export function deactivate() {}
