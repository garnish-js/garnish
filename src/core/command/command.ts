import {GarnishCommandMetatype} from '@garnish/common';

export class Command {
  constructor(private metatype: GarnishCommandMetatype, private scope: GarnishCommandMetatype[]) {

  }
}
