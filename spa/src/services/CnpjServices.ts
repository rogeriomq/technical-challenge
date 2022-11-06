import { api } from '../provider/api'

import { AxiosResponse } from 'axios'

import { SortType } from '../hooks/useCpf'
import { ICnpj } from '../interfaces'

export class CnpjServices {
  static list = async (filter?: string, sort?: SortType):Promise<{data:ICnpj[], status: number}> => {
    const likeQuery = filter && `like=${filter}`
    const sortQuery = sort && `sort=${sort}`
    const query = [likeQuery, sortQuery].join('&').replace('&', '')
    const path = `/cnpj?${query}`
    const { data, status } = await api.get<AxiosResponse<ICnpj[]>>(path)
    return { data: data.data, status }
  }

  static create = async (cnpj: string):Promise<{ status: number}> => {
    const { status } = await api.post<AxiosResponse>('/cnpj', {
      cnpj
    })
    return { status }
  }

  /**
   * Return status of request:
   * 200 - request ok;
   * @param param<ICnpj>
   * @returns status request or throw error.
   */
  static update = async ({ id, value }:ICnpj):Promise<{ status: number}> => {
    const { status } = await api.put<AxiosResponse>(`/cnpj/${id}`, {
      cnpj: value
    })
    return { status }
  }

  /**
   * Return status of request:
   * 200 - request ok, nothing changed;
   * @param param<ICnpj>
   * @returns status request or throw error.
   */
  static remove = async (id: number):Promise<{ status: number}> => {
    const { status } = await api.delete<AxiosResponse>(`/cnpj/${id}`)
    return { status }
  }
}
