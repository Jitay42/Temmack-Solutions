import React from 'react';

const HeroVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      >
        <source
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
        {/* Fallback image if video fails to load */}
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Technology and human collaboration"
          className="w-full h-full object-cover"
        />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default HeroVideo;