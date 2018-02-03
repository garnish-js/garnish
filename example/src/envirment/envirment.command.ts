import {Command} from '@garnish/common';
import {TestOption} from './test.option';

@Command({
  description: '',
  options: [
    TestOption
  ]
})
export class EnvirmentCommand {
  run() {
    //
  }
}
