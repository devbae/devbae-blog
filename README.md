# [Devbae](https://devbae.tech/) - Technology Made Easy!

[Devbae](https://devbae.tech/) is a tech blogging website to share knowledge about all the latest technology, tech stacks and frameworks. This blog is developed using [Jekyll](https://jekyllrb.com/).

## Setting up the app

1. Install ruby using [rvm](https://github.com/rvm/ubuntu_rvm) in your system. Installing the stable version is suggested.

2. After successfully installing ruby, install Jekyll and Bundler gem:

    ```bash
    gem install jekyll bundler
    ```
    If you're on macOS, you may want to add `-n /usr/local/bin` to specify executables' directory. See [this](https://jekyllrb.com/docs/troubleshooting/#jekyll--macos) for explanation.

3. Fork this repo and clone your forked repo, by running the `clone` command:

    ```bash
    git clone https://github.com/your-username/devbae-blog.git
    ```

4. Open the directory, and install the dependencies using bundler:

    ```bash
    bundle install
    ```

5. Update the bundler:

    ```bash
    bundle update --bundler
    ```

6. Run the jekyll app:

    ```bash
    bundle exec jekyll serve
    ```

7. The app is now running at <https://localhost:4000>.

## Submitting a Blog [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](.github/CONTRIBUTING.md).

You can read about how to submit a blog here on our [contribution page](.github/CONTRIBUTING.md). Or you can directly mail your articles directly to us at <contact@devbae.tech>.

## Bugs, Issues and Corrections [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/devbae/devbae-blog/issues)

Found any bug in the app? Or any suggestions or corrections in our blogs? [Open a new issue](https://github.com/devbae/devbae-blog/issues) here on GitHub!

## About

You can know all about us [here](https://devbae.tech/about).\
Devbae is currently maintained by our **[members](https://github.com/orgs/devbae/people)**.

## Copyright and License

Copyright 2020 DevBae. Code released under the [MIT](https://github.com/devbae/devbae-blog/blob/gh-pages/LICENSE) license.
