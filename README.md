# ImmolQ Widget - Desktop Version

## Overview

This project implements the desktop version of the **ImmolQ Widget** using React. The design is based on the provided Figma design, and the primary focus is on building a responsive
 and interactive UI for desktop users. The project showcases various React components, dropdown effects, and navigation, adhering closely to the Figma design specifications.

The site is live at: [https://66ed5d21b962d547638f8865--arifimmoiq.netlify.app/](https://66ed5d21b962d547638f8865--arifimmoiq.netlify.app)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup and Installation](#setup-and-installation)
- [Components Overview](#components-overview)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Deployment](#deployment)

---

## Features

### 1. **Responsive Navigation Bar**
   - A top navigation bar that displays a **hamburger menu** icon on the left, the **ImmoTrust** logo in the center, and social media icons (LinkedIn and Instagram) on the right.
   - The **hamburger menu** is interactive and, when clicked, reveals a sliding sidebar navigation menu from the left. This menu slides out with a smooth transition and disappears when the **back arrow** is clicked.
   
### 2. **Sidebar Menu**
   - The sidebar contains multiple sections for navigation:
     - **Dienstleistungen (Services)**
     - **Self-Service**
     - **Bewertung (Assessment)**
     - Other sections like Potentialanalyse, Finanzierung, Immobilien, Ratgeber, and Über uns.
   - The sidebar has smooth sliding transitions for a user-friendly experience.

### 3. **Interactive Assessment Section**
   - The **Bewertung** section displays three property types that users can select:
     - **Einfamilienhaus (Single-family House)**
     - **Wohnung (Apartment)**
     - **Mehrfamilienhaus (Multi-family House)** with a label indicating "Kein Sofortergebnis" (No Immediate Result).
   - Each card is clickable and highlighted upon hover, creating an engaging experience for users to interact with.

### 4. **Custom Transitions**
   - Smooth transitions are applied to various elements including the sidebar and property cards.
   - The transitions use `Tailwind CSS` for simplified styling and fluid animations.

### 5. **Responsive Design**
   - Although the focus is on the desktop version, the layout adjusts slightly to maintain usability on varying screen sizes.

### 6. **Accessibility Features**
   - All interactive elements, such as icons and buttons, have appropriate `aria-labels` and can be navigated using keyboard controls.
   - The color contrast follows accessibility guidelines to ensure readability.

---

## Tech Stack

- **React**: Core library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **React Icons**: Icon library for integrating LinkedIn, Instagram, and menu icons.
- **Netlify**: Used for deployment of the application.

---

## Folder Structure

```bash
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── NavBar.tsx          # Main navigation bar
│   │   ├── MenuBar.tsx         # Sidebar component with menu items
│   │   ├── PropertyCard.tsx    # Individual property type cards
│   └── App.tsx                 # Main app component
├── styles
│   └── tailwind.css            # Tailwind custom styles
└── README.md




Components Overview
1. NavBar
Contains the main top navigation with the hamburger icon, logo, and social icons.
The hamburger menu triggers the appearance of the sidebar.
2. MenuBar
A sliding sidebar that contains links to various sections such as Dienstleistungen, Self-Service, Bewertung, etc.
The sidebar animates in and out from the left side of the screen.
3. PropertyCard
Displays clickable property options like Einfamilienhaus, Wohnung, and Mehrfamilienhaus with corresponding icons and labels.
Smooth hover and selection transitions are applied for user interaction.
Responsive Design
The project focuses primarily on desktop but maintains adaptability for different screen sizes.
Flexbox and Tailwind CSS are used to ensure that elements adjust seamlessly.
Accessibility
All buttons and icons have accessible aria-labels.
The color contrast and text sizes follow best practices for readability and inclusivity.
Deployment
The application is hosted on Netlify for easy access. You can view the live demo here.
Author
Developed by [Muhammad Arif Ud Din].
Connect with me on LinkedIn https://www.linkedin.com/in/arif-uddin-a99273230.