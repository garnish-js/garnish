import {Command} from '@garnish/common';
import {CreateCommandCommand} from './command/create-command.command';

@Command({
  description: '',
  commands: [
    CreateCommandCommand
  ],
})
export class GenerateCommand {
  run() {
    //
  }
}
