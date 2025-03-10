function calculateAge() {
    let dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        document.getElementById("result").innerText = "Please enter your date of birth!";
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust for negative month difference
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += (months < 0) ? 12 : 0;
    }

    if (days < 0) {
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    document.getElementById("result").innerText = 
        `You are ${years} years, ${months} months, and ${days} days old.`;
}
