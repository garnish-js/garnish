import {Command} from '@garnish/common';
import {InitCommand} from './init/init.command';
import {EnvirmentCommand} from './envirment/envirment.command';
import {GenerateCommand} from './generate/generate.command';

@Command({
  description: '',
  commands: [
    InitCommand,
    EnvirmentCommand,
    GenerateCommand
  ],
  options: [],
  providers: []
})
export class AppCommand {
  //
}
