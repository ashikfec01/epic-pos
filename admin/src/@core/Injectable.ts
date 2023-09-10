export function Injectable<T extends { new (...args: any[]): {} }>(constructor: T) {
  const instances: { [key: string]: any } = {};

  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      const className = constructor.name;

      if (!instances[className]) {
        instances[className] = this;
      }

      return instances[className];
    }
  };
}


// export default Injectable;