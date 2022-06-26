const form = document.getElementById('formsignup');
const cont = document.getElementById('cont');

// form.addEventListener('submit', async (e) => {

// })


form.addEventListener('submit', async (e) => {
    console.log("google");
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    try {
        const res = await fetch('/auth/signup', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
            //need help here for setting the boundaries
        });
        // const val=await res.json();
        // console.log(val);
        cont.innerHTML = "val";
        // if(val.success==true) {
        //     window.location.href='/';
        // }
        // else {
        //     window.location.href='/i326';
        // }
    }
    catch (err) {
        console.log("err", err);
    }
})

