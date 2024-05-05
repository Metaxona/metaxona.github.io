<script>

    export let postURL;
    export let title;
    export let summary = '';
    export let source = 'Metaxona';

    let url = encodeURIComponent(postURL)

    let postTitle = encodeURIComponent(title)
    let titleExtension = encodeURIComponent(" | Read More From The Link Above")
    let titleExtension2 = encodeURIComponent(" | Read More From The Link Below")

    let twitter = `https://twitter.com/intent/tweet?url=${url}&text=${postTitle}${titleExtension2}`;
    let facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    let tg = `https://t.me/share/url?url=${url}&text=${postTitle}${titleExtension}`;
    let reddit = `https://www.reddit.com/submit?url=${url}&title=${title}`;
    let linkedin =`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}&source=${source}`;
    
</script>

<section>
    <span><small>Share Post On: </small></span>
    <div class="flex flex-row flex-wrap justify-center items-center">
        <a class="p-2 w-fit font-bold hover:scale-105 bg-cyan-400 text-white" href={twitter} target="_blank" title="Share On Twitter">Twitter</a>
        <a class="p-2 w-fit font-bold hover:scale-105 bg-blue-600 text-white" href={facebook} target="_blank" title="Share On Facebook">Facebook</a>
        <a class="p-2 w-fit font-bold hover:scale-105 bg-blue-500 text-white" href={tg} target="_blank" title="Share On Telegram">Telegram</a>
        <a class="p-2 w-fit font-bold hover:scale-105 bg-red-600 text-white" href={reddit} target="_blank" title="Share On Reddit">Reddit</a>
        <a class="p-2 w-fit font-bold hover:scale-105 bg-blue-500 text-white" href={linkedin} target="_blank" title="Share On Linkedin">Linkedin</a>
    </div>
</section>

<style>
    a {
        text-shadow:
            3px 3px 0 #000,
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    }
</style>