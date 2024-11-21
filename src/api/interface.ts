import type { AxiosHeaders } from 'axios'

export interface RequestProps {
  path: string
  method: 'get' | 'post' | 'put' | 'delete'
  body?: object
  headers?: AxiosHeaders
}
