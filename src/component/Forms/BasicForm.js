import React from 'react'

const BasicForm = () => {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const[allEntry,setAllEntry] = React.useState([]);

    const submitForm = (e)=>{
        e.preventDefault();
        if(email && password){
         const newEntry = {id:new Date().getTime().toString(),email : email,password:password};
         setAllEntry([...allEntry,newEntry]);
         setEmail("");
         setPassword("");
        }else{
          alert("Plzz fill data");
        }
    }

  return (
    <>
         <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"  value={email} onChange= {(e)=> setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="email">Password</label>
                <input type="text" name="password" id="password" value={password} onChange= {(e)=> setPassword(e.target.value)}/>
            </div>

            <button type="submit">Login</button>
         </form>    
         <div>
          {
            allEntry.map((currElem)=>{
              return(
                   <div key={currElem.id}>
                    <p>{currElem.nam}</p>
                    <p>{currElem.email}</p>
                   </div>
              )
              
            })
          }
         </div>
    </>
  )
}

export default BasicForm
   