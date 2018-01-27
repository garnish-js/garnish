import {GarnishCommandMetatype} from '@garnish/common';

export class CommandTokenFactory {
  public create(command: GarnishCommandMetatype, scope: GarnishCommandMetatype[]): string {
    this.reflectScope(command);

    const token = {
      command: this.getCommandName(command),
      scope: this.getScopeStack(scope)
    };

    return JSON.stringify(token);
  }

  private getScopeStack(scope: GarnishCommandMetatype[]) {
    const reversedScope = scope.reverse();
    const firstGlobalIndex = reversedScope.findIndex((s) => {
      return this.reflectScope(s) === 'global';
    });
    scope.reverse();

    const stack = firstGlobalIndex >= 0 ? scope.slice(scope.length - firstGlobalIndex - 1) : scope;
    return stack.map(command => command.name);
  }

  private reflectScope(command: GarnishCommandMetatype) {
    return 'global';
  }

  private getCommandName(command: GarnishCommandMetatype) {
    return command.name;
  }
}
