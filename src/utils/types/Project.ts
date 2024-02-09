import { ProjectStatisticType } from "./ProjectStatistic";

export interface IProject {
    name: string;
    slug: string;
    type: string;
    methodology: string;
    developer: string;
    id: string;
    activity: IProjectActivity[]
    emissions: string;
    confidence: string;
    statistics: ProjectStatisticType[]
}

export interface IProjectActivity {
    initials: string;
    name: string;
    action: string;
    timestamp: string;
}