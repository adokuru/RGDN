import { AppRegistry } from "react-native";
import Splash from "./components/Splash";
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, ()=> Splash);