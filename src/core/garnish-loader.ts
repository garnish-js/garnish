import 'reflect-metadata';
import {Command, CommandContainer} from './command';

export class GarnishLoader {
  public constructor(private container: CommandContainer) {
    //
  }

  public parse(command: Command, ) {
    this.parseCommand(command);
  }

  private parseCommand(command: Command, scope = []) {
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
}
