import {GarnishCommandMetatype} from '@garnish/common';
import {CommandContainer} from './command-container';

export class Command {
  private _relatedCommand = new Set<Command>();
  private _options = new Set<any>();

  constructor(
    private _metatype: GarnishCommandMetatype,
    private _scope: GarnishCommandMetatype[],
    private _container: CommandContainer
  ) {}

  get metatype(): GarnishCommandMetatype {
    return this._metatype;
  }

  get scope(): GarnishCommandMetatype[] {
    return this._scope;
  }

  public addRelatedCommand(related: Command) {
    this._relatedCommand.add(related);
  }

  public addOption(option: any) {
    this._options.add(option);
  }
}
