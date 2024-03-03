export const DEFAULT_URL = 'https://terkirim.cloud/api'

export enum Service {
  Email = 'email',
  Whatsapp = 'whatsapp'
}

export const SERVICE_URL_PATHS: Record<Service, string> = {
  [Service.Email]: '/email',
  [Service.Whatsapp]: '/whatsapp'
}
