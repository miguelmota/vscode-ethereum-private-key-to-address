import * as vscode from 'vscode'
import * as privateKeyToAddress from 'ethereum-private-key-to-address'

export function activate (context: vscode.ExtensionContext) {
  vscode.languages.registerHoverProvider('*', {
    provideHover (document, position, token) {
      const wordRange = document.getWordRangeAtPosition(position)
      const highlight = document.getText(wordRange)
      const address = privateKeyToAddress(highlight)
      if (address) {
        return new vscode.Hover(address)
      }
      return null
    }
  })
}

export function deactivate () {}
