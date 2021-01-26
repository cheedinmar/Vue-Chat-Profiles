 import profile from "./components/profile/indexProfile.js"
 import mutualFollow from "./components/mutualFollow/mutual.js"
 import button from "./components/button.js"
 import text from "./components/text.js";

 const main = {
     methods:{
         watchCount(value){
            console.log(value, "watching from parent")
            this.counthold= value
         }
     },
     data(){
        return {
            counthold:0
        }
     },
     template: `
     <div class="w-screen h-screen bg-gray-100 flex items-center justify-center">
     <countButton/>
       <div class="height w-80  border bg-white rounded-3xl flex flex-col p-5">
        <mutualFollow></mutualFollow>
        <profile></profile>

        </div>
     <countButton @countProgress=watchCount />
     <paragraph :countt= counthold />

        </div>`
 }

 const mainApp = Vue.createApp(main)
 mainApp.component('mutualFollow', mutualFollow);
 mainApp.component('profile', profile);
 mainApp.component('countButton', button);
 mainApp.component('paragraph', text);
 mainApp.mount('#root')