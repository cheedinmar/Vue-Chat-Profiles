import profileOne from "./profileOne.js";
import profileTwo from "./profileTwo.js";
import profileThree from "./profileThree.js";
import profileFour from "./profileFour.js";

export default{
    data(){
        return {
            profiles:[
                {
                    id: 1,
                    name: "Nia",
                    isFollowing: false,
                    images: "2.png"
                },
                {
                    id: 2,
                    name: "Elizabeth",
                    isFollowing: false,
                    images: "Ellipse.png"
                },
                {
                    id: 3,
                    name: "Glenn",
                    isFollowing: false,
                    images: "Ellipse.png"
                },
                {
                    id: 4,
                    name: "Abigail",
                    isFollowing: true,
                    images: "2.png"
                }
            ]
        }
    },
    components:{
        profileOne,
        profileTwo,
        profileThree,
        profileFour
    },
    template:     `
    <div class="flex  flex-wrap justify-between ">
    <profileOne 
    v-for= "profile in profiles"
    :key="profile.id"
    :prof="profile"></profileOne>
    </div>`,

    methods:{
        following(follow){
            for(profile in profiles){
                var follow= this.profile.isFollowing
                if(follow == false){
                    console.log('Following is false')
                }else{
                    console.log('Following is true')
}
            }
        }
    }

   


    

}

// <profileTwo></profileTwo>
//     <profileThree></profileThree>
//     <profileFour></profileFour>