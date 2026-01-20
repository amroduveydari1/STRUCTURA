# Contributing to STRUCTURA

First off, thank you for considering contributing to STRUCTURA! It's people like you that make STRUCTURA such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct of being respectful and constructive.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the TypeScript/React styleguide
* Include screenshots and animated GIFs in your pull request whenever possible
* End all files with a newline
* Avoid platform-dependent code

## Development Process

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/STRUCTURA.git
   cd STRUCTURA
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set up environment variables**
   - Create a `.env.local` file
   - Add your `GEMINI_API_KEY`

6. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary

7. **Test your changes**
   ```bash
   npm run dev
   npm run build
   ```

8. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

9. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

10. **Create a Pull Request**
    - Go to the original repository
    - Click "New Pull Request"
    - Select your fork and branch
    - Fill in the PR template

## Styleguide

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐛 `:bug:` when fixing a bug
    * ✨ `:sparkles:` when adding a new feature
    * 📝 `:memo:` when writing docs
    * 🚀 `:rocket:` when improving performance
    * ♻️ `:recycle:` when refactoring code

### TypeScript Styleguide

* Use TypeScript for all new code
* Use meaningful variable names
* Use functional components and hooks
* Prefer const over let
* Use async/await over promises
* Add proper type annotations

### React Styleguide

* Use functional components
* Use React Hooks appropriately
* Keep components small and focused
* Extract reusable logic into custom hooks
* Use proper prop types

## Project Structure

```
STRUCTURA/
├── components/          # React components
├── services/           # API services
├── App.tsx            # Main app component
├── index.tsx          # Entry point
├── constants.tsx      # Constants and configuration
├── types.ts           # TypeScript type definitions
└── translations.ts    # i18n translations
```

## Questions?

Feel free to open an issue with your question or reach out to [@amroduveydari1](https://github.com/amroduveydari1).

## Recognition

Contributors will be recognized in the project README.

Thank you for contributing to STRUCTURA! 🏗️
