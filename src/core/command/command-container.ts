import {CommandsContainer} from './commands-container';
import {GarnishLoader} from '../garnish-loader';

export class CommandContainer {
  private commands: CommandsContainer;
  private loader: GarnishLoader;

  public addCommand(command, scope) {
    console.log(command);
    console.log(scope);
  }

  public getCommands() {
    return this.commands;
  }
}
