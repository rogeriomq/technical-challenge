import {
  ctxHelpers,
  HttpStatus,
  PostgresError,
  RouterContext,
} from '../../../../deps.ts';
import { ModelError } from '../../../exceptions/errors.ts';
import { Cnpj } from '../../../models/models.ts';
import { CnpjRepository } from '../../repositories/impl/CnpjRepository.ts';

export class CnpjController {
  #cnpjRepository: CnpjRepository;

  constructor(repo: CnpjRepository) {
    this.#cnpjRepository = repo;
  }

  list = async (context: RouterContext<string>) => {
    try {
      const { like } = ctxHelpers.getQuery(context);
      console.log({ like });
      const result = await this.#cnpjRepository.findAll({ like });
      context.response.status = HttpStatus.OK;
      context.response.body = {
        data: result,
      };
    } catch (error) {
      context.response.status = HttpStatus.InternalServerError;
      context.response.body = {
        error: {
          message: 'Unable to retrieve records of the cnpj.',
        },
      };

      if (error instanceof PostgresError) {
        context.response.status = HttpStatus.InternalServerError;
        return context;
      }

      console.log(error);
    }
  };

  create = async (context: RouterContext<string>) => {
    const bodyLimit = 40;
    try {
      const { cnpj } = await context.request
        .body({ limit: bodyLimit, type: 'json' })
        .value;

      await this.#cnpjRepository.create(new Cnpj({ value: cnpj }));
      context.response.status = HttpStatus.Created;
    } catch (error) {
      context.response.status = HttpStatus.InternalServerError;

      if (error instanceof ModelError) {
        context.response.status = HttpStatus.BadRequest;
        context.response.body = {
          error: {
            message: error.message,
          },
        };
        return context;
      }

      if (error instanceof RangeError) {
        context.response.body = {
          error: {
            message: `${error.message.replace('.', ' bytes.')}`,
          },
        };
        return context;
      }

      if (error instanceof PostgresError) {
        const isDuplicateKey = error.message.includes('cnpj_value_unique');
        context.response.body = {
          error: {
            message: isDuplicateKey
              ? 'This CNPJ already exists'
              : 'This CNPJ could not be created.',
          },
        };
        return context;
      }

      console.log(error);
    }
  };

  update = async (context: RouterContext<string>) => {
    const bodyLimit = 60;
    try {
      const id = parseInt(context.params['id'], 10);
      const { cnpj } = await context.request
        .body({ limit: bodyLimit, type: 'json' })
        .value;

      const result = await this.#cnpjRepository.update(
        id,
        new Cnpj({ value: cnpj }),
      );
      context.response.status = result > 0
        ? HttpStatus.OK
        : HttpStatus.NotFound;
    } catch (error) {
      console.log(error);
      if (error instanceof ModelError) {
        context.response.status = HttpStatus.BadRequest;
        context.response.body = {
          error: {
            message: error.message,
          },
        };
        return context;
      }

      if (error instanceof RangeError) {
        context.response.body = {
          error: {
            message: `${error.message.replace('.', ' bytes.')}`,
          },
        };
        return context;
      }

      if (error instanceof PostgresError) {
        const isDuplicateKey = error.message.includes('cnpj_value_unique');
        context.response.body = {
          error: {
            message: isDuplicateKey
              ? 'This cnpj already exists'
              : 'This cnpj could not be updated.',
          },
        };
        return context;
      }

      console.log(error);
    }
  };

  delete = async (context: RouterContext<string>) => {
    try {
      const id = parseInt(context.params['id'], 10);
      if (isNaN(id)) {
        context.response.status = HttpStatus.NotFound;
        return;
      }

      const result = await this.#cnpjRepository.delete(id);
      context.response.status = result > 0
        ? HttpStatus.OK
        : HttpStatus.NotFound;
    } catch (error) {
      console.log(error);
      if (error instanceof ModelError) {
        context.response.status = HttpStatus.BadRequest;
        context.response.body = {
          error: {
            message: error.message,
          },
        };
        return;
      }

      if (error instanceof RangeError) {
        context.response.body = {
          error: {
            message: `${error.message.replace('.', ' bytes.')}`,
          },
        };
        return;
      }

      if (error instanceof PostgresError) {
        const isDuplicateKey = error.message.includes('cnpj_value_unique');
        context.response.body = {
          error: {
            message: isDuplicateKey
              ? 'This CNPJ already exists'
              : 'This CNPJ could not be updated.',
          },
        };
        return;
      }
    }
  };
}
