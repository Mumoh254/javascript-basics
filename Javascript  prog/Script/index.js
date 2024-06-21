console.log("hellow   world")

//variables  and  oparators
//var   container  to  store  data
var Num  =  23;

//print  str  and var  with  it
var  name  =  "Sgupta"
console.log( " hellow  my  name  is " +name)
var  str = "my name  is "+name;
console.log(str)

var  firstName  =  "peter"
var   secondName  = "Mumo"

console.log(` the  name  is ${firstName}   ${secondName}`)
let  num  =  23
let  num2 =  10
let  result=num+num2
console.log(`result  is ${result}`)

//oparators 
//oparators   something that  help   you  perform  oparations  like  coputation analysis

//Binary  oparators    oparators  that  work  with  two  oparents  or  values 
    //arithmetic   op    used   for  cal  - + / %
    let   result2  = num %  num2 ;

    //relational  oparators  or  comparison  oparators
    //compare  data  ,,   output  is  always true  or   false 
      //>  < >=  <=  != ==

  
      let  Result = num != num2
      console.log(Result)

      //identity   op
      //  ===  !==
      let  esult = num === num2;
      //logical   op
      //&& || ! 
      console.log( 2 === 2)
      console.log( 2===2  && 4===4)
      console.log( 2===2  &&  2 ===4 )
      console.log( 2===2  || 4===4)
      console.log( 2===2  ||  2 ===4 )

      let  number  =  54 ;
      console.log( num>30  &&  num< 50)

      //!  if  its   false  it  will make  it  true  , true  false
      console.log(!true)
      console.log(!false)
      console.log(!(number ===  54))
      console.log(!(number ===  44))

      //assignment  oparator   assign  data a to  variable  = += -+ /=
      a =  "peter"
      number+=20
      number-=20
      number/= 10
      number%= 2
      console.log(number)

      //unary  oparators  work  with  one  operant  =  ++  --
      let  b    = 2  
  
      b++
      console.log(b)

      //post  increment  
      let  z  =   2;
      let  d  =  0;
       d  =  z++
      console.log(d)
      // pre  increment 
      let  g  =   2;
      let  h  =  0;
       h  =  ++g
      console.log(h)
      //conditional  statements //  help  u  perform  operation  based  on  condition or  comparison

    //   if(condition )  {
    //     //code
    //     //executes  if  the  block  is  true
    //   }
      let  age =  51; //initialization
      
    if  (age > 18)  {
        console.log(  "  YOU  ARE  AUTHENTICATED")
    }  else  {
        console.log("Not  Authenticated")
    }
       console.log("  auth ")


     if ( age >= 20  &&  age<=50)  {
        console.log ("Authenticated")
     }  else  {
        console.log("  You  are  not  allowed")
     }

     //serveral   conditions use  if  else   if  statement

     let  grade  =  37;

     if ( grade >= 70 &&  grade<= 100)  {
        console.log("Grade  A ")

     }
     else  if  (grade>=60  &&  grade<70)  {
        console.log("Grade B")
     }  else   {
        console.log( "Grade C ")
     }

     //switch  case  

     //does   not  work   for  a  range  of  values
     //  fall  thro  in    switch  statement 
     let  status  =  2;

     switch(status) {
        case 1: {
            console.log("  Junior  developer")
            break;
        }
        case 2: {
            console.log(  " Security  Engineer")
            break;
        }
        case 3: {
            console.log( "Network Engineer")
            break;
        }
        case  4: {
            console.log("Project  Manager")
            break;

        }
        case 5:  {
            console.log("Human Resorce ")
            break;
        } default :  {
            console.log("  get  out   you  are  not  a worker  here")
        }
        
     }

     if  (  status == 1 )  {
         console.log("junior  dev")
     } else  if  ( status ==  2)  {
        console.log(  "  Senior  dev")
     }

     //tenary  oparator   work  on  3   oparents
     //?:   for    writing  a   conditional  statement 

    //    cond? exp1 : exp 2
    let num4  =  5  
    num<10?  console.log("Less"): num > 10? console.log("cool");

    //loops  something  that  repeats itself  again and  again
    //
    //while  do while   for

    //while 
    var   num3 = 1;

    while(num3 > 10) 
       {
        console.log("I am a  loop")
        num=11;
      }
      //infinite  loop
      //exit  control  loop

      //do  while  loop
       do {
        console.log(num3)
        num++;
       }
       while(num<=10) //execution  happens   first 
       //entry control  loop


       //for   loop

       for (let num4 =3; num4 <= 3; num++)  {
             console.log(num4)
       }

       //functions  in  js  block  of  code  to   perform  a  specific  task
       let  num5  =  5;
       let num6 =  6;

       add
        {
        let  c  =  num5+num6
       }

       add();

       function dosmthg()  {
          //function  block
          console.log("i  am  a function")
       }

       dosmthg()

       function greeting(name , age)  {
        console.log(`hellow ${name}`)
        console.log(`my  age   is ${age}`)
       }
       greeting("peter");
       greeting("mumo" , 24);

       function  grettings ( greet , name="Mumo" )  {

        console.log(` ${greet} ${name}`)
       }
       grettings( "hellow " , "Peter")

         function  add()  {
            let a  =  34;
            let  b  =  10;
            let c = a+b;
            return c;  //  after  return  nothing   gets   executed
         }
         console.log(add());
          //function   return  a  single  value

          //arrow   functions 

          dosm =()=>{
            console.log("i am an  arrow   function")
            return 2;
          }  
          dosm();

        //   return 4

          dosm = ()=> 4;   

          //callback   function 
          function  call  (name)  {
               name();
          }
          call( function () {console.log("hellow")})

          //let   var  and   cost 
          var  firstName  =  "Peter";
          // var is    function  scope  no matter   how  many  levels  of  code  u  have 
          //function  scope
          function lt ()  {
          var secondName = "Mumo"
          }

          console.log(secondName)

          lt()

          // let  are  always block  scope   can  only  access  it in  that  scope
          function  print ()  {
            let firstName = "js" 
            {
              console.log(firstName)
            }
          }
          //const
          const  nuM = 23;
          //used  to  store   constant variable

          //arrays   collection  of  data  of  same  type
          let arr =  [ 23, 45, 67, 89, 90]
          //no  of  ele  arr  stores  is  the  length  of  the  arr
          //all  no  are  stored  at a  particular  index
          console.log(arr[1]);
          console.log(arr[4]);
          arr[3] =  478;

          //loop  thro  an  arr
          for ( let i = 0 ; i < arr.length ; i++)  {
            console.log(i)
          }

          //objects  Collection  of  properties  and   function 
          //  a  way  to  store  related  data  at  oce 
          let  person = {

            //properties 
            name: "Saurabh",
            age: 23,
            city: "New  York"

          }

          console.log(person)
          //accessing  object  properties  obj name . property  name 
          console.log(person.name)
          //adding   data   from  outside  the   property

          //bjn name  .  any  property  u  want  to  add
          //DOT  Notation
          person.gender =  "male"
          //Array  Notation
          person["hobby"] = "Footbal"
          console.log(person.hobby)
          

          let newProp = "yob";

          person[newProp] = "1900";
          console.log(person.yob)
          
          //dot   notation  considers newprop  as  a  property  
          person.newProp = "1922"
          console.log(person.yob)

          //if  ur  properties  are  dynamic  use   arry  notation


          //function  inside  obj

          let  person = {

            //properties 
            name: "Saurabh",
            age: 23,
            city: "New  York",

            print: function()  {
              console.log({
                message: "i  am  a  fn inside  an  obj",
                //to  aces  props  here   u  have  to  use  this  op
                //  this   means  the   current   obj
              })
              console.log( this) ;
              console.log(this.name) ;
              console.log(this.city) ;
            }
          }
          console.log(person.print());


          //
          let  avengers =  {
            name: "Thor",
            age:  1600,
            planet: "asgard",

          }
          //copying  obj  props  to  variables 
          //Destructuring  obj
           //  variable  name    //*css*/`
            //variable  name    should   exactly  be  same   as  properties
            let  avengers2 =  {
              name: "Thor",
              age:  1600,
              planet: "asgard",
  
            } 

          let { name , planet } = avengers2;
          //obj  des 

          console.log(name)

          //array   of   objects
          let  avenger =  [

            {
              name: "Captain  America ",
              age: 2600,
            },
          
            {
              name: "Iron  man",
              age: 2600,
            },
            
            {
              name: "Hulk",
              age: 2600,
            }
          ]
          console.log(avenger[0])
          console.log(avenger[0].name);

          for (let  i =0 ; i < avenger.length ; i++)  {
            console.log(avenger[i].name)
          }
          
          //memory   allocation  &&  spread  typ
          //all  your  premitive  types  like   num  boolean  are  stored  in  a  mem  known  as  stack
          //obj and  array  are  stored  in  heap  memory 
          let  obj1 = {
            name: "Sgupta"
          }
          let obj2 = obj1 //refrence  op they  are  holding   memory  adress  

          //var  u  create   hold  the  ref   not  the   actual  data


          //how   to  perform  a  perform  a  proper  copy

          let   no =  [ 21,  23, 34, 56,67]
          console.log(...no)

          let num8 =[ ...no];
          //functions  in  array 
          //for  each  map  filter

          let  data =  [ 12,  23, 34, 45, 67, 89]
          data.forEach( ( currentE , currentI , arr)=>{
            console.log(currentE , currentI , arr)
          }) ;
          //get   aces  to  index  and  whole  arr

          //map  
          //map  returns   something 
        
          data.map(  function( crE  , crI  , arr) {
            console.log( crE , crI , arr)
            return  crE+2;

          })
          //filter   function   //  used  to  filter   out  arrays
          //filter   always  return  and  you  should  pass  a condition
          
         let   filterData =   data.filter((  ele )=>{
            return ele == 45;
          });
            console.log(filterData);
          
            let  countries  =  [
              {
                 cName: "Kenya",
                  zip: "12500"
              }
              ,
              {
                 cName: "UG",
                 zip: "9800"
              },
              {
                cName: "Tz",
                zip: "34555"
              }
            ]
 let cZip  =  countries.filter( (country)=>{
    return countries.zip == 9800;

  });

  console.log(cZip);

  let  datF  =  countries.filter((country)=>{
    return countries.cName;
  });
  console.log(datF);


  //find  and   sort 
  //diff  btwn filter  and   find 
  //filter  goes   thro  the  whole  array and   finds  all  the   matches  find  only  works for  the  first  occurance 

  let   find  = data.find((ele)=>{
    return  ele==45
  });
  console.log(find);

  //sort 
  let  sortedNum =  data.sort()  //  accending  order 

  data.sort(( a , b )=> {
    //sort  in  desending  order
    return b -a  
;
  })

  //sort  arr  of  obj
  let  sortedAV =  avenger.sort((  a,  b)=>{
    return a.age -  b.age  //assending  order
    return a.age -  b.age  // descending  order
  })

  //find  index  //  gives   first  occurance  but  dosent  return the  ele 

  let dataP =  num.findIndex((ele)=>{
    return ele === 45;
  })

  //generator  function   //  function  used  to  generate  end  number  of  values 
  //generator   function   will   remember  wat   it  returned  last  tym  and  it   will  return  something  else  
  //don't  use  return  will  terminate  the   function 
  function* generateId ()  
  {

     //yield  is  like  return  but   it   dosen't terminate  the   functionn
    yield 1;

    yield 2;

    yield 3;

    }

    let  genId = generateId();
    console.log(genId.next());
     //checks  if al  the  yields  are  done
    console.log(gen.next().done)

    //generate  icrementated  values

    function * genVAlues ()
     {
      let  start  0;

         while (true)
          {
          yield ++start;//icrement  happens  first 
          yield start ++ ;

          end ; //suspend  the  execution 


          }
          
     }
