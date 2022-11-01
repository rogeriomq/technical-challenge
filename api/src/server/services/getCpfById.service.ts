import Service from './service.ts';

export default class getByCpf implements Service<string, string> {
  run(input: string): string {
    return '00591266121';
  }
}
