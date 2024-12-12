# **Next.js + PostgreSQL App**

This is a fullstack application built with **Next.js** and **Prisma ORM**, backed by a **PostgreSQL database**. The project is optimized for deployment on **Vercel** and supports Docker for local development.

---

## **Features**

- Server-rendered React app using the Next.js **App Router**.
- API routes with Next.js.
- Database interactions with Prisma.
- Dockerized PostgreSQL for local development.
- Vercel-optimized deployment.

---

## **Getting Started**

### **1. Prerequisites**

Ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm**
- **Docker** and **Docker Compose** (for local database setup)

---

### **2. Clone the Repository**

Clone the project repository to your local machine:

```bash
git clone <repository-url>
cd <repository-name>
```

### **3. Run the application**

```bash
docker compose up
```

### **4. Adding new migrations**

```bash
npx prisma migrate dev --name <migration-name>
```
