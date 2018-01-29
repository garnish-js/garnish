import {GarnishCommandMetatype} from '@garnish/common';
import {CommandContainer} from './command-container';

export class Command {
  constructor(
    private _metatype: GarnishCommandMetatype,
    private _scope: GarnishCommandMetatype[],
    private _container: CommandContainer
  ) {}

  get metatype(): GarnishCommandMetatype {
    return this._metatype;
  }
}
