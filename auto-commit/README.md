# Automate Your GitHub Commits

This repository shows how to automate your GitHub commits using Python and GitHub Actions.

Links: [Medium article](https://medium.com/@morihosseini/automate-your-github-commits-5fe372d676eb)

## Usage

Edit `.github/workflows/CI.yml` to uncomment the cron tab line and also, change the email and the name.

It writes everyday's datetime to `example.txt`, implemented in `main.py`, and commits it to the repository, everyday at 3 AM.
