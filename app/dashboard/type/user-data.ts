interface UserData {
    externalId: string;
    jobTitle?: string | null;
    name: string;
    email: string;
    bearerToken: string;
    phoneNumber?: string | null;
    yearsOfExperience?: number | null;
    address?: string | null;
    nationality?: string | null;
    dob?: string | null; 
    linkedInUrl?: string | null;
    githubUrl?: string | null;
    placeOfBirth?: string | null;
    createdAt: string; 
    updatedAt: string; 
  }