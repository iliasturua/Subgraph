import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AxiosService {
  constructor(private httpService: HttpService) {}

  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    console.log(data);

    const response = await firstValueFrom(
      this.httpService.post<T>(url, data, config),
    );
    return response.data;
  }
}
