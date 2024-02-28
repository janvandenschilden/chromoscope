import xSpec from "../update-spec-utils/x-spec";
import opacityValueSpec from "../update-spec-utils/opacity-value-spec";
import sizeValueSpec from "../update-spec-utils/size-value-spec";
import yValueSpec from "../update-spec-utils/y-value-spec";
import colorSpec from "../update-spec-utils/color-spec";


import visibilityZoomedOutSpec from "./visibility-zoomed-out-spec";
import transformOneofFilterSpec from "../update-spec-utils/transform-oneof-filter-spec";


export default function markSvZoomedOutSpec(
        identity : string,
        identity_oneof : Array<string>,
        svtype : string,
        row : number,
        opacity : number,
        height: number, 
){
    const h = height / 7
    const s = height / 8
    const spec = {
        mark : "rect" ,
        dataTransform: [
            transformOneofFilterSpec(
                identity, 
                identity_oneof ,
            ) ,
            transformOneofFilterSpec(
                "svtype", 
                [ svtype ],
            ) ,
        ] ,
        x : xSpec(
            "chromStart",
            "none",
            true,
        ),
        y : yValueSpec(
            row*h,
        ),
        visibility: [
            visibilityZoomedOutSpec(),
        ],
        opacity : opacityValueSpec(opacity),
        size: sizeValueSpec(s),
        color : colorSpec(
            "svtype",
            "nominal",
            [ "DUP", "DEL", "INS",      "INV",    "BND",    "CNV" ],
            [ "blue","red", "grey",     "orange", "purple", "grey" ],
        ),
    };
    return spec;
}