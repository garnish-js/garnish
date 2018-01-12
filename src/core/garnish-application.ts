import {CommandContainer} from './command';
import {Garnish} from './garnish';
import {IGanish} from '@garnish/common';
import {GarnishLoader} from './garnish-loader';

export class GarnishApplicationStatic {
  private container: CommandContainer = new CommandContainer();
  private loader: GarnishLoader = new GarnishLoader(this.container);

  public create(command): Promise<IGanish> {
    this.init(command);
    return this.createApplication();
  }

  private init(command) {
    this.loader.parse(command);
  }

  private createApplication(): Promise<IGanish> {
    return new Promise((resolve, reject) => {
      try {
        resolve(new Garnish(this.container));
      } catch (e) {
        reject(e);
      }
    });
  }
}

export const GarnishApplication = new GarnishApplicationStatic();
