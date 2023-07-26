import React from "react";
import { IStackScreenProps } from "./StackScreenProps";

export interface IRouteProps {
    name: string,
    component: React.FunctionComponent<IStackScreenProps>,
}