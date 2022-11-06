/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_STATUS_MONITOR_TIMEOUT: string
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
