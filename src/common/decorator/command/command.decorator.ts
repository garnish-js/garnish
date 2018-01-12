import 'reflect-metadata';

export function Command(obj: any): ClassDecorator {
  return (target: object) => {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, obj[property], target);
      }
    }
  };
}
