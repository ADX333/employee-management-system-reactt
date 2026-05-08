# Employee Management System

A React-based Employee Management System where admins can manage employees and their tasks.

## Features

- **Admin Dashboard** — View all employees and their task counts, create and assign new tasks
- **Employee Dashboard** — View assigned tasks, accept, complete or mark tasks as failed
- **Authentication** — Role-based login for Admin and Employee
- **Persistent Storage** — Data stored in localStorage, survives page refresh

## Tech Stack

- React
- Tailwind CSS
- Context API
- localStorage

## Getting Started

```bash
git clone https://github.com/ADX333/employee-management-system-reactt.git
cd employee-management-system-reactt/ems
npm install
npm run dev
```

## Screenshots

Login
<img width="1640" height="795" alt="image" src="https://github.com/user-attachments/assets/bdb903ec-87eb-4659-b22a-dc40780c7c89" />

Admin/CreateTask
<img width="1683" height="728" alt="image" src="https://github.com/user-attachments/assets/0a50fd7a-9116-4b8d-ba82-3789ae058c4d" />

Admin/ViewAllTasks
<img width="1635" height="542" alt="image" src="https://github.com/user-attachments/assets/505cc21a-45a8-4a30-81a6-438a8ace6973" />

Employee Dashboard
<img width="1627" height="811" alt="image" src="https://github.com/user-attachments/assets/2813589a-167d-477f-a55c-c812765eea5b" />




## Demo Credentials

**Admin:**
- Email: a1@mail.com
- Password: admin123

**Employee:**
- Email: e1@mail.com
- Password: 123

## Author

Anshuman Dixit


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

