import {RuntimeException} from '@garnish/common';

export function invalidCommandMessage(scope: string) {
  return `can't create the command instance. Scope [${scope}]`;
}

export class CommandInvalidException extends RuntimeException {
  constructor(trace: any[]) {
    const scope = (trace || []).map(module => module.name).join(' -> ');
    super(invalidCommandMessage(scope));
  }
}
