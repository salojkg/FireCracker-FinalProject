const form  = document.getElementById('dpForm');
console.log("validation js")
form.addEventListener('submit', (event) => {
    // handle the form data
    const preg = form.elements['pregnancies'].value;
    const glucose = form.elements['glucose'].value; 
    const bp = form.elements['bloodpressure'].value; 
    const st = form.elements['skinthickness'].value;
    const insulin = form.elements['insulin'].value;
    const bmi = form.elements['bmi'].value;
    const dpf = form.elements['dpf'].value;
    const age = form.elements['age'].value;
    console.log(preg);
    if (preg == undefined || preg == null || preg == "" || isNaN(preg) || preg < 0 || preg >= 20) {
        alert("Number of Pregancies cannot be empty and sholud ba valid number between 0 - 20");
        event.preventDefault();
    } else if (glucose == undefined || glucose == null || glucose == "" || isNaN(glucose) || glucose < 30 || glucose >= 300) {
        alert("Glucose cannot be empty and sholud ba valid number between 30 -300");
        event.preventDefault();
    } else if (bp == undefined || bp == null || bp == "" || isNaN(bp) || bp < 40 || bp >= 140) {
        alert("Blood Pressure cannot be empty and sholud ba valid number between 40 - 140");
        event.preventDefault();
    } else if (st == undefined || st == null || st == "" || isNaN(st) || st < 0 || st >= 99) {
        alert("Skin Thickness cannot be empty and sholud ba valid number between 0 - 99");
        event.preventDefault();
    }else if (insulin == undefined || insulin == null || insulin == "" || isNaN(insulin)|| insulin < 0 || insulin >= 500) {
        alert("Insulin cannot be empty and sholud ba valid number between 0 - 500");
        event.preventDefault();
    }else if (bmi == undefined || bmi == null || bmi == "" || isNaN(bmi)|| bmi < 12 || bmi >= 100) {
        alert("BMI cannot be empty and sholud ba valid number between 12 -100");
        event.preventDefault();
    }else if (dpf == undefined || dpf == null || dpf == "" || isNaN(dpf)|| dpf < 0 || dpf >= 3) {
        alert("Diabetic Pedigree function cannot be empty and sholud ba valid number 0 - 3");
        event.preventDefault();
    }else if (age == undefined || age == null || age == "" || isNaN(age)|| age < 0 || age >= 80) {
        alert("Age cannot be empty and sholud ba valid number between 0 - 80");
        event.preventDefault();
    }
});
