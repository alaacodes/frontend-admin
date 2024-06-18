// import { db } from "@/lib/db";

export interface CandidatePost {
  id: string;
  email: string;
  Name: string;
  Address?: string;
  Current_Job_Title?: string;
  Profile?: string;
  yearOfExp?: string;
  PhoneNumber?: string;
  LinkedIn_URL?: string;
  Github_URL?: string;
  Nationality: string;
  QualityRating?: number;
  Status?: "NOT_ENROLLED" | "CONFIRMED";
  Skills?: string[];
  TechStack?: string[];
  FrameWork?: string[];
  SoftSkills?: string[];
  CurrentJob?: string;
  LanguagesProficiency?: string[];

  CurrentSalaryEUR?: number;
  CurrentSalaryLOCAL?: number;
  ExpectedSalaryEUR?: number;
  displaySalaryEUR?: number;
  Country?: string;
  City?: string;
  Industry?: string;
  type: types;
  fullProgram?: Version;
  readyToStart?: string;
  BlueCard?: BlueCardEligible;
  Degree?: highestDegree;
  Profession?: string;
}

export enum types {
  NOT_ENROLLED = "NOT_ENROLLED",
  FULL_PROGRAM = "FULL_PROGRAM",
  PATRONSHIP = "PATRONSHIP",
}

export enum BlueCardEligible {
  YES = "YES",
  REGULAR_WORK_VISA = "REGULAR_WORK_VISA",
  DECLINED = "DECLINED",
}

export enum highestDegree {
  BACHELOR = "BACHELOR",
  MASTER = "MASTER",
  DOCTORATE = "DOCTORATE",
}

export enum Version {
  NOT_ENROLLED = "NOT_ENROLLED",
  INSTALLMENT = "INSTALLMENT",
  VIP = "VIP",
  FAST_TRACK = "FAST_TRACK",
}

export const filterOptions = [
  // { label: "Name", value: "Name" },
  // { label: "Email", value: "Email" },
  // { label: "yearOfExp", value: "yearOfExp" },
  // { label: "Phone Number", value: "PhoneNumber" },
  // { label: "Nationality", value: "Nationality" },
  // { label: "Quality Rating", value: "QualityRating" },
  // { label: "Skills", value: "skills" },
  // { label: "Tech Stack", value: "TechStack" },
  // { label: "Framework", value: "FrameWork" },
  // { label: "Languages Proficiency", value: "LanguagesProficiency" },
  // { label: "Current Salary (EUR)", value: "CurrentSalaryEUR" },
  // { label: "Expected Salary (EUR)", value: "ExpectedSalaryEUR" },
  // { label: "Display Salary (EUR)", value: "displaySalaryEUR" },
  // { label: "Country", value: "Country" },
  // { label: "City", value: "City" },
  // { label: "Industry", value: "Industry" },
  // { label: "Type", value: "type" },
  // { label: "Full Program", value: "fullProgram" },
  // { label: "Ready to Start", value: "readyToStart" },
  // { label: "Blue Card", value: "BlueCard" },
  // { label: "Degree", value: "Degree" },
  // { label: "Profession", value: "Profession" },

  { label: "Candidate ID", value: "displayedid" },
  { label: "Profession", value: "Current_Job_Title" },
  { label: "Salary Expectation/Annum [EUR]", value: "ExpectedSalaryEUR" },
  { label: "Experience", value: "Experience" },
  { label: "GermanLanguage", value: "GermanLanguage" },
  { label: "Tech Stack", value: "skills" },
  { label: "Migration Readiness", value: "Migration Readiness" },
];

export const blueCardEligibleOptions = [
  { label: "YES", value: "YES" },
  { label: "REGULAR_WORK_VISA", value: "REGULAR_WORK_VISA" },
  { label: "DECLINED", value: "DECLINED" },
];

export const typeOptions = [
  { label: "NOT_ENROLLED", value: "NOT_ENROLLED" },
  { label: "FULL_PROGRAM", value: "PATRONSHIP" },
  { label: "DECLINED", value: "DECLINED" },
];

export const highestDegreeOptions = [
  { label: "BACHELOR", value: "BACHELOR" },
  { label: "MASTER", value: "MASTER" },
  { label: "DOCTORATE", value: "DOCTORATE" },
];

export const fullProgramOptions = [
  { label: "NOT_ENROLLED", value: "NOT_ENROLLED" },
  { label: "INSTALLMENT", value: "INSTALLMENT" },
  { label: "VIP", value: "VIP" },
  { label: "FAST_TRACK", value: "FAST_TRACK" },
];
