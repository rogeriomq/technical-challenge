import {
  ctxHelpers,
  HttpStatus,
  PostgresError,
  RouterContext,
} from '../../../../deps.ts';
import { ModelError } from '../../../exceptions/errors.ts';
import { Cpf } from '../../../models/models.ts';
import { CpfRepository } from '../../repositories/impl/CpfRepository.ts';

export class CpfController {
  #cpfRepository: CpfRepository;

  constructor(repo: CpfRepository) {
    this.#cpfRepository = repo;
  }

  list = async (context: RouterContext<string>) => {
    try {
      const { like } = ctxHelpers.getQuery(context);
      console.log({ like });
      const result = await this.#cpfRepository.findAll({ like });
      context.response.status = HttpStatus.OK;
      context.response.body = {
        data: result,
      };
    } catch (error) {
      context.response.status = HttpStatus.InternalServerError;
      context.response.body = {
        error: {
          message: 'Unable to retrieve records.',
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
      const { cpf } = await context.request
        .body({ limit: bodyLimit, type: 'json' })
        .value;

      await this.#cpfRepository.create(new Cpf({ value: cpf }));
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
        const isDuplicateKey = error.message.includes('cpf_value_unique');
        context.response.body = {
          error: {
            message: isDuplicateKey
              ? 'This CPF already exists'
              : 'This CPF could not be created.',
          },
        };
        return context;
      }

      console.log(error);
    }
  };

  update = async (context: RouterContext<string>) => {
    const bodyLimit = 40;
    try {
      const id = parseInt(context.params['id'], 10);
      const { cpf } = await context.request
        .body({ limit: bodyLimit, type: 'json' })
        .value;

      await this.#cpfRepository.update(id, new Cpf({ value: cpf }));
      context.response.status = HttpStatus.OK;
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
        const isDuplicateKey = error.message.includes('cpf_value_unique');
        context.response.body = {
          error: {
            message: isDuplicateKey
              ? 'This CPF already exists'
              : 'This CPF could not be updated.',
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

      const result = await this.#cpfRepository.delete(id);
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
        const isDuplicateKey = error.message.includes('cpf_value_unique');
        context.response.body = {
          error: {
            message: isDuplicateKey
              ? 'This CPF already exists'
              : 'This CPF could not be updated.',
          },
        };
        return;
      }
    }
  };
}
