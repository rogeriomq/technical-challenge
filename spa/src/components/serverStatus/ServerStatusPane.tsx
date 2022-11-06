import { Switch } from '@headlessui/react'
import { useCallback, useEffect } from 'react'
import { useStatusServer } from '../../hooks/useStatusServer'

export function ServerStatusPane() {
  const { data, getStatusServer, watchMode, setWatchMode } = useStatusServer()

  const formatInHours = useCallback((uptime: number|undefined): string => {
    if (!uptime) return '0:00:00'

    return new Date(uptime).toISOString().slice(11, 19)
  }, [])

  useEffect(() => {
    getStatusServer()
  }, [getStatusServer])

  return (
    <div className="flex flex-col space-y-3 max-w-sm">
      <div>
      <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">Enable monitoring:</Switch.Label>
        <Switch
          checked={watchMode}
          onChange={setWatchMode}
          className={`${
            watchMode ? 'bg-secondary' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2`}
        >
          <span
            className={`${
              watchMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
      </div>
      <div className="w-full flex items-center space-x-5 p-2 rounded-lg bg-slate-200" >
        <span className="text-primary font-bold">Uptime:</span>
        <span>{formatInHours(data?.uptime)}</span>
      </div>
      <div className="w-full flex items-center space-x-5 p-2 rounded-lg bg-slate-200" >
        <span className="text-primary font-bold">Total Requests:</span>
        <span>{data?.totalRequests}</span>
      </div>
    </div>
  )
}
