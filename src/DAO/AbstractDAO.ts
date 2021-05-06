import api from 'src/services/api';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface GenericMethod {
  headers: any;
  request?: any;
  data: any;
  statusText: string;
  error: boolean;
  config: AxiosRequestConfig;
  status: number;
}
export class AbstractDAO {
  api: AxiosInstance;

  constructor(apiService = api) {
    this.api = apiService;
  }

  async index({ data }: any): Promise<void | GenericMethod> {}

  async create({ data }: any): Promise<void | GenericMethod> {}

  async update({ data }: any): Promise<void | GenericMethod> {}

  async find({ data }: any): Promise<void | GenericMethod> {}

  async delete({ data }: any): Promise<void | GenericMethod> {}
}
