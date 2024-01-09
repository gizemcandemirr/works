import React, { useEffect, useState } from 'react';
import { fetchWorkList } from '@/services/api';
import ProjectCard from './project-card';

const WorksList = ({ activeCategory }) => {
    const [workList, setWorkList] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchWorkList();
                setWorkList(data.projects);
            } catch (error) {
                console.error('Error loading work list:', error);
            }
        };
        loadData();
    }, []);

    const mapServiceToCategory = (service) => {
        const normalizedService = service;
        if (normalizedService.includes('marketing') || normalizedService.includes('strategy')) {
            return 'Marketing & Strategy';
        }
        if (normalizedService.includes('ux') || normalizedService.includes('user experience') || normalizedService.includes('development')) {
            return 'UX & Development';
        }
        if (normalizedService.includes('performance') || normalizedService.includes('media buying')) {
            return 'Performance Marketing';
        }
        return 'All';
    };

    const filteredWorkList = workList.filter(project => {
        if (activeCategory === 'ALL') return true;
        return project.services.some(service =>
            mapServiceToCategory(service) === activeCategory
        );
    });

    return (
        <div className="flex flex-col mt-12 space-y-12 h-full">
            {filteredWorkList.map(project => (
                <ProjectCard
                    key={project.link}
                    client={project.client}
                    country={project.country}
                    image={project.image}
                    link={project.link}
                    title={project.title}
                />
            ))}
        </div>
    );
};

export default WorksList;
