export default Auth

// PARENT - the flex container
<div style={{display:"flex"}}>

    // CHILD 1 - takes 50% of space
    <div style={{flex:1}}>
       <Authbanner/>
    </div>

    // CHILD 2 - takes 50% of space
    <div style={{flex:1}}>
       <Authcredentials/>
    </div>

</div>
