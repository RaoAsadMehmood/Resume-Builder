let myName: any = document.getElementById("name");

let desig: any = document.getElementById("Designation");

let phone: any = document.getElementById("Phone");

let email: any = document.getElementById("email");

let add: any = document.getElementById("add");

let pass: any = document.getElementById("pass");

let qualification: any = document.getElementById("qualification");

let uni: any = document.getElementById("uni");

let skill1: any = document.getElementById("skill1");

let skill2: any = document.getElementById("skill2");

let skill3: any = document.getElementById("skill3");

let styear: any = document.getElementById("styear");

let endyear: any = document.getElementById("endyear");

let comp: any = document.getElementById("comp");

let comploc: any = document.getElementById("comploc");

let job: any = document.getElementById("job");

let achieve1: any = document.getElementById("achieve1");

let achieve2: any = document.getElementById("achieve2");

let achieve3: any = document.getElementById("achieve3");

let submitBtn = document.getElementById('submit-btn')

let pic = document.getElementById('pic')

let form = document.getElementById('form')




form?.addEventListener('submit', (e) => {
    e.preventDefault()

    localStorage.setItem("name", myName.value)
    localStorage.setItem("desig", desig.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("add", add.value)
    localStorage.setItem("pass", pass.value)
    localStorage.setItem("qualification", qualification.value)
    localStorage.setItem("uni", uni.value)
    localStorage.setItem("skill1", skill1.value)
    localStorage.setItem("skill2", skill2.value)
    localStorage.setItem("skill3", skill3.value)
    localStorage.setItem("styear", styear.value)
    localStorage.setItem("endyear", endyear.value)
    localStorage.setItem("comp", comp.value)
    localStorage.setItem("comploc", comploc.value)
    localStorage.setItem("job", job.value)
    localStorage.setItem("achieve1", achieve1.value)
    localStorage.setItem("achieve2", achieve2.value)
    localStorage.setItem("achieve3", achieve3.value)
    
    
    
    if (pic.files && pic.files[0]) {
        let reader = new FileReader()
        reader.addEventListener("load", () => {
            let textImg : any = reader.result
            localStorage.setItem("profile_pic", textImg)
        })
        reader.readAsDataURL(pic.files[0])
    }

    window.location.href = "resume/resume.html"
})