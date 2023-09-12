import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class Loggernterceptor implements NestInterceptor {

  private logger(key: string, vaule: unknown) {
    const log = JSON.stringify({
      [`[${key}]`]: vaule
    },
      null,
      4,
    );
    console.log('\n', log, '\n');
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(context.getArgByIndex(1).req.body);
    // this.logger("context", context)
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}