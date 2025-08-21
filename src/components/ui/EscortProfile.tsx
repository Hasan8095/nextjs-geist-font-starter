import React from 'react';

interface EscortProfile {
  name: string;
  age: number;
  description: string;
  imageUrl: string;
  profileLink: string;
}

const EscortProfile: React.FC<{ profile: EscortProfile }> = ({ profile }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={profile.imageUrl} alt={`${profile.name}'s profile`} className="rounded-lg mb-2" />
      <h2 className="text-xl font-bold">{profile.name}, {profile.age}</h2>
      <p>{profile.description}</p>
      <a href={profile.profileLink} className="text-blue-500">View Profile</a>
    </div>
  );
};

export default EscortProfile;
