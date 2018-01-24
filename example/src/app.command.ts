import { Command } from '@garnish/common';
import { InitCommand } from './init/init.command';
import {EnvirmentCommand} from './envirment/envirment.command';

@Command({
  description: '',
  commands: [
    InitCommand,
    EnvirmentCommand
  ],
  options: [],
  providers: []
})
export class AppCommand {
  //
}
