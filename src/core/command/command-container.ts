import {CommandsContainer} from './commands-container';
import {GarnishLoader} from '../garnish-loader';
import {CommandInvalidException} from './command-invalide.exception';
import {GarnishCommandMetatype} from '@garnish/common';

export class CommandContainer {
  private commands: CommandsContainer;
  private loader: GarnishLoader;

  public addCommand(command: GarnishCommandMetatype, scope: GarnishCommandMetatype[]) {
    if (!command) {
      throw new CommandInvalidException(scope);
    }
  }

  public getCommands() {
    return this.commands;
  }
}
