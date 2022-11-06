import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IStatusServer } from '../interfaces'
import { ServerStatusService } from '../services/ServerStatusServices'


export const useStatusServer = () => {
  const [data, setData] = useState<IStatusServer>()
  const [watchMode, setWatchMode] = useState(false)

  const getStatusServer = useCallback(async () => {
    try {
      const result = await ServerStatusService.requestStatus()
      setData(result.data)
    } catch (error) {
      toast.error('Could not return server status', { closeOnClick: true, autoClose: 4000 })
    }
  }, [])

  useEffect(() => {
    let interval: number
    if (watchMode) {
      interval = setInterval(async() => {
        await getStatusServer()
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [getStatusServer, watchMode])

  return {
    data,
    getStatusServer,
    watchMode,
    setWatchMode
  }
}
