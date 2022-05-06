# A blog example using Next.js and Alinea

This is a [Next.js](https://nextjs.org/) + [Alinea](https://alinea.sh/) starter blog project. Showcasing how to use the Alinea CMS to store and update data.

The project is fully setup with [Typescript](https://www.typescriptlang.org/) and uses [Tailblocks](https://tailblocks.cc/) for layout.

## Demo

### [https://alinea-blog.vercel.app/](https://alinea-blog.vercel.app/)

## Start off with a local Alinea instance

Zero configuration is required if you want to get started with this project:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

```bash
yarn alinea serve
```

Open [http://localhost:4500](http://localhost:4500) to see the Alinea CMS and make changes to the content of your site.

## Deploy your own

Once you have access to the environment variable listed below, deploy the example using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodeurs%2Falinea-blog&env=MAIL_FROM_ADDRESS,MAIL_HOST,MAIL_PORT,MAIL_USERNAME,MAIL_PASSWORD,ALINEA_USERS,GITHUB_TOKEN,REDIS_DSN,JWT_SECRET&envDescription=Required%20to%20setup%20the%20Alinea%20CMS&envLink=https%3A%2F%2Fgithub.com%2Fcodeurs%2Falinea-blog%23environment-variables)

### Environment variables

#### Required

The following environment variables will need to be configured to have a functional Alinea CMS instance:

- Setup the SMTP mailer module: `MAIL_FROM_ADDRESS`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`. This is required to enable users to login to the Alinea backend using email authenthication. Example of a free SMTP mailer service: [https://elasticemail.com/](https://elasticemail.com/)
- Create a `ALINEA_USERS` consisting of a comma separated file with email addresses of users allowed to login to the Alinea CMS.
- Generate a [`GITHUB_TOKEN`](https://github.com/settings/tokens/new). This is required to persist changed made in the Alinea CMS to your github repo.

- Generate a `REDIS_DSN`. This is required to temporarily store draft versions in the Alinea CMS. Example of a free redis service to obtain this path: [upstash.com](https://upstash.com/).
- Create a random `JWT_SECRET` string, it can be any size or shape.

All these values are used in the [alinea.backend.ts](https://github.com/codeurs/alinea-blog/blob/master/alinea.backend.ts) file. Different backend systems are available and can easily be configured by cloning the starter project.

#### Optional

The following environment variables are optional and are not required if you are hosting on Vercel (they are automatically discovered there):

- The `APP_URL` should contain the url of your website (no trailing slash), which is used to create a valid link in the login email. For example `https://alinea-blog.vercel.app`.
- The `GITHUB_OWNER`, `GITHUB_REPO` and `GITHUB_BRANCH` (eg. `codeurs`, `alinea-block`, `master`) should contain the identification details of your github repository
