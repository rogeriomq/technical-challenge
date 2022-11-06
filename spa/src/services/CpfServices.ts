import { api } from '../provider/api'

import { AxiosResponse } from 'axios'

import { SortType } from '../hooks/useCpf'
import { ICpf } from '../interfaces'

export class CpfServices {
  static list = async (filter?: string, sort?: SortType):Promise<{data:ICpf[], status: number}> => {
    const likeQuery = filter && `like=${filter}`
    const sortQuery = sort && `sort=${sort}`
    const query = [likeQuery, sortQuery].join('&').replace('&', '')
    const path = `/cpf?${query}`
    const { data, status } = await api.get<AxiosResponse<ICpf[]>>(path)
    return { data: data.data, status }
  }

  static create = async (cpf: string):Promise<{ status: number}> => {
    const { status } = await api.post<AxiosResponse>('/cpf', {
      cpf
    })
    return { status }
  }

  /**
   * Return status of request:
   * 200 - request ok;
   * @param param<ICpf>
   * @returns status request or throw error.
   */
  static update = async ({ id, value }:ICpf):Promise<{ status: number}> => {
    const { status } = await api.put<AxiosResponse>(`/cpf/${id}`, {
      cpf: value
    })
    return { status }
  }

  /**
   * Return status of request:
   * 200 - request ok, nothing changed;
   * @param param<ICpf>
   * @returns status request or throw error.
   */
  static remove = async (id: number):Promise<{ status: number}> => {
    const { status } = await api.delete<AxiosResponse>(`/cpf/${id}`)
    return { status }
  }
}
