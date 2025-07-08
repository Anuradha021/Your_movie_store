# Movie App

A modern React + Vite movie search and watchlist application styled with Tailwind CSS.

## Features
-  **Search movies** using the OMDb API
- **View movie details** including plot, actors, director, and ratings
-  **Rate movies** with a custom star rating system
-  **Add movies to your watched list** and see stats
-  **Fast development** with Vite and hot module replacement
-  **Beautiful UI** with Tailwind CSS

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- OMDb API key ([get one here](https://www.omdbapi.com/apikey.aspx))

### Installation
1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd movie-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your OMDb API key:
     ```env
     VITE_OMDB_API_KEY=your_api_key_here
     ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

## Project Structure
```
movie-app/
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # React components
│   ├── assets/       # Images and icons
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── ...
├── index.html        # HTML template
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OMDb API](https://www.omdbapi.com/)

## License
This project is licensed under the MIT License.
