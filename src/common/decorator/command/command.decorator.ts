import 'reflect-metadata';
import {CommandMetadata} from '../../interface/command/command-metadata.interface';

export declare function keys<T extends object>(): Array<keyof T>;

export function Command(obj: any): ClassDecorator {
  return (target: object) => {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, obj[property], target);
      }
    }
  };
}
