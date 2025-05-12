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
  
// Helper function to import images and handle paths correctly
export const getImagePath = (imageName) => {
  try {
    // For project images
    if (imageName === 'QUBE.webp') {
      return new URL('../images/QUBE.webp', import.meta.url).href;
    } else if (imageName === 'NORTH-COFFEE.webp') {
      return new URL('../images/NORTH-COFFEE.webp', import.meta.url).href;
    } else if (imageName === 'PillPal.webp') {
      return new URL('../images/PillPal.webp', import.meta.url).href;
    } else if (imageName === 'BTStudent.webp') {
      return new URL('../images/BTStudent.webp', import.meta.url).href;
    } else if (imageName === 'portfolio.webp') {
      return new URL('../images/profile.webp', import.meta.url).href; // Using profile as fallback
    } else if (imageName === 'Github_profile.webp') {
      return new URL('../images/Github_profile.webp', import.meta.url).href;
    }
    
    // For QR codes
    if (imageName === 'lea_pier_qr.webp') {
      return new URL('../images/lea_pier_qr.webp', import.meta.url).href;
    } else if (imageName === 'puegoo_qr.webp') {
      return new URL('../images/puegoo_qr.webp', import.meta.url).href;
    } else if (imageName === 'qr_linkedin.webp') {
      return new URL('../images/qr_linkedin.webp', import.meta.url).href;
    }
    
    // Default image if not found
    return new URL('../images/profile.webp', import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image: ${imageName}`, error);
    return ''; // Return empty string if image can't be loaded
  }
};