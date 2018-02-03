export interface GarnishCommand {
  run(...args: any[]): Promise<any> | any;
}
