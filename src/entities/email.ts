import { IMap } from "./common"

export interface IEmailFrom {
  username: string
  name?: string
}

export interface IEmailAccount {
  email: string
  name?: string
}

export interface IEmailAttachment {
  filename: string
  content: string
  type?: string
  disposition?: string
  contentId?: string
}

export interface IEmailPayload {
  from: IEmailFrom
  to: IEmailAccount[]
  cc?: IEmailAccount[]
  bcc?: IEmailAccount[]
  subject: string
  text?: string
  body?: string
  category?: string
  headers?: IMap
  variables?: IMap
  tags?: IMap
  attachments?: IEmailAttachment[]
}