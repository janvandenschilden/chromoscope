import xSpec from "../update-spec-utils/x-spec";
import xeSpec from "../update-spec-utils/xe-spec";
import opacityValueSpec from "../update-spec-utils/opacity-value-spec";
import sizeValueSpec from "../update-spec-utils/size-value-spec";
import yValueSpec from "../update-spec-utils/y-value-spec";
import colorSpec from "../update-spec-utils/color-spec";


import visibilityWindowSpec from "./visibility-window-spec";
import visibilityZoomedInSpec from "./visibility-zoomed-in-spec";
import transformOneofFilterSpec from "../update-spec-utils/transform-oneof-filter-spec";
import svDataSpec from "./sv-data-spec";


export default function markSvZoomedInSpec(
        selected_tileset: string,
        identity : string,
        identity_oneof : Array<string>,
        svtype : string,
        row : number,
        opacity : number,
        height: number, 
        legend : boolean,
        upper_limit: number,
        lower_limit: number,
){
    const h = height / 7
    const s = height / 8
    const spec = {
        mark : "rect" ,
        data: svDataSpec(
            selected_tileset,
        ),
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
        xe : xeSpec(
            "chromEnd",
        ),
        y : yValueSpec(
            row*h,
        ),
        visibility: [
            visibilityZoomedInSpec(),
            ...visibilityWindowSpec(
                upper_limit,
                lower_limit,
            ),
        ],
        opacity : opacityValueSpec(opacity),
        size: sizeValueSpec(s),
        color : colorSpec(
            "svtype",
            "nominal",
            [ "DUP", "DEL", "INS",  "INV",    "BND",    "CNV" ],
            [ "blue","red", "grey", "orange", "purple", "grey" ],
            legend,
        ),
    };
    return spec;
}