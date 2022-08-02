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
Open [http://localhost:4500](http://localhost:4500) to see the Alinea CMS and make changes to the content of your site.


## Deploy your own

Deploying this project with Vercel is as easy as using the following one-click-deploy button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodeurs%2Falinea-blog&project-name=alinea-example-blog&repo-name=alinea-example-blog)

After your project is setup, navigate to `www.your-domain.vercel.app/admin.html`. The default backend deploy is the
[Alinea Cloud](https://www.alinea.cloud) backend.

- Login to the Cloud platform and create a new project, which offer you an API key
- Add the API key as an environment variable in Vercel
- Create a new deployment
- You are ready to use the Alinea CMS in production

#### Optional

The following environment variable is optional and not required if you are hosting on Vercel:

- The `APP_URL` should contain the url of your website (no trailing slash), which is used to create a valid link in the login email. For example `https://alinea-blog.vercel.app`.
