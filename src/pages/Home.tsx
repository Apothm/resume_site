// In Home.tsx
import { useEffect } from 'react';
import profileImg from '../assets/images/bryan.jpg'

export default function Home() {
  // This will run when the component mounts
  useEffect(() => {
    console.log('Home component mounted');
    console.log('Current URL:', window.location.href);
    console.log('Profile image path:', profileImg);
    
    // Force a log error to make sure console is working
    console.error('Test error message');
  }, []);

  // Immediate log when component renders
  console.log('Home component rendering');

  return (
    <div className="min-h-screen bg-gray-950 text-white pl-16">
      {/* Test with both the imported image and a direct path */}
      <img 
        src={profileImg}
        alt="Bryan Muncy"
        onLoad={() => console.log('Image loaded successfully')}
        onError={(e) => console.error('Image failed to load:', e)}
        className="relative rounded-2xl w-full max-w-md mx-auto border-2 border-cyan-500/20"
      />
      
      {/* Add a test image with direct path */}
      <img 
        src="/images/profile.jpg"
        alt="Test direct path"
        onLoad={() => console.log('Direct path image loaded')}
        onError={(e) => console.error('Direct path image failed:', e)}
      />
    </div>
  );
}