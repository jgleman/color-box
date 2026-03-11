import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  // Use ts-jest preset for ESM + TypeScript
  preset: "ts-jest/presets/default-esm",

  // Node environment
  testEnvironment: "node",

  // Transform TypeScript files with ts-jest
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  },

  // Treat these extensions as ESM
  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // Resolve .js imports back to .ts source files
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  // Include .ts/.tsx in module resolution
  moduleFileExtensions: ["ts", "tsx", "js", "mjs", "cjs", "json", "node"],

  // Where Jest looks for test files
  roots: ["<rootDir>/src"],

  // Automatically clear mocks between tests
  clearMocks: true,

  // Coverage options
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "./src/index.ts",
    "./src/types.ts",
  ],
  coverageProvider: "v8",
  coverageReporters: ["text"],
};

export default config;
