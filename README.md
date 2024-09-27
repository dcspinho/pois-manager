# Application
## Requirements

- node 20.16.0;
- docker 25.0.1 (for PostgreSQL);
- npm 10.8.1.

## Installation

- Clone the repository:

```bash
git clone git@github.com:dcspinho/ryd.git
cd ryd
```

- Set up environment variables:

```bash
cp .env.example .env
vi .env
```

- Install dependencies:

```bash
npm install
```

- Run the PostgreSQL database as a Docker container:

```bash
docker-compose up -d --build
```

Move forward when a message similar to `database system is ready to accept connections` appears on the Docker logs.

- Run the PostgreSQL migrations script:

```bash
npm run migrations
```

- Start the application:

```bash
npm start
## File Structure

Below is an overview of the project's file structure, which is designed to separate concerns and organize the application logically:

```bash
│
├── src/                                        # Source code for the application
│   ├── controllers/                            # Handles command-line input and calls services
│   ├── migrations/                             # Database migration scripts
│       ├── sql/                                # SQL scripts for creating/updating database schema
│           └── 001_create_tables.sql           # SQL script for creating the necessary database tables
│       └── migrations.ts                       # Script to run the database migrations
│   ├── models/                                 # Database models and ORM configurations
│   ├── services/                               # Business logic and external API interactions
│   └── index.ts                                # Main entry point for the command-line application
├── .env                                        # Environment variables for database and API keys
├── .env.example                                # Example environment file
├── .gitignore                                  # Git ignore file
├── .prettierrc                                 # Prettier configuration file
├── docker-compose.yml                          # Docker Compose configuration
├── Dockerfile                                  # Docker configuration
├── eslint.config.mjs                           # ESLint configuration file
├── package-lock.json                           # NPM lock file
├── package.json                                # Node.js dependencies and scripts
├── README.md                                   # Documentation for the project
└── tsconfig.json                               # TypeScript configuration file
```
