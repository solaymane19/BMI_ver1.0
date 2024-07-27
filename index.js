class BMI {
  static conteur = 0;
  constructor(W, T) {
    this.weight = W;
    this.taille = T;
    this.bmi = this.weight / Math.pow(this.taille, 2);
    BMI.conteur++;
  }
  statue() {
    if (this.bmi < 18.5) {
      return "Underweight";
    } else if (this.bmi <= 25) {
      return "Normal";
    } else if (this.bmi < 30) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }
  static repetition() {
    return `le nombre de repetition est :${BMI.conteur}`;
  }
}

const weight_input = $("#weight");
const taille_input = $("#taille");

const text = $("p");

$("button").click(function () {
  let persone_1 = new BMI(+weight_input.val(), +taille_input.val());
  console.log(persone_1.statue());

  text.html(
    persone_1.statue() +
      `</br>Your BMI is <span>${persone_1.bmi.toFixed(2)}</span>`
  );
  switch (persone_1.statue()) {
    case "Normal":
      $("span").css("color", " #97ff43");
      break;
    case "Underweight":
      $("span").css("color", "rgb(85, 165, 255)");
      break;
    case "Overweight":
      $("span").css("color", "orange");
      break;
    case "Obesity":
      $("span").css("color", "#f54f4f");
      break;
    default:
      break;
  }
  console.log(BMI.repetition());
});
