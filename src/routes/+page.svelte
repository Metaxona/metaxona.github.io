<script>
import MetaxonaBannerPost from '$lib/assets/banners/mon_logo_building_stage_banner_post.png'
import Card from '$lib/components/Card.svelte'
import Github from '$lib/icons/Github.svelte'
import { Icon, GlobeAlt } from 'svelte-hero-icons'
</script>

<svelte:head>
    <title>Metaxona</title>
</svelte:head>

<div class="mb-12">
    <img src={MetaxonaBannerPost} alt="Metaxona Banner">
</div>

<section class="pb-12">

    <div class="flex flex-row justify-center items-center flex-wrap">
        <a href="https://github.com/Metaxona" target="_blank" title="Metaxona"><Github class="w-16 h-16" /></a>
    </div>
    
    <div class="flex flex-row flex-wrap gap-8 p-5 justify-center mt-12">
        <Card width="w-80" height="h-auto">
            <div class="flex flex-col gap-2 justify-center items-start">
                <span class="font-bold text-xl">ScrowLite</span>
                <p>An Escrow DApp</p>
                <div class="flex flex-row flex-wrap gap-4">
                    <a href="https://github.com/Metaxona/ScrowLiteDApp" target="_blank"><Github class="w-8 h-8" /></a>
                    <a href="/ScrowLiteDApp" target="_blank"><Icon class="w-8 h-8" src={GlobeAlt} /></a>
                </div>
            </div>
        </Card>
        <Card width="w-80" height="h-auto">
            <div class="flex flex-col gap-2 justify-center items-start">
                <span class="font-bold text-xl">ScrowLite (Contract)</span>
                <p>An Escrow Solidity Contract</p>
                <div class="flex flex-row flex-wrap gap-4">
                    <a href="https://github.com/Metaxona/ScrowLite" target="_blank"><Github class="w-8 h-8" /></a>
                </div>
            </div>
        </Card>
        <Card width="w-80" height="h-auto">
            <div class="flex flex-col gap-2 justify-center items-start">
                <span class="font-bold text-xl">ERC Balance Library</span>
                <p>A Solidity Smart Contract For Checking ERC 721, 20, and 1155 Balance</p>
                <div class="flex flex-row flex-wrap gap-4">
                    <a href="https://github.com/Metaxona/ERCBalanceLibrary" target="_blank"><Github class="w-8 h-8" /></a>
                </div>
            </div>
        </Card>
        <Card width="w-80" height="h-auto">
            <div class="flex flex-col gap-2 justify-center items-start">
                <span class="font-bold text-xl">Solidity Tools</span>
                <p>Solidity Tools Used For Use When Developing on EVM Chains (Incomplete)</p>
                <div class="flex flex-row flex-wrap gap-4">
                    <a href="https://github.com/Metaxona/SolidityTools" target="_blank"><Github class="w-8 h-8" /></a>
                    <a href="https://solidity-tools.vercel.app" target="_blank"><Icon class="w-8 h-8" src={GlobeAlt} /></a>
                </div>
            </div>
        </Card>
        <Card width="w-80" height="h-auto">
            <div class="flex flex-col gap-2 justify-center items-start">
                <span class="font-bold text-xl">Solidity Contract Size Checker</span>
                <p>A Smart Contract used to check the size of a contract in the same chain</p>
                <div class="flex flex-row flex-wrap gap-4">
                    <a href="https://github.com/Metaxona/Solidity_Contract_Size_Checker" target="_blank"><Github class="w-8 h-8" /></a>
                </div>
            </div>
        </Card>
        <Card width="w-80" height="h-auto">
            <div class="flex flex-col gap-2 justify-center items-start">
                <span class="font-bold text-xl">Calc Fee Library</span>
                <p>A Solidity Library For Calculating Fees in Percentage</p>
                <div class="flex flex-row flex-wrap gap-4">
                    <a href="https://github.com/Metaxona/CalcFeeLibrary" target="_blank"><Github class="w-8 h-8" /></a>
                </div>
            </div>
        </Card>
    </div>
    
    <div class="mt-12 flex justify-center items-center">
        <img src="https://github-readme-stats.vercel.app/api?username=Metaxona&hide=contribs,prs&show_icons=true&theme=transparent" alt="github stats">
    </div>
</section>