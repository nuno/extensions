import { ProjectMilestone } from "@linear/sdk";
import { Color, Icon } from "@raycast/api";
import { isMilestoneComplete } from "../api/getIssues";

export function getMilestoneIcon(milestone?: Pick<ProjectMilestone, "id" | "name" | "targetDate">) {
    if (!milestone) {
        return { source: { light: "light/no-project.svg", dark: "dark/no-project.svg" } };
    }

    // const x = isMilestoneComplete(milestone.id)
    // console.log(x)
    if(milestone.name /*are all tasks done?*/){
        return { source: Icon.Layers, tintColor: Color.Purple };
    }else if(milestone.targetDate /*is the milestone active? */){
        return { source: Icon.Layers, tintColor: Color.Yellow };
    }
    return { source: Icon.Layers, tintColor: Color.PrimaryText };
  }