import chalk from "chalk";
import { todoColor } from "./routers/todo";


export function createColor() {
  return (str) => chalk.bgGray(chalk.blue(str))

}

const appColor = 'hi' + todoColor

export {appColor}
