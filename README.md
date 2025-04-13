# Solvro Next.js template

## Welcome to the repository of Solvro Next.js template

A standardized Next.js template maintained by Solvro Science Club at Wrocław University of Science and Technology. This template incorporates our best practices, coding standards, and recommended project structure for web development projects. It serves as a starting point for new Solvro members and projects, ensuring consistency and quality across our initiatives.

## Technologies used

- Next.js
- React.js
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Tanstack Query

## Links

[![docs.solvro.pl](https://i.imgur.com/fuV0gra.png)](https://docs.solvro.pl)

## Development

### 1. Use this template

![Homepage](https://i.imgur.com/RXm10f8.png)

### 2. Install Dependencies

```bash
cd web-template
npm install
```

### 3. Run the Project

```bash
npm run dev
```

### 5. View the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Working with git

### Github Solvro Handbook

<https://docs.solvro.pl/guides/github>

### SSH

If you are a Windows user, follow this [tutorial](https://www.youtube.com/watch?v=vExsOTgIOGw) to connect via SSH

### Building a new feature

1. Checkout and update main branch

```bash
   git checkout main
   git pull origin main
   git fetch
```

2. Create new feature branch

```bash
   git checkout -b feat/x_my_feature_branch
```

> 'x' stands for issue number; this command will create and checkout a new branch named feat/x_my_feature_branch

3. Commit your changes:

```bash
   git add .
   git commit -m "<description>"
```

4. Push to remote:

```bash
   git push origin feat/x_my_feature_branch
```

5. Create a Pull Request on GitHub and wait for a review

### ⚠️ Important ⚠️

- Do not push directly to main branch!
- Please remember to commit before checking out to a different branch
- Clean up after a successful merge

  ```bash
  git branch -d feat/x_my_feature_branch
  git push origin --delete feat/x_my_feature_branch
  ```

## Contact

For questions or suggestions, please reach out to us:

- ✉️ Email: <kn.solvro@pwr.edu.pl>
- 🌐 Website: [solvro.pwr.edu.pl](https://solvro.pwr.edu.pl/)
- 📘 Facebook: [KN Solvro](https://www.facebook.com/knsolvro)

---

Thank you for reading! Stay tuned for more updates!
