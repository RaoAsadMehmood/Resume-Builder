let myName = localStorage.getItem("name")
window.addEventListener('load', () => {
    let desig = localStorage.getItem("desig")
    let phone = localStorage.getItem("phone")
    let email = localStorage.getItem("email")
    let add = localStorage.getItem("add")
    let pass = localStorage.getItem("pass")
    let qualification = localStorage.getItem("qualification")
    let uni = localStorage.getItem("uni")
    let skill1 = localStorage.getItem("skill1")
    let skill2 = localStorage.getItem("skill2")
    let skill3 = localStorage.getItem("skill3")
    let styear = localStorage.getItem("styear")
    let endyear = localStorage.getItem("endyear")
    let comp = localStorage.getItem("comp")
    let comploc = localStorage.getItem("comploc")
    let job = localStorage.getItem("job")
    let achieve1 = localStorage.getItem("achieve1")
    let achieve2 = localStorage.getItem("achieve2")
    let achieve3 = localStorage.getItem("achieve3")
    let picture = localStorage.getItem("profile_pic")


    let resName: any = document.getElementById('resName')
    resName.textContent = myName

    let resDesig: any = document.getElementById('resDesig')
    resDesig.textContent = desig

    let resPhone: any = document.getElementById('resPhone')
    resPhone.textContent = phone

    let resEmail: any = document.getElementById('resEmail')
    resEmail.textContent = email

    let resAddress: any = document.getElementById('resAddress')
    resAddress.textContent = add

    let resPass: any = document.getElementById('resPass')
    resPass.textContent = pass

    let resDegree: any = document.getElementById('resDegree')
    resDegree.textContent = qualification

    let resIns: any = document.getElementById('resIns')
    resIns.textContent = uni

    let resSkill1: any = document.getElementById('resSkill1')
    resSkill1.textContent = skill1

    let resSkill2: any = document.getElementById('resSkill2')
    resSkill2.textContent = skill2

    let resSkill3: any = document.getElementById('resSkill3')
    resSkill3.textContent = skill3

    let resStartyear: any = document.getElementById('resStartyear')
    resStartyear.textContent = styear

    let resEndYear: any = document.getElementById('resEndYear')
    resEndYear.textContent = endyear

    let resCompany: any = document.getElementById('resCompany')
    resCompany.textContent = comp

    let resCompLoc: any = document.getElementById('resCompLoc')
    resCompLoc.textContent = comploc

    let resJob: any = document.getElementById('resJob')
    resJob.textContent = job

    let resAcheive1: any = document.getElementById('resAcheive1')
    resAcheive1.textContent = achieve1

    let resAcheive2: any = document.getElementById('resAcheive2')
    resAcheive2.textContent = achieve2

    let resAcheive3: any = document.getElementById('resAcheive3')
    resAcheive3.textContent = achieve3

    let resImg: any = document.getElementById('resImg')
    resImg.src = picture

})

// ----------Print_Button----------

let print_btn = document.getElementById('print_btn')
print_btn?.addEventListener('click', () => {
    window.print()
})



// -----------Edit_button--------------
let edit_btn = document.getElementById('edit_btn')
let anc = document.getElementById('anc')

edit_btn?.addEventListener('click', () => {
    window.history.back()
})

// -----------Share_button--------------
let share_btn = document.getElementById('share_btn')
let userName;
if (myName) {
    userName = myName.toLowerCase().replace(/\s+/g, '-')
} else {
    userName = 'user'
}

let baseUrl  = "http://127.0.0.1:5500/resume.html";
let uniqueUrl = `${baseUrl}?/${myName}`

share_btn?.addEventListener('click', () => {
anc?.setAttribute('href',uniqueUrl)
})

// -----------copy_button--------------
let copy_btn = document.getElementById('copy_btn')

copy_btn?.addEventListener('click', () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Copied to clipboard")
    })    


})
