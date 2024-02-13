import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';

export function validationMiddleware<T extends object>(dtoClass: new () => T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dtoInstance = new dtoClass();
      Object.assign(dtoInstance, req.body);

      const errors = await validate(dtoInstance);
      if (errors.length > 0) {
        const errorMessages = errors.map((error) => {
          let messages = []
          for(const item in error.constraints) {
              messages.push(error.constraints[item])
          }
          return messages
        });
        return res.status(400).json({messages: errorMessages.flat() });
      }

      // Attach the validated data to the request object for later use
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
}
