import { api } from '../provider/api'

import { AxiosResponse } from 'axios'
import { IStatusServer } from '../interfaces'

export class ServerStatusService {
  static requestStatus = async ():Promise<{data: IStatusServer, status: number}> => {
    const { data, status } = await api.get<AxiosResponse<IStatusServer>>('/status')
    return { data: data.data, status }
  }
}
