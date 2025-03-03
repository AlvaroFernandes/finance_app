# Finance App

Finance App is a web application built with **Next.js**, **TypeScript**, and **Prisma** for managing clients, jobs, invoices, and accounts efficiently.

## 🚀 Features

- User authentication with **NextAuth.js** (Google, Apple, Credentials)
- CRUD operations for **Clients, Jobs, Invoices, and Accounts**
- Secure authentication with middleware protection
- Optimized performance with Prisma ORM and API caching
- Styled with **Tailwind CSS** for modern UI

## 📦 Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Prisma ORM, Next.js API Routes
- **Authentication:** NextAuth.js (Google, Apple, Credentials)
- **Database:** PostgreSQL (or other Prisma-supported databases)

## 📜 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/AlvaroFernandes/finance_app.git
cd finance_app
```

2. **Install Dependencies**

```bash
npm install  # or yarn install
```

3. **Set Up Environment Variables**
   Create a `.env.local` file and configure your database and authentication providers:

```env
DATABASE_URL=your_database_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Run the Development Server**

```bash
npm run dev  # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔑 Authentication

This project uses **NextAuth.js** for authentication. It supports Google and Apple login, as well as email/password authentication.

To **logout**, use the `signOut()` function:

```tsx
import { signOut } from "next-auth/react";
<button onClick={() => signOut({ callbackUrl: "/signin" })}>Logout</button>;
```

## 📌 API Endpoints

- `GET /api/clients` - Fetch all clients
- `POST /api/clients` - Add a new client
- `DELETE /api/clients` - Remove a client
- Similar endpoints exist for **Jobs, Invoices, and Accounts**

## 🎨 CRUD Pages

| Feature             | Path        |
| ------------------- | ----------- |
| Clients Management  | `/clients`  |
| Jobs Management     | `/jobs`     |
| Invoices Management | `/invoices` |
| Accounts Management | `/accounts` |

## 🛠 Future Improvements

- Implement **server-side pagination** for large datasets
- Add **role-based authentication**
- Enhance **UI/UX with a dashboard**

## 📜 License

This project is licensed under the MIT License.

---

### 💡 Need Help?

If you encounter any issues, feel free to open an issue in the repository!
