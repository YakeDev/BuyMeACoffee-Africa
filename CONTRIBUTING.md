# Contributing to Buy Me a Coffee Africa

First off, thank you for your interest in contributing to **Buy Me a Coffee Africa**! We welcome contributions that help us improve the project, whether through new features, bug fixes, documentation improvements, or better tests. Below you'll find our guidelines for contributing.

## Table of Contents

- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Branching and Workflow](#branching-and-workflow)
- [Coding Standards and Commit Messages](#coding-standards-and-commit-messages)
- [Running Tests](#running-tests)
- [Pull Request Process](#pull-request-process)
- [Issues and Bug Reports](#issues-and-bug-reports)
- [Code of Conduct](#code-of-conduct)
- [Additional Resources](#additional-resources)

## Repository Structure

Our repository is organized as a pnpm workspace, and is clearly organized to separate the frontend and backend. Here's an overview of the main folder:

**`src/pages/`**: Public pages of the application (e.g., Home, Login, Creator Page, etc.).
**`src/components/`**: Reusable components (e.g., Navbar, Button, etc.).
**`src/hooks/`**: Custom hooks to manage specific features (e.g., useAuth, useApi).
**`src/context/`**: Contexts for global state (e.g., AuthContext, LanguageContext).
**`src/services/`**: Functions for communicating with the backend (API calls, payment management).
**`src/utils/`**: Utility functions (formatting, validation, helpers).
**`frontend/public/`**: Contains publicly accessible static files (images, favicon, etc.).
**`frontend/package.json`**: Configuration file for dependencies and npm scripts.
**`frontend/vite.config.js`**: Vite configuration for the React project.

## Getting Started

1. **Fork and Clone the Repository**

   - Fork the repository on GitHub.
   - Clone your fork locally:
     ```bash
     git clone git@github.com:2MJ-DEV/BuyMeACoffee-Africa.git
     cd BuyMeACoffee-Africa
     ```

2. **Install Dependencies**

   - Since we use pnpm workspaces, run:
     ```bash
     pnpm install
     ```

3. **Familiarize Yourself with the Project**
   - Review the repository structure.
   - Look at the existing code in both the `src/` folders to understand how the project is organized.

## Branching and Workflow

- **Branching Strategy**

  - For new features or fixes, please create a branch from the `main` branch (or the default branch if otherwise noted).
  - Use descriptive branch names, e.g., `feature/new-component` or `bugfix/fix-issue-123`.

- **Creating a Branch**

  ```bash
  git checkout -b feature/your-feature-name
  ```

- **Commit Guidelines**
  - Write clear, concise commit messages.
  - Follow the commit message convention:
    ```
    [type]: short description
    ```
    where **type** could be `feat` (new feature), `fix` (bug fix), `docs` (documentation), etc.
  - Example commit:
    ```
    feat: add support for custom hook in package XYZ
    ```

## Coding Standards and Commit Messages

- **Code Style**

  - Follow the established coding conventions in the repository.
  - Please check for any linting or style configuration files (e.g., `.eslintrc`) to ensure consistency.

- **Commit Messages**
  - Ensure commit messages are descriptive.
  - If needed, add a detailed description in the commit body, including references to any issues the commit addresses.

## Running Tests

- **Unit and Integration Tests**

  - Before submitting your pull request, make sure all tests pass.
  - Run tests from the root of the repository using:
    ```bash
    pnpm...
    ```

- **Playground Testing**
  - Test your changes in the `/` examples to ensure that your modifications work in real-world scenarios.

## Pull Request Process

1. **Submit a Pull Request**
   - Once your changes are complete and all tests pass, open a pull request (PR) against the `dev` branch (or as specified).
2. **PR Description**

   - Provide a clear description of your changes.
   - Link any related issues and explain your rationale.

3. **Review and Feedback**

   - Your PR will be reviewed by the maintainers.
   - Be prepared to address feedback or make further changes.

4. **Merging**
   - We may ask you to rebase or squash your commits before merging to keep the history clean.

## Issues and Bug Reports

- **Reporting Issues**
  - Please use our issue template (located in the `.github/` folder) when reporting bugs or suggesting features.
  - Provide as much detail as possible to help us understand and resolve the issue.

## Code of Conduct

- We are committed to creating a friendly, respectful, and inclusive community.
- Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Additional Resources

- **Documentation**
  - Refer to the project README and other documentation for more details.
- **Questions or Help**
  - If you have any questions or need additional help, feel free to open an issue or reach out via our community channels.

---

Thank you for contributing to the success of **BuyMeACoffee-Africa**. Happy coding!

---