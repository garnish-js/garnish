import {GarnishCommand} from './garnish-command.interface';
import {GarnishOption} from '../option';

export interface CommandMetadata {
  description: string;
  commands?: GarnishCommand[] | any[];
  options?: GarnishOption[] | any[];
}
