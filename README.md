# Typescript Frontend Assessment - Reports App - Hono/Vue

This project is composed with the following dependencies:

- **[Node](https://nodejs.org)**
- **[Vue](https://vuejs.org/)**
- **[Vue Router](https://router.vuejs.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Hono](https://hono.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vite.dev/)**

## Project Structure

The project structure is organized as follows:

- **`app/`**: Contains the source code for both the client and the API.
  - **`api/`**: Hono API code
  - **`main.ts`**: Entry point for the Vue application
  - **`router/index.ts`**: Vue Router definition
  - **`style.css`**: Tailwind CSS stylesheet
  - **`components/`**: Vue components
  - **`views/`**: Vue Router View Components
- **`vite.config.ts`**: Vite configuration file
- **`tailwind.config.js`**: Tailwind CSS configuration file 
- **`index.html`**: HTML template for the Vue application
- **`README.md`**: This file

## Instructions

### Setup and Development

1. **Fork this repository**

2. **Clone the repository:**
   ```bash
   git clone {{ Your repository URL }}
   cd typescript-vue-assessment
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   This will start two servers:
   - **Client:** Runs on `http://localhost:5173/` and serves the Vue application.
   - **API:** Runs on `http://localhost:3001/api` and serves the Hono API.


### Tasks

Complete as many of the following tasks as you are able to within the alotted time. You will not _not_ assessed on the total number of tasks completed.
 
1. Open the reports hook found in `src/hooks/use-reports.hook.ts` 
2. Using the HTTP client of your choice (axios, fetch, etc...), implement the getReports method to make a GET request to `/api/reports` 
3. Implement error handling for non-200 API responses
4. Based on the response, create a typescript type for `Report` somewhere in the project
5. Update the `use-reports.hook.ts` to utilize this new type wherever it makes sense 
7. Create a `ReportsTable` component with a strongly-typed `reports` array prop. 
8. Update the template to display the reports, styled however you like
9. Create an `ErrorMessage` component with a `message` prop
10. Conditionally show the `ErrorMessage` component below the table if there is an error
11. Add the `ReportsTable` component to both the Home page and Reports page
12. Using the hook from earlier, call `getReports` when either page mounts
13. On the Home page, filter and display only reports _created within the past two weeks_, sorted by most recent
14. On the Reports page, display _all_ reports, sorted by most recent
15. Add a new method to our hook called `getReport` that makes an API call to `/api/reports/{{reportId}}` for amy given ID
16. Create a new view called `ReportDetailsView.vue`
17. Add a new vue route for this view. The path should include a required `reportId` paramater
18. Add a router link to each Report table row that routes to that respective report's details page
19. Update the `ReportsDetailsView.vue` page to use the route `reportId` parameter and the hook's `getReport` method to load the report when mounted
20. Create a "Loading" component and display it while report list or details are loading
21. Implement pagination on the reports table component
22. Implement column sorting on the reports table component

### When Finished
Commit your changes and make a Pull Request to the origin repo (https://github.com/echoasi/reports-assessment-hono-Vue)