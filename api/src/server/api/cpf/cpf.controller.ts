import { Context, HttpStatus } from '../../../../deps.ts';

export default class CpfController {
  static list = (context: Context) => {
    context.response.status = HttpStatus.OK;
    context.response.type = 'application/json';
    context.response.body = [];
  };

  static create = (context: Context) => {
    context.response.body = [];
  };

  static update = (context: Context) => {
    context.response.body = [];
  };

  static remove = (context: Context) => {
    context.response.body = [];
  };
}
