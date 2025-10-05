const lenght = document.querySelector(".lenght");
const weight = document.querySelector(".weight");
const temperature = document.querySelector(".temperature");
const options = document.querySelector(".options");

options.addEventListener("click", (e) => {
    if(["lenght", "weight", "temperature"].includes(e.target.classList[0])){
        createForm(e.target.classList[0]);
        document.querySelector("#value").required = true;
    }

    const formClicked = e.target.textContent;

    const submit = document.querySelector(".button");
    submit.addEventListener("click", (es) =>{
        control_forms(es, formClicked);
    });
})

function control_forms(es, formClicked = "Lenght"){
        es.preventDefault();

        const input = document.querySelector("#value").value;
        const from = document.querySelector("#from").value;
        const to = document.querySelector("#to").value;
        
        let resultOperation;
        if(formClicked === "Temperature"){
            resultOperation = calculateTemperature(input, from, to);
        } else if(formClicked == "Lenght"){
            resultOperation = calculateLenght(input, from, to);
        } else if(formClicked == "Weight"){
            resultOperation = calculateWeight(input, from, to);
        }

        // Dissapear form
        document.querySelector("form").style.display = "none";

        const res = document.createElement("div");
        res.classList.add("res");
        const h3 = document.createElement("h3");
        const h2 = document.createElement("h2");
        const backButton = document.createElement("button");
        backButton.classList.add("reset");
        h3.textContent = "Result of your calculation:"
        h2.textContent = `${input} ${from} = ${resultOperation} ${to}`
        backButton.textContent = "Reset";

        res.appendChild(h3);
        res.appendChild(h2);
        res.appendChild(backButton);

        document.querySelector(".form-container").appendChild(res);


        backButton.addEventListener("click", ()=> {
            res.remove();
            document.querySelector("form").style.display = "flex";
        });
}

const submit = document.querySelector(".button");

    submit.addEventListener("click", (es) =>{
        control_forms(es);
    })

function calculateLenght(input, from, to){
    const milimeterConvertions = {
        "milimeter": m => m,
        "centimeter": m => m / 10,
        "meter": m => m / 1000,
        "kilometer": m => m / 1e+6,
        "inch": m => m / 25.4,
        "foot": m => m / 304.8,
        "yard": m => m / 914.4,
        "mile": m => m / 1.609e+6
    }

    const centimeterConvertions = {
        "milimeter": c => c * 10,
        "centimeter": c => c,
        "meter": c => c / 100,
        "kilometer": c => c / 100000,
        "inch": c => c / 2.54,
        "foot": c => c / 30.48,
        "yard": c => c / 91.44,
        "mile": c => c / 160934
    }

    const meterConvertions = {
        "milimeter": m => m * 1000,
        "centimeter": m => m * 100,
        "meter": m => m,
        "kilometer": m => m / 1000,
        "inch": m => m * 39.3701,
        "foot": m => m * 3.28084,
        "yard": m => m * 1.09361,
        "mile": m => m / 1609.34
    }

    const kilometerConvertions = {
        "milimeter": k => k * 1e+6,
        "centimeter": k => k * 100000,
        "meter": k => k * 1000,
        "kilometer": k => k,
        "inch": k => k * 39370.1,
        "foot": k => k * 3280.84,
        "yard": k => k * 1093.61,
        "mile": k => k / 1.609
    }

    const inchConvertions = {
        "milimeter": i => i * 25.4,
        "centimeter": i => i * 2.54,
        "meter": i => i / 39.3701,
        "kilometer": i => i / 39370.1,
        "inch": i => i,
        "foot": i => i / 12,
        "yard": i => i / 36,
        "mile": i => i / 63360
    }

    const footConvertions = {
        "milimeter": f => f * 304.8,
        "centimeter": f => f * 30.48,
        "meter": f => f / 3.28084,
        "kilometer": f => f / 3280.84,
        "inch": f => f * 12,
        "foot": f => f,
        "yard": f => f / 3,
        "mile": f => f / 5280
    }

    const yardConvertions = {
        "milimeter": y => y * 914.4,
        "centimeter": y => y * 91.44,
        "meter": y => y / 1.09361,
        "kilometer": y => y / 1093.61,
        "inch": y => y * 36,
        "foot": y => y * 3,
        "yard": y => y,
        "mile": y => y / 1760
    }

    const mileConversations = {
        "milimeter": mi => mi * 1.609e+6,
        "centimeter": mi => mi * 160934,
        "meter": mi => mi * 1609.34,
        "kilometer": mi => mi * 1.609,
        "inch": mi => mi * 63360,
        "foot": mi => mi * 5280,
        "yard": mi => mi * 1760,
        "mile": mi => mi
    }

    let result;

    if(from == "milimeter"){
        result = milimeterConvertions[to](parseFloat(input));
    } else if(from == "centimeter"){
        result = centimeterConvertions[to](parseFloat(input));
    } else if(from == "meter"){
        result = meterConvertions[to](parseFloat(input));
    } else if(from == "kilometer"){
        result = kilometerConvertions[to](parseFloat(input));
    } else if(from == "inch"){
        result = inchConvertions[to](parseFloat(input));
    } else if(from == "foot"){
        result = footConvertions[to](parseFloat(input));
    } else if(from == "yard"){
        result = yardConvertions[to](parseFloat(input));
    }else if (from == "mile"){
        result = mileConversations[to](parseFloat(input));
    }

    return result;
}

