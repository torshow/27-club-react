# Creative Agency Portfolio Platform

A responsive Single Page Application (SPA) built with React that showcases creative agency projects. The platform allows users to view projects, add new projects dynamically, and search/filter projects.

## Features

- Landing page displaying a list of projects
- Form to add new projects dynamically
- Search feature for filtering projects
- Responsive design
- Component-based architecture with reusable components

## Components

- `NavBar`: Navigation bar with site logo and links
- `Hero`: Hero section with introduction
- `AddProjectForm`: Form to add new projects
- `SearchBar`: Search input to filter projects
- `ArtistList`: Displays list of project cards
- `ArtistCard`: Individual project card component

## State Management

- Uses React `useState` hook to manage projects array
- Projects are stored in parent component (App) and passed down as props
- Search functionality filters projects based on name, client, or category

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server

## Technologies Used

- React
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)

## Learning Outcomes

This project demonstrates understanding of:
- Component hierarchy and composition
- State management with React hooks
- Props drilling and component communication
- Event handling for dynamic updates
- Responsive design principles
- Reusable component creation
