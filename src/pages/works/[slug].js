// pages/works/[slug].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { fetchProjectDetails } from '@/services/api';
import Banner from '@/components/ui/banner';

const ProjectDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [work, setWork] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchProjectDetails(slug);
                setWork(data.content);
            } catch (error) {
                console.error('Error loading work list:', error);
            }
        };
        loadData();
    }, [slug]);
console.log(work)
    return (
        <Layout title={slug}>
            {work.map(project => (
               <Banner title={project.title} image={project.banner}/>
            ))}
        
        </Layout>
    );
};

export default ProjectDetail;
