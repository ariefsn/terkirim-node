import { DEFAULT_URL, SERVICE_URL_PATHS, Service } from "./constants"
import { IEmailAccount, IEmailAttachment, IEmailFrom, IEmailPayload, IMap, IResponse, IWhatsappPayload } from "./entities"

export class Terkirim {
  private _baseUrl: string = ''
  private _apiKey: string

  constructor(apiKey: string) {
    this._apiKey = apiKey
  }

  setBaseUrl(baseUrl: string) {
    this._baseUrl = baseUrl
  }

  private _getBaseUrl() {
    return this._baseUrl || DEFAULT_URL
  }

  private _send(service: Service, payload: IMap) {
    payload["apiKey"] = this._apiKey

    return fetch(this._getBaseUrl() + SERVICE_URL_PATHS[service], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  }

  async email<T = any>(payload: IEmailPayload): Promise<IResponse<T>> {
    const res = await this._send(Service.Email, payload)
    return await res.json()
  }

  async whatsapp<T = any>(payload: IWhatsappPayload): Promise<IResponse<T>> {
    const { body, from, to } = payload
    const res = await this._send(Service.Whatsapp, {
      accountName: from,
      to,
      body
    })
    return await res.json()
  }
}

export {
  IEmailAccount, IEmailAttachment, IEmailFrom, IEmailPayload, IMap, IResponse, IWhatsappPayload
}
