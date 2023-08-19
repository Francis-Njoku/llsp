import * as sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);


export const sendEmail = async (recipient: string, url: string, linkText: string) => {
  const msg = {
    to: `Recipient <${recipient}>`,
    from: 'LSPR Nigeria <contact@lspr.ng>',
    subject: "Welcome to LSPR Nigeria, confirm you email!",
    html: `<html>
      <body>
      <p>Welcome to LSPR Nigeria - Click the link to <a href="${url}">${linkText}</a> now 
      </body>
      </html>`,
  };

  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent: ', {url})
    })
    .catch((error) => {
      console.error(error)
    });
}

// export const sendFeedbackEmail = async (recipient: string, subject: string, body: string, url: string, linkText: string) => {
export const sendFeedbackEmail = async (recipient: string, subject: string, body: string) => {
  const msg = {
    to: recipient,
    from: 'LSPR Nigeria <contact@lspr.ng>',
    subject,
    html: `<html>
      <body>
        <main>
          <p>
            Hi, ${recipient},<br /><br/>
            ${body}
          </p>
          <p>Regards,</p>
          <p>LSPR Nigeria.</p>
        </main>
        <footer style="display: flex; flex-direction: row; justify-content: space-evenly;">
          <a href="https://lspr.ng/privacy-policy" target="_blank">Privacy Policy</a>
          <span> | </span>
          <a href="https://lspr.ng/terms-of-use" target="_blank">Terms of Use</a>
          <span> | </span>
          <a href="mailto:contact@lspr.ng">Contact Us</a>
        </footer>
      </body>
    </html>`
  };

  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent to: ', {recipient})
    })
    .catch((error) => { 
      console.log(error.message);
    });
};
