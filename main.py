from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=["GET","POST"])
def converter():
    if request.method == "POST":
        value = request.form.get("value")
        select_from = request.form.get("selectFrom")
        select_to = request.form.get("selectTo")
        return render_template("index.html", sol=operation(value, select_from, select_to), value=value, select_from=select_from, select_to=select_to)

    return render_template("index.html")


def operation(val, select_from, select_to):
    print(val,select_from,select_to)
    if select_from in ["celsius","fahrenheit", "kelvin"]:
        return temperature(val, select_from,select_to)

def temperature(val, select_from, select_to):
    sol = 0
    val = int(val)
    if str(select_from) == "celsius":
        match str(select_to):
            case "fahrenheit":
                sol = (val * 9/5) + 32
            case "kelvin":
                sol = val + 273.15
            case "celsius":
                sol = val
    elif select_from == "fahrenheit":
        match select_to:
            case "celsius":
                sol = (val - 32) * 5/9
            case "kelvin":
                sol = (val - 32) * 5/9 + 273.15
            case "fahrenheit":
                sol = val
    elif select_from == "kelvin":
        match select_to:
            case "celsius":
                sol = val- 273.15
            case "fahrenheit":
                sol = (val - 273.15) * 9/5 + 32
            case "kelvin":
                sol = val
    return sol


if __name__ == "__main__":
    app.run(debug=True)