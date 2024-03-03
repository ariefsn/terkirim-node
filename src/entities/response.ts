export interface IResponse<T = any> {
  status: boolean
  message?: string
  data?: T
}