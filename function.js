import util from "util";
export default function print(objeto) {
  console.log(util.inspect(objeto, false, 24, true));
}
