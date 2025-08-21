import React from 'react';

interface Profile {
  name: string;
  age: number;
  description: string;
  imageUrl: string;
}

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={profile.imageUrl} alt={`${profile.name}'s profile`} className="rounded-lg mb-2" />
      <h2 className="text-xl font-bold">{profile.name}, {profile.age}</h2>
      <p>{profile.description}</p>
    </div>
  );
};

export default ProfileCard;
