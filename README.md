# binesheb.github.io

Personal portfolio and project landing site for Binesh.

## Project purpose

This repository contains the source for the public portfolio website, including the static HTML entry point and supporting design assets. The site is intentionally lightweight and does not require a runtime package installation for deployment.

## Architecture

- `index.html` — primary site entry point and page content.
- `assets/` — images, styles, scripts, and other site assets.
- `documentation/` — supporting project documentation.
- `psd/` — editable design sources where retained.

## Local preview

Because this is a static site, any simple HTTP server can be used for preview. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Updating the site

### Automatic deployment

For a static GitHub Pages site, the repository itself is the source of truth: publishing should follow commits to the configured Pages branch. No device-side automatic updater is needed because visitors receive the current published site from the deployment host.

Before enabling or changing an automated deployment workflow, verify the configured Pages source in the repository settings so that the deployment branch and artifact behavior match the existing site.

### Manual update

Use a fast-forward-only pull to avoid accidentally overwriting local work:

```bash
git fetch --tags --prune
git pull --ff-only origin main
```

To preview or reproduce a known version, check out a specific tag or commit:

```bash
git checkout <tag-or-commit>
```

## Rollback

If a published change needs to be reverted, restore the last known-good commit and publish that revision through the normal deployment path. Avoid force-pushing the default branch unless repository history has been explicitly reviewed.

## Versioning and releases

The repository uses Semantic Versioning for meaningful published snapshots. Documentation-only or small maintenance changes use a patch increment; user-visible site features use a minor increment; incompatible structural changes use a major increment.

See [CHANGELOG.md](CHANGELOG.md) for release notes.

## Next maintenance priorities

- Verify the active GitHub Pages deployment configuration and document it in-repository when stable.
- Add lightweight HTML/link validation before deployment.
- Keep large source archives out of the deployment path where possible to reduce repository and publishing overhead.
