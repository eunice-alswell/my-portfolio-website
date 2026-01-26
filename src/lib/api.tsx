import type { ProjectPreviewProps, ProjectDetailProps, Project } from "./types"
const baseUrl = import.meta.env.VITE_BASE_URL

const projectUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/projects`
const projectTechUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/project_technologies`
const projectUseCasesUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/project_use_cases`
const projectFeaturesUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/project_features`
const projectResultsUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/project_results`
const projectGalleryUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/project_gallery`
const projectChallengesUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/project_challenges`
const projectFutureImprovementsUrl = `${baseUrl}/${import.meta.env.VITE_SHEET_ID}/project_future_improvements`

const fetchData = async (url: string) =>{
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}

export const getProjectPreviews = async ():Promise<ProjectPreviewProps[]> => {
    const [projects,technologies] = await Promise.all([
        fetchData(projectUrl),
        fetchData(projectTechUrl)
    ])

    // console.log('technologies data:', technologies);
    // console.log('First project data:', projects[0]);

    const result = projects.map( (project: Project): ProjectPreviewProps =>{
        const techStack = technologies
        .filter((tech: { project_id: string, technology: string }) => tech.project_id === project.project_id )
        .map((tech: { project_id: string, technology: string }) => tech.technology )

        // console.log(`Project ${project.project_id} (${project.title}):`, {
        //     techStack,
        //     rawTechnologies: technologies.filter((tech: { project_id: string }) => tech.project_id === project.project_id)
        // });

        return {
            projectId: project.project_id,
            title: project.title,
            description: project.description,
            category: project.category,
            completion_date: new Date(project.completion_date),
            image_url: project.image_url,
            demo_url: project.demo_url,
            github_url: project.github_url,
            featured: project.featured === 'TRUE',
            technologies: techStack
        }
    })
    
    // console.log('All projects with technologies:', result);
    return result;
}

export const getProjectDetail = async (projectId: string):Promise<ProjectDetailProps> => {
    const [
        projects,
        technologies,
        useCases,
        features,
        results,
        gallery,
        challenges,
        futureImprovements
    ] = await Promise.all([
        fetchData(projectUrl),
        fetchData(projectTechUrl),
        fetchData(projectUseCasesUrl),
        fetchData(projectFeaturesUrl),
        fetchData(projectResultsUrl),
        fetchData(projectGalleryUrl),
        fetchData(projectChallengesUrl),
        fetchData(projectFutureImprovementsUrl)
    ])

    const project = projects.find( (p: Project) => p.project_id === projectId );

    if (!project) {
        throw new Error('Project not found');
    }

    return{
        ...project,
        projectId: project.project_id,
        featured: project.featured === 'TRUE',
        technologies: technologies
            .filter((tech: { 
                project_id: string, 
                technology: string 
            }) => tech.project_id === project.project_id )
            .map((tech: { 
                project_id: string, 
                technology: string 
            }) => tech.technology ),
        useCases: useCases
            .filter((useCase: { 
                project_id: string, 
                use_case: string 
            }) => useCase.project_id === project.project_id )
            .map((useCase: { 
                project_id: string, 
                use_case: string 
            }) => useCase.use_case ),

        features: features
            .filter((feature: { 
                project_id: string, 
                feature: string 
            }) => feature.project_id === project.project_id )
            .map((feature: { 
                project_id: string, 
                feature: string 
            }) => feature.feature ),

        results: results
            .filter((result: { 
                project_id: string, 
                metric: string, 
                value: string 
            }) => result.project_id === project.project_id )
            .map((result: { 
                project_id: string, 
                metric: string, 
                value: string 
            }) => ({
                metric: result.metric,
                value: result.value
            })),
        gallery: gallery
            .filter((item: { 
                project_id: string, 
                image_url: string, 
                caption?: string 
            }) => item.project_id === project.project_id )
            .map((item: { 
                project_id: string, 
                image_url: string, 
                caption?: string 
            }) => ({
                image_url: item.image_url,
                caption: item.caption
            })),
        challenges: challenges
            .filter((challenge: { 
                project_id: string, 
                challenge?: string, 
                solution?: string 
            }) => challenge.project_id === project.project_id )
            .map((challenge: { 
                project_id: string, 
                challenge?: string, 
                solution?: string 
            }) => ({
                challenge: challenge.challenge,
                solution: challenge.solution
            })),
        futureImprovements: futureImprovements
            .filter((improvement: { 
                project_id: string, 
                improvement: string 
            }) => improvement.project_id === project.project_id )
            .map((improvement: { 
                project_id: string, 
                improvement: string 
            }) => improvement.improvement )
    }
}
