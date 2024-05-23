# AI Form Builder

AI Form Builder is a powerful and user-friendly application that allows you to create customized forms effortlessly. Powered by artificial intelligence, this Next.js application leverages the Gemini AI API to generate form fields based on your prompts. With features like secure authentication, responsive design, and persistent data storage, AI Form Builder streamlines the form creation process while providing a seamless user experience.

## Features

- **AI-Powered Form Creation**: Users can create forms by simply providing prompts, and the AI generates the necessary form fields based on the prompts.
- **Authentication**: Next-auth is integrated for secure authentication, allowing users to sign up, sign in, and manage their accounts.
- **Responsive Design:** Shadcn UI ensures that the application is responsive and looks great across various devices and screen sizes.
- **Admin Dashboard**: Admin users have access to a dashboard where they can view all responses submitted to their forms.
- **Persistent Data Storage**: PostgreSQL is used as the database to store form configurations, user information, and form responses securely.
- **Theme Customization**: The app offers six different themes for users to choose from, allowing them to customize the appearance of their app interface.

### Technologies Used

- **Next.js**: A React framework for building server-side rendered (SSR) and statically generated web applications.
- **Next-auth**: A complete open-source authentication solution for Next.js applications.
- **Shadcn UI**: A UI framework for building beautiful, responsive web interfaces.
- **Gemini AI API**: An API for integrating artificial intelligence capabilities into applications.
- **Drizzle ORM**: ORM used for object-relational mapping, simplifying database interactions and management.
- **PostgreSQL**: A powerful, open-source relational database system.
- **DaisyUI:** A lightweight utility-first CSS component library for Tailwind CSS.
  

### Get Started
1. **Clone the repository:**

   ```bash
   git clone https://github.com/RaghavenderSingh/AIFormBuilder
   ```

2. **Install Dependencies:**

   ```bash
   cd your_repo
   npm intall
   ```

3. **Set Up Environment Variables:**

   ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=
    NEXT_PUBLIC_DATABASE_URL_CONFIG=
    NEXT_PUBLIC_GEMINI_API_KEY=
    NEXT_PUBLIC_BASE_URL=
    ```



