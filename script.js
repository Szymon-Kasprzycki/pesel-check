function check() {
    // Declare values
    const pesel = document.querySelector('#pesel').value;
    const dateofbirth = document.querySelector('#dateofbirth').value;
    const genderInput = document.querySelector('input[name = "gender"]:checked').value;

    if (pesel.length != 11) return alert(`Numer pesel ma niepoprawną długość! Prawidłowa długość to 11 cyfr.`);

    const peselDate = pesel.slice(0, 6);
    const Date = [];

    //Check year of birth that person
    if (peselDate.slice(2, 4) <= 12 && peselDate.slice(2, 4) > 0) {
        Date.push("19" + peselDate.slice(0, 2));
        Date.push(peselDate.slice(2, 4));
        Date.push(peselDate.slice(4, 6));
    } else if (peselDate.slice(2, 4) <= 92 && peselDate.slice(2, 4) > 80) {
        Date.push("18" + peselDate.slice(0, 2));
        Date.push(String(peselDate.slice(2, 4) - 70));
        Date.push(peselDate.slice(4, 6));
    } else if (peselDate.slice(2, 4) <= 32 && peselDate.slice(2, 4) > 20) {
        Date.push("20" + peselDate.slice(0, 2));
        Date.push(String(peselDate.slice(2, 4) - 20));
        Date.push(peselDate.slice(4, 6));
    } else if (peselDate.slice(2, 4) <= 52 && peselDate.slice(2, 4) > 40) {
        Date.push("21" + peselDate.slice(0, 2));
        Date.push(String(peselDate.slice(2, 4) - 40));
        Date.push(peselDate.slice(4, 6));
    } else if (peselDate.slice(2, 4) <= 72 && peselDate.slice(2, 4) > 60) {
        Date.push("22" + peselDate.slice(0, 2));
        Date.push(String(peselDate.slice(2, 4) - 50));
        Date.push(peselDate.slice(4, 6));
    } else {
        alert("PESEL jest niepoprawny!");
    }

    // Compare given date and date from pesel
    if (Date[1] < 10) Date[1] = "0" + Date[1];

    // Check if dates are the same
    if (Date[2] == dateofbirth.slice(0, 2) && Date[1] == dateofbirth.slice(3, 5) && Date[0] == dateofbirth.slice(6, 10)) {
        document.querySelector(`span.birth`).innerHTML = `<span class="correct">POPRAWNA</span>`;
    } else {
        document.querySelector(`span.birth`).innerHTML = `<span class="incorrect">NIEPOPRAWNA</span>;`
    }

    // Check sex of person
    const sexNumber = pesel[9];
    if (sexNumber % 2) {
        const sex = "Mężczyzna";
        if (sex === genderInput) {
            document.querySelector(`span.sex`).innerHTML = `<span class="correct">POPRAWNA</span>`;
        } else {
            document.querySelector(`span.sex`).innerHTML = `<span class="incorrect">NIEPOPRAWNA</span>`;
        }
    } else {
        const sex = "Kobieta";
        if (sex === genderInput) {
            document.querySelector(`span.sex`).innerHTML = `<span class="correct">POPRAWNA</span>`;
        } else {
            document.querySelector(`span.sex`).innerHTML = `<span class="incorrect">NIEPOPRAWNA</span>`;
        }
    }

    // At least check the control number
    controlNumber = pesel[10];
    const sum = Number(pesel[0]) + 3 * Number(pesel[1]) + 7 * Number(pesel[2]) + 9 * Number(pesel[3]) + Number(pesel[4]) + 3 * Number(pesel[5]) + 7 * Number(pesel[6]) + 9 * Number(pesel[7]) + Number(pesel[8]) + 3 * Number(pesel[9]) + Number(pesel[10]);

    if (sum % 10) {
        document.querySelector(`span.control`).innerHTML = `<span class="incorrect">NIEPOPRAWNA</span>`;
    } else {
        document.querySelector(`span.control`).innerHTML = `<span class="correct">POPRAWNA</span>`;
    }
}