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
2. Create an stateful instance of ReportState for sharing among our app
3. Using the HTTP client of your choice (axios, fetch, etc...), create a getReports method to make a GET request to `/api/reports` 
4. Implement error handling for non-200 API responses
5. Update the hook to return the state and method
6. Test the `getReports` method however you see fit. Create a `Report` type based on the JSON result and save it in the project
7. Update the `use-reports.hook.ts` to utilize this new type wherever it makes sense 
8. Create a `ReportsTable` component with an `reports` array prop, strongly typed via our mew `Report` type
9. Update the `ReportsTable` template to display the reports, styled however you like
10. Create an `ErrorMessage` component with a `message` prop
11. Conditionally show the `ErrorMessage` component below the table if there is an error
12. Add the `ReportsTable` component to both the Home page and Reports page
13. Using the hook from earlier, load the reports from the API when each respective page mounts
14. On the Home page, filter and display only reports _created within the past two weeks_, sorted by most recent
15. On the Reports page, display _all_ reports, sorted by most recent
16. Add a new method to our hook called `getReport` that makes an API call to `/api/reports/{{reportId}}` for any given ID
17. Create a new view called `ReportDetailsView.vue`
18. Add a new vue route for this view. The path should include a required `reportId` paramater
19. Add a router link to each Report table row that routes to that respective report's details page
20. Update the `ReportsDetailsView.vue` page to use the route `reportId` parameter and the hook's `getReport` method to load the report when mounted
21. Create a "Loading" component and display it while report list or details are loading
22. Implement pagination on the reports table component
23. Implement column sorting on the reports table component

### Finishing Up
Commit any changes and make a Pull Request to the origin repo (https://github.com/echoasi/typescript-vue-assessment)