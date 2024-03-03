# Terkirim

Official Node SDK for Terkirim. Visit [Terkirim](https://terkirim.cloud) for more.

## Support

1. Email
2. Whatsapp

## How to

1. Install

    ```shell
    npm install terkirim
    // or
    yarn add terkirim
    ```

2. Import

    ```typescript
    import { Terkirim } from 'terkirim'
    ```

3. Use it

    ```typescript
    const tk = new Terkirim("YOUR_API_KEY")

    tk.email({
      from: {
        username: "REGISTERED_ACCOUNT_FROM_TERKIRIM",
        name: "Alias"
      },
      to: [{
        email: "someone@mail.com",
        name: "Alias"
      }],
      subject: "Hello World",
      body: "<mjml>\n\t<mj-body>\n\t\t<mj-section>\n\t\t\t<mj-column>\n\t\t\t\t<mj-divider></mj-divider>\n\t\t\t\t<mj-text font-family=\"helvetica\" font-size=\"20px\" align=\"center\">Hello, <mj-text>{{ firstName }} {{ lastName }}</mj-text></mj-text>\n\t\t\t\t<mj-text align=\"center\">Thank you for joining Terkirim</mj-text>\n\t\t\t\t<mj-divider></mj-divider>\n\t\t\t</mj-column>\n\t\t</mj-section>\n\t</mj-body>\n</mjml>\n",
      variables: {
        "firstName": "Captain",
        "lastName": "Tsubasa",
      },
      category: "Terkirim"
    }).then(res => {
      console.log('Email', res)
    })

    tk.whatsapp({
      from: "REGISTERED_WHATSAPP_NUMBER_FROM_TERKIRIM",
      to: "PHONE_NUMBER_TO_SEND_WHATSAPP_WITH_COUNTRY_CODE",
      body: "Hello World"
    }).then(res => {
      console.log('Whatsapp', res)
    })
    ```
