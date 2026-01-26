
export interface WhatIDoItem {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
}

export type categoryColorsType = {
    [key: string]: string;
};

export interface Project {
    project_id: string;
    title: string;
    description: string;
    category: string;
    completion_date: Date;
    featured: string;
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    problem_statement?: string,
    solution_overview?: string,
    thinking_process?: string,
    architecture?: string,
    technologies?: string[];
}

export interface ProjectPreviewProps {
    projectId: string;
    title: string;
    description: string;
    category: string;
    completion_date: Date;
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    featured: boolean;
    technologies?: string[];
}

export interface ProjectDetailProps extends ProjectPreviewProps {
    problem_statement?: string
    solution_overview?: string
    thinking_process?: string
    architecture?: string
    technologies?: string[];
    useCases?: string[];
    features?: string[];
    results?: {
        metric?: string,
        value?: string
    }[];
    gallery?: {
        image_url: string;
        caption?: string 
    }[];
    challenges?: {
        challenge?: string,
        solution?: string
    }[];
    futureImprovements?: string[];
}