/**
 * @file vue-format 入口文件
 */
const vscode = require('vscode')
const formatInit = require('./src')

function runFormatter(document, range, options) {
  let acEditor = vscode.window.activeTextEditor

  if (acEditor && acEditor.document.languageId === 'vue') {
    formatInit.init()
  } else {
    vscode.window.showInformationMessage('It‘s not a .vue file')
  }
  // vscode.window.showInformationMessage('vue format now');
}

function activate(context) {
  // 注册 Formatter 命令
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider('vue', {
      provideDocumentFormattingEdits: (document, options, token) => {
        return runFormatter(document, null, options)
      },
    })
  )
}

// function activate(context) {
//     // 注册命令，该命令和package.json中命令一致
//     let disposable = vscode.commands.registerCommand('extension.vueFormat', function () {
//         let acEditor = vscode.window.activeTextEditor;

//         if (acEditor && acEditor.document.languageId === 'vue') {
//             formatInit.init();
//         } else {
//             vscode.window.showInformationMessage('It‘s not a .vue file');
//         }
//         // vscode.window.showInformationMessage('vue format now');
//     });

//     context.subscriptions.push(disposable);
// }
exports.activate = activate

function deactivate() {
  vscode.window.showInformationMessage('deactivated')
}

exports.deactivate = deactivate
