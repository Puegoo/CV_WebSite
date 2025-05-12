// src/utils/assetUtils.js - Create this new file
// Helper function to handle asset paths in both development and production
export function getAssetPath(assetPath) {
    // In production mode with GitHub Pages, we need to prepend the base path
    // In dev mode, we can use the path as is
    const basePath = import.meta.env.BASE_URL || '/';
    
    // Remove leading slash if it exists to avoid double slashes
    const normalizedPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
    
    return `${basePath}${normalizedPath}`;
  }
  
  // Example usage in a component:
  /*
  import { getAssetPath } from '../utils/assetUtils';
  
  function MyComponent() {
    return (
      <img src={getAssetPath('images/profile_1.webp')} alt="Profile" />
    );
  }
  */
  
  // Note: You'll need to update all your image paths to use this helper function.
  // Move your images from src/images/ to the public/ folder for better asset handling.