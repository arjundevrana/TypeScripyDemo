/**
 * Created by NIC on 3/2/2017.
 */
import { sayHello } from "./index";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("demo", "Arjun Dev Rana!");