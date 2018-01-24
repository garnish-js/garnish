import 'reflect-metadata';
import {CommandMetadata} from '../../interface/command';

export function Command(obj: CommandMetadata): ClassDecorator {
  return (target: object) => {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, obj[property], target);
      }
    }
  };
}
