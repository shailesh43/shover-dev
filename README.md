# [Shover](https://shover-ui.vercel.app)

> Under development :>

### Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
# or
pnpm install
pnpm dev
```

Build the registry files:

```bash
npx shadcn build
```

This regenerates the registry JSON files under `public/r/` from `registry.json`.

To verify a component locally:

```bash
npx shadcn view http://localhost:3000/r/gradient-button.json
```

If the component is displayed correctly, the registry is ready to be deployed.

### Contributing

1. Add or update components under `registry/default/`.
2. Update `registry.json` with the component metadata.
3. Run the registry build:

```bash
npx shadcn build
```

4. Test the generated registry item locally:

```bash
npx shadcn view http://localhost:3000/r/<component>.json
```

5. Verify the component can be installed from a test project:

```bash
npx shadcn registry add @shover=https://shover.vercel.app/r/{name}.json
npx shadcn add @shover/<component>
```

6. Open a pull request with the changes.

### TODOS

* [x] Host DemoSite on Vercel. Add Fumadocs support to the site.
* [ ] Publish your site-domain with shacn/ui registry. (Make PR [here](https://github.com/shadcn-ui/ui)) with their guidelined dir structure.
* [ ] Test the `add` command from other projects.
* [ ] Build atleast three meaningful & tasteful components.
* [ ] Responsive & Modern Landing Page.
* [ ] Implement FumaDocs `/docs` utility.
