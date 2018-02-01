import 'reflect-metadata';
import {Command, CommandContainer} from './command';
import {GarnishCommandMetatype} from '@garnish/common';

export class GarnishLoader {
  public constructor(private container: CommandContainer) {
    //
  }

  public parse(command: Command, ) {
    this.parseCommand(command);
    this.parseCommandForDependencies();
  }

  public parseCommandForDependencies() {
    const commands = this.container.getCommands();

    commands.forEach(({metatype}, token) => {
      this.reflectRelatedCommands(metatype, token);
      this.reflectOptions(metatype, token);
      // this.reflectControllers(metatype, token);
      // this.reflectExports(metatype, token);
    });
  }

  public parseCommand(command: Command, scope = []) {
    this.storeCommand(command, scope);

    const commands = this.getReflectMetadata(command, 'commands');

    commands.map((subCommands) => {
      this.parseCommand(subCommands, [].concat(scope, command));
    });
  }

  private storeCommand(command, scope) {
    this.container.addCommand(command, scope);
  }

  private getReflectMetadata(metadataKey, metadataValue: string): any {
    return Reflect.getMetadata(metadataValue, metadataKey) || [];
  }

  private reflectRelatedCommands(metaCommand: GarnishCommandMetatype, token: string) {
    const commands = [
      ...this.getReflectMetadata(metaCommand, 'commands')
    ];

    commands.map(related => this.storeRelatedCommand(related, token));
  }

  private reflectOptions(metaCommand: GarnishCommandMetatype, token: string) {
    const options = [
      ...this.getReflectMetadata(metaCommand, 'options')
    ];

    options.map(related => this.storeOption(related, token));
  }

  private storeRelatedCommand(related, token) {
    this.container.addRelatedCommand(related, token);
  }

  private storeOption(related, token) {
    this.container.addRelatedCommand(related, token);
  }
}
