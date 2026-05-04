REMarket – Full-Stack Marketplace Prototype
Overview

This project is a full-stack marketplace prototype built to explore a modern production-like architecture using Next.js (frontend) and NestJS (backend) with Prisma ORM and JWT-based authentication.

The goal was not to build a final product, but to simulate a scalable e-commerce architecture with separated frontend/backend layers, authentication flow, and database abstraction.

Architecture
Frontend: Next.js 15 (React-based SSR/SPA hybrid)
Backend: NestJS 10 (modular REST API)
Database layer: Prisma ORM
Authentication: JWT (Passport strategy)
Styling: TailwindCSS + DaisyUI
External services: Supabase (SDK integration)
Key Features
JWT authentication (register/login flow)
Protected API routes (NestJS guards)
Modular backend structure (users, products, cart, auth)
Prisma-based database modeling
SSR-ready frontend (Next.js)
UI built with Tailwind + DaisyUI
API communication via Axios
Integration-ready structure for Supabase
Tech Stack

Frontend:

Next.js 15
React 19 (RC)
TailwindCSS
DaisyUI
Axios

Backend:

NestJS 10
Express adapter
Passport + JWT
bcrypt
Prisma ORM
RxJS

Database / Services:

Prisma Client
Supabase (optional integration)
Project Structure

Frontend:

app/pages – routes and UI views
components – reusable UI blocks
lib – API layer and utilities
styles – Tailwind configuration

Backend:

modules – feature-based architecture (auth, users, products, cart)
controllers – request handling
services – business logic
prisma – schema and migrations
guards – authentication layer
Screenshots

Place screenshots in screenshots/ folder

Marketplace UI
<p align="center">
  <img src="screenshots/REMarket-Marketplace.png" width="420"/>
</p>
Product Flow
<p align="center">
  <img src="screenshots/REMarket-Marketplace_products.png" width="420"/>
  <img src="screenshots/REMarket-Marketplace_product_card.png" width="420"/>
</p>
Cart & Checkout
<p align="center">
  <img src="screenshots/REMarket-Marketplace_cart.png" width="420"/>
  <img src="screenshots/REMarket-Marketplace_checkout1.png" width="420"/>
</p>
Auth Flow
<p align="center">
  <img src="screenshots/REMarket-Marketplace_login.png" width="420"/>
  <img src="screenshots/REMarket-Marketplace_Reg_1.png" width="420"/>
</p>
Notes

This project was developed as a full-stack architecture exploration to simulate a scalable marketplace system using modern TypeScript-based tooling.

Focus areas:

separation of frontend/backend concerns
authentication flow design
ORM-based data modeling
SSR + API hybrid structure