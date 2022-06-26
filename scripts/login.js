const form = document.getElementById('formsignup');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    try {
        const res = await fetch('/auth/signup', {
            method: 'post',
            body: JSON.stringify({email, password }),
            headers: { 'Content-Type': 'application/json' }
            //need help here for setting the boundaries
        });
    }
    catch (err) {
        console.log(err);
    }
})


