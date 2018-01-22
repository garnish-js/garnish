import 'reflect-metadata';
import {CommandMetadata} from '../../interface/command/command-metadata.interface';

export function validateKey(keys: any[]) {
  //
}

export function Command(obj: any): ClassDecorator {
  return (target: object) => {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, obj[property], target);
      }
    }
  };
}
