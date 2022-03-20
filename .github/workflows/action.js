import run from '@jamesives/github-pages-deploy-action'

void run({
    token: process.env['ACCESS_TOKEN'],
    branch: 'gh-pages',
    folder: 'dist',
    repositoryName: 'ezhoden/ezhoden.github.io',
    silent: true,
    workspace: 'src'
});