import {CommandsContainer} from './commands-container';
import {GarnishLoader} from '../garnish-loader';
import {CommandInvalidException} from './command-invalide.exception';
import {GarnishCommandMetatype} from '@garnish/common';
import {CommandTokenFactory} from './command-token-factory';
import {Command} from './command';

export class CommandContainer {
  private globalCommands = new Set<Command>();
  private commands: CommandsContainer = new CommandsContainer();
  private loader: GarnishLoader;
  private tokenFactory: CommandTokenFactory = new CommandTokenFactory();

  public addCommand(metaCommand: GarnishCommandMetatype, scope: GarnishCommandMetatype[]) {
    if (!metaCommand) {
      throw new CommandInvalidException(scope);
    }

    const token = this.tokenFactory.create(metaCommand, scope);
    if (this.commands.has(token)) {
      return;
    }

    const command = new Command(metaCommand, scope, this);
    this.commands.set(token, command);
  }

  public getCommands() {
    return this.commands;
  }

  public addRelatedCommand(relatedCommand: GarnishCommandMetatype, token: string) {
    if (!this.commands.has(token)) {
      return;
    }

    const command = this.commands.get(token);
    console.log(command);
    // const parent = command.metatype;
    //
    // const { type, dynamicMetadata } = this.extractMetadata(relatedModule);
    // const relatedModuleToken = this.moduleTokenFactory.create(
    //   type,
    //   [].concat(module.scope, parent),
    //   dynamicMetadata,
    // );
    // const related = this.modules.get(relatedModuleToken);
    // module.addRelatedModule(related);
  }
}
