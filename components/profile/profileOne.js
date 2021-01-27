export default{
    template:   `
    <div class="flex  flex-col items-center justify-center border width h-44 rounded-xl mb-3 hover:transform hover:-translate-y-10  hover:shadow hover:shadow-2xl ">
    <div class="rounded full imgContainer mb-1.5">
        <img :src="'./images/User/'+prof.images">
    </div>
    <p class="mb-3 font-black leading-5">{{prof.name}}</p>
    <button class="px-2  h-10 rounded-3xl px-5  text-white font-black leading-5" :class="(prof.isFollowing == false ? 'bg-blue-600' : 'bg-blue-300')"  >{{(prof.isFollowing == true ? "Following" : "Follow")}} </button>
    
</div>
    `,
    props: ['prof'],
    
}

