declare module "conventional-changelog-conventionalcommits" {
  export default function createPreset(options?: {
    types: { type: string; section?: string; hidden?: boolean }[];
    commitUrlFormat: string;
    issueUrlFormat: string;
    compareUrlFormat: string;
    userUrlFormat: string;
    releaseCommitMessageFormat: string;
    issuePrefixes: string[];
  }): Promise<any>;
}
