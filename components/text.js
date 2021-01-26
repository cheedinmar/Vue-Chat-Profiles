export default{
    template:  `
    <p class="mx-6 font-black"  :class="(countt >=6 ? 'text-blue-700' : 'text-yellow-400')"> Any text {{countt}} </p>`,
    data(){
        return {
            isActive: true,
            hasError: false,
            display: true,
            
        }
    },
    props:['mycount', 'countt']
}
 
