<script>
import MetaxonaBannerPost from '$lib/assets/banners/mon_logo_building_stage_banner_post.png'
import Card from '$lib/components/Card.svelte'
import Github from '$lib/icons/Github.svelte'
import { GlobeAlt, Icon } from 'svelte-hero-icons'
import projects from "$lib/contents/projects.json"
</script>

<svelte:head>
    <title>Metaxona</title>
</svelte:head>

<div class="mb-12 w-full">
    <img src={MetaxonaBannerPost} alt="Metaxona Banner" />
</div>

<section class="pb-12">

    <div class="flex flex-row justify-center items-center flex-wrap">
        <a href="https://github.com/Metaxona" target="_blank" title="Metaxona"><Github class="w-16 h-16" /></a>
    </div>
    
    <div class="flex flex-row flex-wrap gap-8 p-5 justify-center mt-12">
        {#each projects as project }    
            <Card width="w-80" height="h-auto">
                <div class="flex flex-col gap-2 justify-center items-start">
                    <span class="font-bold text-xl">{project.title}</span>
                    <p>{project.shortDescription}</p>
                    <div class="flex flex-row flex-wrap gap-4">
                        {#if project?.github }
                            <a href={project.github} target="_blank"><Github class="w-8 h-8" /></a>
                        {/if}
                        {#if project?.live }
                            <a href={project.live} target="_blank"><Icon class="w-8 h-8" src={GlobeAlt} /></a>
                        {/if}
                    </div>
                    {#if project?.stack}
                        <details>
                            <summary>Stack</summary>
                            <ul class="mt-2">
                                {#each project.stack as item }
                                    <li>- {item}</li>
                                {/each}
                            </ul>
                            
                        </details>
                    {/if}
                </div>
            </Card>
        {/each}
    </div>
    
    <div class="mt-12 flex flex-col justify-center items-center gap-4">
        <img src="https://github-readme-stats.vercel.app/api?username=Metaxona&hide=contribs,prs&show_icons=true&theme=transparent&include_all_commits=false&rank_icon=github&show_owner=true" alt="github stats">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Metaxona&size_weight=0.5&count_weight=0.5&layout=compact&hide_progress=true&theme=transparent" alt="Top Langauges">
        <small>** Private Repositories Not Included **</small>
    </div>
</section>