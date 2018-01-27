import {GarnishCommandMetatype} from '@garnish/common';
import {CommandContainer} from './command-container';

export class Command {
  constructor(
    private metatype: GarnishCommandMetatype,
    private scope: GarnishCommandMetatype[],
    private container: CommandContainer
  ) {

  }
}