function calculateWeight(input, from, to){
    const miligramConvertions = {
        "miligram": mg => mg,
        "gram": mg => mg / 1000,
        "kilogram": mg => mg / 1e+6,
        "ounce": mg => mg / 28349.5,
        "pound": mg => mg / 453592
    }

    const gramConvertions = {
        "miligram": g => g * 1000,
        "gram": g => g,
        "kilogram": g => g / 1000,
        "ounce": g => g / 28.3495,
        "pound": g => g / 453.592
    }

    const kilogramConvertions = {
        "miligram": kg => kg * 1e+6,
        "gram": kg => kg * 1000,
        "kilogram": kg => kg,
        "ounce": kg => kg * 35.274,
        "pound": kg => kg * 2.20462
    }

    const ounceConvertions = {
        "miligram": o => o * 28349.5,
        "gram": o => o * 28.3495,
        "kilogram": o => o / 35.274,
        "ounce": o => o,
        "pound": o => o / 16
    }

    const poundConvertions = {
        "miligram": p => p * 453592,
        "gram": p => p * 453.592,
        "kilogram": p => p / 2.20462,
        "ounce": p => p * 16,
        "pound": p => p
    }

    let result;

    if(from == "miligram"){
        result = miligramConvertions[to](parseFloat(input));
    }else if (from == "gram"){
        result = gramConvertions[to](parseFloat(input));
    }else if(from == "kilogram"){
        result = kilogramConvertions[to](parseFloat(input));
    }else if(from == "ounce"){
        result = ounceConvertions[to](parseFloat(input));
    }else if(from == "pound"){
        result = poundConvertions[to](parseFloat(input));
    }
    return result;
}

function calculateTemperature(input, from, to){
    const celciusConvertions = {
        "celsius": c => c,
        "fahrenheit": c => (c * 9/5) + 32,
        "kelvin": c => 	c + 273.15
    }
    const fahrenheitConvertions = {
        "fahrenheit": f => f,
        "celsius": f => (f - 32) * 5/9,
        "kelvin": f => 	(f - 32) * (5/9) + 273.15 
    }
    const kelvinConvertions = {
        "kelvin": k => 	k,
        "celsius": k => k - 273.15,
        "fahrenheit": k => 	(k - 273.15) * 9/5 + 32,
    }

    let result;

    if(from === "celsius"){
        result = celciusConvertions[to](parseFloat(input));
    }else if(from === "fahrenheit"){
        result = fahrenheitConvertions[to](parseFloat(input));
    }else if(from === "kelvin"){
        result = kelvinConvertions[to](parseFloat(input));
    }
    return Math.round(result * 100)/100;
}

function createForm(type){
    document.querySelector(".form-container").innerHTML = "";
    if(type === "lenght"){
        const form = document.createElement("form");
        form.innerHTML = `<input type="number"min="1" name="value" id="value" placeholder="Enter the length to convert" required>
            <div>
                <label for="selectFrom" >From</label>
                <select name="selectFrom" id="from">
                    <option value="milimeter">Milimeter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="meter" selected>Meter</option>
                    <option value="kilometer">Kilometer</option>
                    <option value="inch">Inch</option>
                    <option value="foot">Foot</option>
                    <option value="yard">Yard</option>
                    <option value="mile">Mile</option>
                </select>
            </div>
            <div>
                <label for="selectTo" >To</label>
                <select name="selectTo" id="to">
                    <option value="milimeter">Milimeter</option>
                    <option value="centimeter" selected>Centimeter</option>
                    <option value="meter">Meter</option>
                    <option value="kilometer">Kilometer</option>
                    <option value="inch">Inch</option>
                    <option value="foot">Foot</option>
                    <option value="yard">Yard</option>
                    <option value="mile">Mile</option>
                </select>
            </div>

            <input type="submit" class="button" value="Submit">`

        document.querySelector(".form-container").appendChild(form);
        lenght.classList.add("active");
        weight.classList.remove("active");
        temperature.classList.remove("active");
    }else if(type == "weight"){
        const form = document.createElement("form");
        form.innerHTML = `<input type="number"min="1" name="value" id="value" placeholder="Enter the weight to convert" required>
            <div>
                <label for="selectFrom" >From</label>
                <select name="selectFrom" id="from">
                    <option value="miligram">Miligram</option>
                    <option value="gram">Gram</option>
                    <option value="kilogram" selected>Kilogram</option>
                    <option value="ounce">Ounce</option>
                    <option value="pound">Pound</option>
                </select>
            </div>
            <div>
                <label for="selectTo" >To</label>
                <select name="selectTo" id="to">
                    <option value="miligram">Miligram</option>
                    <option value="gram">Gram</option>
                    <option value="kilogram" selected>Kilogram</option>
                    <option value="ounce">Ounce</option>
                    <option value="pound">Pound</option>
                </select>
            </div>

            <input type="submit" class="button" value="Submit">`

        document.querySelector(".form-container").appendChild(form);
        weight.classList.add("active")
        lenght.classList.remove("active");
        temperature.classList.remove("active");
    }else if(type == "temperature"){
        const form = document.createElement("form");
        form.innerHTML = `<input type="number" min="1" name="value" id="value" placeholder="Enter the temperature to convert" required>
            <div>
                <label for="selectFrom" >From</label>
                <select name="selectFrom" id="from">
                    <option value="celsius" selected>Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>
            <div>
                <label for="selectTo" >To</label>
                <select name="selectTo" id="to">
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit" selected>Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>

            <input type="submit" class="button" value="Submit">`

        document.querySelector(".form-container").appendChild(form);
        temperature.classList.add("active");
        weight.classList.remove("active")
        lenght.classList.remove("active");
    }
}