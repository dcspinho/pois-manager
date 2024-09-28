# CRUD service for managing Points of Interest (POIs)

This is a CRUD service built using TypeScript, Node.js, and PostgreSQL.
The service is specifically focused on petrol stations.

## Features

1. Create, update, delete, and retrieve Points of Interest (POIs) representing petrol stations;
2. Manage opening hours for POIs;
3. Manage pumps associated with each POI and fuel products;
4. Manage fuel products and their prices, including currency rate information.


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

- Build the application:

```bash
npm run build
```

- Start the application:

```bash
npm start
```

## Available scripts

- **Build the application**: Build TypeScript files.

```bash
npm run build
```

- **Run database migrations:** Applies necessary migrations to the PostgreSQL database.

```bash
npm run migrations
```

- **Run tests:** Compiles TypeScript files and runs unit and integration tests using Jest.

```bash
npm test
```

- **Lint the codebase:** Checks code for linting errors.

```bash
npm run lint
```

- **Fix linting issues:** Automatically fixes linting issues in the codebase.

```bash
npm run lint:fix
```

- **Print ESLint config:** Outputs the ESLint configuration being used.

```bash
npm run lint:get-config
```

## Usage

> **Note:** Do not forget to have the PostgreSQL Docker container running before starting.

## File Structure

Below is an overview of the project's file structure, which is designed to separate concerns and organize the application logically:

```bash
│
├── src/                                        # Source code for the application
│   ├── controllers/                            # Handles command-line input and calls services
│       ├── fuelProduct.controller.ts           # Fuel product-related actions
│       ├── openingHours.controller.ts          # Opening hours product-related actions
│       ├── poi.controller.ts                   # POI-related actions
│       ├── productPrice.controller.ts          # Product price-related actions
│       └── pump.controller.ts                  # Pump-related actions
dto
│   ├── migrations/                             # Database migration scripts
│       ├── sql/                                # SQL scripts for creating/updating database schema
│           ├── 001_create_tables.sql           # SQL script for creating the necessary database tables
│           └── 002_populate.sql                # SQL script to populate the database
│       └── migrations.ts                       # Script to run the database migrations
│   ├── models/                                 # Database models and ORM configurations
│       ├── currencyRate.ts                     # Model for the currency rate entity
│       ├── fuelProduct.ts                      # Model for the fuel product entity
│       ├── openingHours.ts                     # Model for the opening hours entity
│       ├── poi.ts                              # Model for the POI entity
│       ├── productPrice.ts                     # Model for the product price entity
│       └── pump.ts                             # Model for the pump entity
│   ├── services/                               # Business logic and data access
│       ├── fuelProduct.service.ts              # Handles fuel product-related logic
│       ├── openingHours.service.ts             # Handles opening hours product-related logic
│       ├── poi.service.ts                      # Handles POI-related logic
│       ├── productPrice.service.ts             # Handles product price-related logic
│       └── pump.service.ts                     # Handles pump-related logic
│   ├── index.ts                                # Main entry point for the command-line application
│   └── ormconfig.ts                            # TypeORM configuration for database connection
├── tests/                                      # Directory for tests
│   └── unit/                                   # Unit tests
├── .env                                        # Environment variables for database and API keys
├── .env.example                                # Example environment file
├── .env.test                                   # Test environment file
├── .gitignore                                  # Git ignore file
├── .prettierrc                                 # Prettier configuration file
├── docker-compose.yml                          # Docker Compose configuration
├── Dockerfile                                  # Docker configuration
├── eslint.config.mjs                           # ESLint configuration file
├── jest.config.ts                              # Jest configuration file for testing
├── package-lock.json                           # NPM lock file
├── package.json                                # Node.js dependencies and scripts
├── README.md                                   # Documentation for the project
└── tsconfig.json                               # TypeScript configuration file
```
