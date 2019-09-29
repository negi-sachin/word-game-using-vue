// var app=new Vue({
//     el:'#app',
//     data:{
//         message:'hello user'
//     }
// })

// var app3 = new Vue({
//     el: '#app-3',
//     data: {
//       seen: false
//     }
//   })

//   setTimeout(() => {
//       app3.seen=true
//   }, 1000);
  

//   var app5 = new Vue({
//     el: '#app-5',
//     data: {
//       message: 'Hello Vue.js!'
//     },
//     methods: {
//       reverseMessage: function () {
//         this.message = this.message.split('').reverse().join('')
//       },
//       alertit:function(){
//           alert(this.message);
//       }
//     }
//   })

//   var app6 = new Vue({
//     el: '#app-6',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })
var items=['House','Dog','Good','Laugh','thank you','Great day','nice phone','Cool weather','be happy' ];
var len =items.length;
var i=0;
var app=new Vue({
    el:'#points',
    data:{
        points:0
    }
})

var app2=new Vue({
    el:'#app2',
    data:{
        item:items[i],
        seen:true
    }
})

setInterval(()=>{
    app2.seen=false
},3000)

var app1=new Vue({
    el:'#app1',
    data:{
        message:''
    },
    methods:{
        submit:function(e){
            
            e.preventDefault();
            
            if(this.message.toLowerCase()==items[i].toLowerCase())
            {
            app.points++;
            this.message=''
            i++;
            app2.item=items[i];
            app2.seen=true;
            }
            else{
                alert('Wrong !try again');
                this.message='';
            }

            
        },
        skip:function(e){
            e.preventDefault();
            app.points--;
            this.message=''
            i++;
            app2.item=items[i];
            app2.seen=true;
            
        }
    }

})

