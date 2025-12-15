# AI Rules for Christophe Digital Twin Application

This document outlines the core technologies used in this project and provides guidelines for their appropriate use.

## Tech Stack Overview

*   **Vite**: A fast build tool that provides an instant development server and optimized builds.
*   **TypeScript**: The primary language for all development, ensuring type safety and better code maintainability.
*   **React**: The JavaScript library for building user interfaces.
*   **shadcn/ui**: A collection of reusable components built with Radix UI and styled with Tailwind CSS.
*   **Tailwind CSS**: A utility-first CSS framework used for all styling, enabling rapid and consistent UI development.
*   **React Router**: Used for declarative routing within the application.
*   **Tanstack Query**: For efficient data fetching, caching, and state management of server data.
*   **Lucide React**: A library providing a set of beautiful, customizable SVG icons.
*   **React Hook Form & Zod**: For robust form management and schema-based validation.
*   **Sonner**: A modern toast notification library for displaying messages to the user.

## Library Usage Guidelines

To maintain consistency and efficiency, please adhere to the following rules when developing:

*   **UI Components**:
    *   **Always** prioritize `shadcn/ui` components for building the user interface.
    *   If a specific `shadcn/ui` component is not available or requires significant deviation from its intended design, create a **new component** in `src/components/` and style it using Tailwind CSS.
    *   **Never modify** files within `src/components/ui/` directly.
*   **Styling**:
    *   **Exclusively use Tailwind CSS** for all styling. Avoid inline styles or separate CSS modules.
    *   Ensure designs are **responsive** by utilizing Tailwind's responsive utilities.
*   **Routing**:
    *   Use `react-router-dom` for all client-side navigation.
    *   All main application routes should be defined in `src/App.tsx`.
*   **State Management & Data Fetching**:
    *   For server state management and data fetching, **use Tanstack Query**.
    *   For simple, local component state, `useState` and `useReducer` are appropriate.
*   **Icons**:
    *   **Always use icons from `lucide-react`**.
*   **Form Handling**:
    *   Use `react-hook-form` for managing form state and submissions.
    *   Use `zod` for defining form schemas and validation.
*   **Notifications**:
    *   Use `sonner` for displaying all toast notifications to the user.
*   **Document Head Management**:
    *   Use `react-helmet` for managing document head elements such as page titles and meta descriptions.
*   **Utility Functions**:
    *   Place general-purpose utility functions in `src/lib/utils.ts`.
*   **Custom Hooks**:
    *   All custom React hooks should reside in the `src/hooks/` directory.