# Getting Started

- View the [README](../README.md) to get your jekyll development environment up and running.
- Learn how to [submit a blog](#submitting-a-pull-request).
- Read how to [rebase/merge upstream branches](#configuring-remotes).
- Understand our [commit message conventions](#how-to-commit).
- [Find an issue to work on](https://github.com/devbae/devbae-blog/issues) and start smashing!
- Follow our [code of conduct](CODE_OF_CONDUCT.md).

## Contributing Guidelines [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/devbae/devbae-blog/issues)

When contributing to this repository, please first discuss the change you wish to make via an issue.

Remember that this is an inclusive community, commited to creating a safe, positive environment. See the whole [Code of Conduct](CODE_OF_CONDUCT.md) and please follow it in all your interactions with the project.

## Submitting or Requesting an Issue/Enhancement

### Best Practices for reporting or requesting for Issues/Enhancements

- Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.
- Follow the Issue Template while creating the issue.
- Include Screenshots if any (specially for UI related issues).
- For UI enhancements or workflows, include mockups to get a clear idea.

### Best Practices for getting assigned to work on an Issue/Enhancement

- If you would like to work on an issue, inform in the issue ticket by commenting on it.
- Please be sure that you are able to reproduce the issue, before working on it. If not, please ask for clarification by commenting or asking the issue creator.

Note: Please do not work on an issue which is already being worked on by another contributor. We don't encourage creating multiple pull requests for the same issue. Also, please allow the assigned person at least 2 days to work on the issue (The time might vary depending on the difficulty). If there is no progress after the deadline, please comment on the issue asking the contributor whether he/she is still working on it. If there is no reply, then feel free to work on the issue.

## Submit an article or blog via Pull Request

### Best Practices to send Pull Requests

- Fork the [project](https://github.com/devbae/devbae-blog) on GitHub

- Clone the project locally into your system.

```bash
git clone https://github.com/your-username/devbae-blog.git
```

- Make sure you are in the `master` branch.

```bash
git checkout master
```

- Create a new branch with a meaningful name before adding and commiting your changes.

```bash
git checkout -b branch-name
```

- Create a new file for your article/blog in the `_posts` folder. The format of your file should be like `yyyy-mm-dd-title-of-article.md`, following this naming convention is very important as jekyll would not be able to read your post otherwise.

- In your article/blog file, add the following jekyll-liquid header at the beginning of your file, which is required, without it jekyll would not be able to read your post.

```bash
---
layout: post
author: "<Your Name>"
author_url: <Your github profile url>
title: "<Your article title>"
subtitle: "<Your article subtitle (optional)>"
bg_url: "<A relevant BG image url>"
tags: [home]
home_title: "<Simplified Title for homepage>"
home_subtitle: "<Simplified subtitle for hompage>"
---
```

- In your article, if you're having any image, use the following image code to add it:

```bash
![image alt ><](/img/imageName)
```

- Add the files you changed or added. (avoid using `git add .`)

```bash
git add file-name
```

- Follow the style conventions for a [meaningful commit message](COMMIT_MESSAGE.md).

```bash
git commit
```

- If you forgot to add some changes, you can edit your previous commit message.

```bash
git commit --amend
```

- Squash multiple commits to a single commit. (example: squash last two commits done on this branch into one). Or you can learn about squashing [here](https://devbae.tech/2020/05/07/git-it-p3.html#squashing).

```bash
git rebase --interactive HEAD~2
```

- Push this branch to your remote repository on GitHub.

```bash
git push origin branch-name
```

- If any of the squashed commits have already been pushed to your remote repository, you need to do a force push.

```bash
git push origin remote-branch-name --force
```

- Follow the Pull request template and submit a pull request with a motive for your change and the method you used to achieve it to be merged with the `master` branch.
- If you can, please submit the pull request with the fix or improvements including tests.
- During review, if you are requested to make changes, rebase your branch and squash the multiple commits into one. Once you push these changes the pull request will edit automatically.

## Configuring remotes

When a repository is cloned, it has a default remote called `origin` that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote called `upstream`.

1. Set the `upstream`.

    ```bash
    git remote add upstream https://github.com/devbae/devbae-blog.git
    ```

2. Use `git remote -v` to check the status. The output must be something like this:

    ```bash
      > origin    https://github.com/your-username/devbae-blog.git (fetch)
      > origin    https://github.com/your-username/devbae-blog.git (push)
      > upstream  https://github.com/devbae/devbae-blog.git (fetch)
      > upstream  https://github.com/devbae/devbae-blog.git (push)
    ```

3. To update your local copy with remote changes, run the following: (This will give you an exact copy of the current remote. You should not have any local changes on your master branch, if you do, use rebase instead.)

    ```bash
    git fetch upstream
    git checkout master
    git merge upstream/master
    ```

4. Push these merged changes to the master branch on your fork. Ensure to pull in upstream changes regularly to keep your forked repository up to date.

    ```bash
    git push origin master
    ```

5. Switch to the branch you are using for some piece of work.

    ```bash
    git checkout branch-name
    ```

6. Rebase your branch, which means, take in all latest changes and replay your work in the branch on top of this - this produces cleaner versions/history.

    ```bash
    git rebase master
    ```

7. Push the final changes when you're ready.

    ```bash
    git push origin branch-name
    ```

## How to Commit

Read [Commit Messaging Conventions](COMMIT_MESSAGE.md)

## After your Pull Request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository.

1. Delete the remote branch on GitHub.

    ```bash
    git push origin --delete branch-name
    ```

2. Checkout the master branch.

    ```bash
    git checkout master
    ```

3. Delete the local branch.

    ```bash
    git branch -D branch-name
    ```

4. Update your master branch with the latest upstream version.

    ```bash
    git pull upstream master
    ```

## Skipping a Travis CI Build (Coming Soon!)

If running a build is not required for a particular commit (in some cases like an update to README), add [ci skip] or [skip ci] to the git commit message. Commits that have [ci skip] or [skip ci] anywhere in the commit messages are ignored by Travis CI.

That's it! Thank you for your contribution!

## Attribution

This Contribution Guidelines are adapted from the [MIFOS Web App][homepage],
available at <https://github.com/openMF/web-app/blob/master/.github/CONTRIBUTING.md>

[homepage]: https://www.github.com/openMF/web-app
