import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css';
import { ApolloProvider } from '@apollo/client';

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { graphqlClient } from './lib/graphql';

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
     <body className='dark gradient min-h-screen bg-background font-sans antialiased'>
      <ApolloProvider client={graphqlClient}>
      <RouterProvider router={router} />
      </ApolloProvider>
     </body>
    </StrictMode>,
  )
}