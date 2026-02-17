// class x {
//     fun(){
//         console.log("funing");
        
//     }
// }

// let yyyyyyyyyyyyyyyyyyyyyyyy = new x()

// yyyyyyyyyyyyyyyyyyyyyyyy.fun()


// class father  {
//     constructor(){}
//     a(x,y,z){
//     console.log("papa",x+y+z);
//   }
// }

// class son extends father {

//   a(x,y){
//     console.log("mere rs ", x+y);
//   }
// }

// let beta =  new son();
// beta.a(10,10,10)



class x {
  constructor(name){
    this.v = name;
  }
  g(){
    console.log(this.v , "how ?");
    
  }
}
let t = new x("ttttttttttttttttt")

t.g()