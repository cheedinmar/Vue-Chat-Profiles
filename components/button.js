// import paragraph from "./pText.js";
// export default  {
//     components:{
//         paragraph
//     },
//     data() {
        
//       return {
//         count: 0

       
//       }
//     },
//     template: `
//       <button class=" rounded-3xl   text-white font-black leading-5 bg-blue-600 mr-6 px-3 py-2" @click=monitor()>
//         <paragraph :mycount=count />
//       </button>`,
//       methods:{
//           monitor(e){
//             this.count= this.count +1;

//             this.$emit('countProgress', this.count)
//           }
//       }
//   }
// //   v-on:click= monitor