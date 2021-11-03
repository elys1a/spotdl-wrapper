import * as cp from "child_process";

export enum formats {
    MP3 = "mp3",
    M4A = "m4a",
    FLAC = "flac",
    OPUS = "opus",
    OGG = "opus",
    WAV = "wav"
}
export const download = async (song:string, format:formats, dlThreads:number, outPutFolder:string, pathTemplate:string, ffmpeg?:string) => {
    if (ffmpeg){
        await cp.exec(`spotdl ${song} --output-format ${format} --dt ${dlThreads} -o "${outPutFolder}" --path-template "${pathTemplate}"" --ffmpeg "${ffmpeg}"`, (e, sout, se) => {
            if (e) throw e;
            console.log(sout);
        })
    } else {
        await cp.exec(`spotdl ${song} --output-format ${format} --dt ${dlThreads} -o "${outPutFolder}" --path-template "${pathTemplate}" `, (e, sout, se) => {
            if (e) throw e;
            console.log(sout);
        })
    }
}