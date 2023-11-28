# Contributing

Before contributing to the HEE prototype as a team member, please ensure to familiarise yourself with the 
[branching strategy document](https://www.figma.com/file/wp7I4wS6OAvLzcUkDxePXE/HEE-frontend-protoype%3A-Branching-strategy?node-id=0%3A1&t=0P5nLy2hjh32DglY-0).

It will give you a visual representation of the different branch types and workflow used during each sprint.

Below is a summary of each branch type:

## Branch types
`master`: Frontend work which has been implemented and deployed into Bloomreach production by the backend team.

`develop`: Frontend work which has been approved and signed off by the design team.

`WIP/*`: Frontend work for _**the current sprint**_ which has been peer reviewed, awaiting review by the design team

`feature/*`: Isolated work associated with a particular feature and Jira ticket.

`release/*`: Features for _**the current sprint**_ being prepped for release / deployment into Bloomreach production at the end of sprint.

`hotfix/*`: Fixes made directly on production to amend small / urgent issues.

## Starting a sprint

When starting a new sprint we need to prep two new branches. For the sake of example we'll assume this is sprint number
`1234`.

### `WIP/NWPS-Sprint-1234` is cut from `develop`

As mentioned above, the new `WIP` branch will be used to merge in feature PRs after they have been peer reviewed, and are
ready for design team review.

### `release/NWPS-Sprint-1234` is cut from `master`

A new `release` branch is created which will be used to merge in individual release PRs, which have been tested during QA
and are ready for release.

## Working on a feature

Assuming a JIRA ticket number of `NWPS-5678`, below is an overview of the feature development workflow:

### `feature/NWPS-5678-[ticket-title]` is cut from `WIP/NWPS-Sprint-1234`

Create a new feature branch which will contain all the isolated commits for the new feature. 

Please use the following message format for your commits.

`[NWPS-5678] - [Your commit message]`

### Create new PR for `feature/NWPS-5678-[ticket-title]` for merging into `WIP/NWPS-Sprint-1234`

Ensure Backstop and Playwright tests are all passing locally before creating a new PR. 

Include a clear description of your work in the PR description and make sure to tag the intended reviewers.

When the PR is approved, make sure the all pipeline checks have been passed before merging.

## Design review

Once you have a few tickets ready for design review, we now need to deploy the work to GitHub Pages so that the design 
team can review in browser.

Do this by merging `WIP/NWPS-Sprint-1234` into the `develop` branch and pushing to GitHub. 

This will trigger the pipeline build and once complete, automatically deploy to GitHub Pages which will be accessible 
via this url: `https://health-education-england.github.io/hee-prototypes/`

## Releasing a feature to the backend team

When the backend team is ready to implement a new feature into Bloomreach, we use release branches to provide updated
frontend assets containing only the changes pertaining to the feature.

### `release/NWPS-5678-[ticket-title]` is cut from `release/NWPS-Sprint-1234`

Create a new release branch for the feature cut from the current sprints release branch.

Then use the `git cherry-pick` command to include the commits from your feature branch into the new release branch.

If your feature branch contains a large number of commits, it's recommended to squash them into a single commit to 
simplify cherry-picking into the release branch.

It also makes it easier to remove features from releases if need be, requiring you to only revert a single commit.

### Create new release PR for `release/NWPS-5678-[ticket-title]` for merging into `release/NWPS-Sprint-1234`

Ensure Backstop and Playwright tests are all passing locally before creating a new PR.

Once the pipeline build is complete, a backend developer will then take the resulting frontend assets and integrate them
into Bloomreach locally and then push to the staging environment.

QA will then test the new feature on the staging environment. 

When QA passes / approves the new feature, a backend developer will approve and merge the open PR.

## Deployment workflow

When the backend team has scheduled a deployment to production, we need to ensure that we update and tag the `master`
branch with the latest work.

### Merge `release/NWPS-Sprint-1234` into `master`

It's recommended to view a diff between `release/NWPS-Sprint-1234` and `master` to perform a sanity check before merging.

This allows us to ensure that only features released to Bloomreach production are being merged back into `master`.

### Tag `master` merge commit

Use the following commands to tag the merge commit:

`git tag -a`

`git push origin master --tags`

Ensure to use the same version number as the backend repo release version number. You can view the backend release tags
[here](https://github.com/Health-Education-England/hee-cms-platform/tags).

## End of sprint / starting a new sprint

There are a few house-keeping tasks to perform when starting a new sprint.

### Create a new sprint `release` branch

Cut a new branch from the previous sprint release branch, if it contains unreleased work for next deployment. 

Otherwise, cut a new sprint release branch from `master`.

### Create a new `WIP` sprint branch

Ensure that the previous `WIP` sprint branch has been merged into `develop`, then cut a new `WIP` sprint branch from `develop`.

### Update any open pull requests

If there are any open pull requests on GitHub, edit them to ensure their merge destinations are pointing to the newly 
created sprint branches from the steps above.

## Hotfixes

Any hotfix branches should be cut from `master` as `hotfix/NWPS-[number]-[title]`.

Ensure you tag the hotfix commit and merge back into `master` branch.

Also ensure that any hotfix commits are cherry-picked into `develop` to keep the prototype preview URL up to date.
