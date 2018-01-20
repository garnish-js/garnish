import {GarnishCommand} from './garnish-command.interface';

export interface CommandMetadata {
  description: string;
  commands?: GarnishCommand[] | any[];
}
